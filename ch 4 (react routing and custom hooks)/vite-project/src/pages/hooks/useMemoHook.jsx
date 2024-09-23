import React, { useMemo, useState } from "react";
import UseFetch from "../../hooks/useFetch";

const UseMemoHook = () => {
  const { data, loading } = UseFetch("https://dummyjson.com/products");
  const [flag, setFlag] = useState(false);
  function filterProductByPrice(getProduct) {
    console.log('rendering');

    return getProduct?.length > 0
      ? getProduct.filter((ele) => ele.price > 10)
      : [];
  }
  const memorizeVersion = useMemo(() => {
   return filterProductByPrice(data?.products);
  }, [data?.products]);
  if (loading) {
    return (
      <>
        <div className="">Loading</div>
      </>
    );
  }

  return (
    <>
      <div
        style={{
          color: flag ? "green" : "red",
        }}
      >
        useMemoHook
      </div>
      <button onClick={() => setFlag(!flag)}>Click Me</button>
      <ul>
        {memorizeVersion.map((item, key) => (
          <li key={key}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default UseMemoHook;
