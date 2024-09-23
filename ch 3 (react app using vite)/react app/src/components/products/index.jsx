import { ProductItem } from "./components/product-index";
import { useState, useEffect } from "react";
import "../../style.css";

const initialFlag = false;
export function ProductList({ myname, mycity }) {
  const [flag, setflag] = useState(initialFlag);
  const [count, setcount] = useState(0);
  const [changeStyle, setchangeStyle] = useState(0);
  var Colors = null;
  const handleClick = () => {
    setflag(!flag);
  };

  useEffect(() => {
    console.log("useEffectCalled");
    if (count >= 10) {
      setchangeStyle(true);
    }
  }, [flag, count]);
  function renderTextBlock(getFlag = true) {
    return flag ? (
      <p className="text-danger">
        my name is {myname} and city is {mycity}
      </p>
    ) : (
      <p className="text-danger">Hello World!</p>
    );
  }
  return (
    <div>
      <h3 className="title">E-Commerce</h3>
      <button onClick={handleClick}>Click here</button>
      {renderTextBlock(flag)}

      <br />
      <button
        style={{
          color: "white",
          backgroundColor: changeStyle ? "yellow" : "black",
        }}
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Count: {count}
      </button>
      <ul>
        {myname.map(function (item, index) {
          return <ProductItem listOfProduct={item} key={index} id={index} />;
        })}
      </ul>
      <ProductItem />
    </div>
  );
}
