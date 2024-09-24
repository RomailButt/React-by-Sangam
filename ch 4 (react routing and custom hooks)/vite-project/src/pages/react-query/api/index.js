const productList = [
  {
    title: "product 1",
    id: 1,
  },
  {
    title: "product 2",
    id: 2,
  },
  {
    title: "product 3",
    id: 3,
  },
  {
    title: "product 4",
    id: 4,
  },
  {
    title: "product 5",
    id: 5,
  },
];

export const fetchListOfProducts = async () => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productList);
    }, 1000);
  });
};

export const addNewProduct = async (productName) => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const newlyProduct = {
        id: productList.length + 1,
        title: productName,
      };
      productList.push(newlyProduct);
      resolve(newlyProduct);
    }, 1000);
  });
};

export const updateProduct = async (productId, productName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      productList.forEach((ele, index) => {
        if (ele.id === productId) {
          ele.title = productName;
        }
      });
      resolve(productList);
    }, 1000);
  });
};

export const deleteProduct = async (productId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = productList.findIndex((ele) => ele.id === productId);
        if (index !== -1) {
          productList.splice(index, 1);
          resolve(productList);
        } else {
          reject("Product not found");
        }
      }, 1000);
    });
  };