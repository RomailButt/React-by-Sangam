import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  fetchListOfProducts,
  addNewProduct,
  deleteProduct,
  updateProduct,
} from "./api";

const ReactQuery = () => {
  const [productTitle, setProductTitle] = useState("");
  const [editingProductId, setEditingProductId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const getQueryClient = useQueryClient();

  const {
    data: productList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["productList"],
    queryFn: fetchListOfProducts,
  });

  const { mutateAsync: handleAddNewProductMutation } = useMutation({
    mutationFn: addNewProduct,
    onSuccess: () => {
      getQueryClient.invalidateQueries(["productList"]);
    },
  });

  const { mutateAsync: handleDeleteProductMutation } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      getQueryClient.invalidateQueries(["productList"]);
    },
  });

  const { mutateAsync: handleUpdateProductMutation } = useMutation({
    mutationFn: ({ productId, newTitle }) => updateProduct(productId, newTitle),
    onSuccess: () => {
      getQueryClient.invalidateQueries(["productList"]);
      setEditingProductId(null);
      setEditingTitle("");
    },
  });

  async function handleAddNewProduct() {
    await handleAddNewProductMutation(productTitle);
    setProductTitle("");
  }

  async function handleDeleteProduct(productId) {
    await handleDeleteProductMutation(productId);
  }

  async function handleUpdateProduct() {
    await handleUpdateProductMutation({
      productId: editingProductId,
      newTitle: editingTitle,
    });
  }

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error...</h1>;

  return (
    <>
      <div className="">
        <input
          type="text"
          value={productTitle}
          placeholder="Enter product title"
          onInput={(e) => setProductTitle(e.target.value)}
        />
      </div>
      <div className="">
        <button
          onClick={handleAddNewProduct}
          disabled={productTitle.trim() === ""}
        >
          Add New
        </button>
      </div>
      <ul>
        {productList.length > 0
          ? productList.map((ele, index) => (
              <li key={index}>
                {editingProductId === ele.id ? (
                  <div>
                    <input
                      type="text"
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                    />
                    <button onClick={handleUpdateProduct}>Save</button>
                    <button onClick={() => setEditingProductId(null)}>
                      Cancel
                    </button>
                  </div>
                ) : (
                  <>
                    <span>{ele.title}</span>
                    <button onClick={() => handleDeleteProduct(ele.id)}>
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        setEditingProductId(ele.id);
                        setEditingTitle(ele.title);
                      }}
                    >
                      Edit
                    </button>
                  </>
                )}
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default ReactQuery;
