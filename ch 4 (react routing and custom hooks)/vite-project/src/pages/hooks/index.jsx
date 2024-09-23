import React, { useEffect, useRef } from "react";

const Hooks = () => {
  const countValue = useRef(0);
  const divElementRef = useRef(null);
  const inputRefElement = useRef(null);
  function handleClick() {
    countValue.current++;
    console.log(countValue);
  }

  useEffect(() => {
    const getDeivElement = divElementRef.current;
    const getInputRefElement = inputRefElement.current;

    getDeivElement.style.color = "red";
    setTimeout(() => {
      getDeivElement.style.color = "green";
      getInputRefElement.focus();
    }, 2000);
  });
  return (
    <>
      <h1>useRef, useCallback and useMemo hooks</h1>
      <button onClick={handleClick}>Click me</button>
      <div ref={divElementRef} id="hello">
        Some random text
      </div>
      <input type="text" name="name" ref={inputRefElement} />
    </>
  );
};

export default Hooks;
