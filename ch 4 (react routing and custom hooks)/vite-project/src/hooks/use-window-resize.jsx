import React, { useLayoutEffect, useState } from "react";

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function handleSize(){
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
};

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);
  return windowSize;
};

export default useWindowResize;
