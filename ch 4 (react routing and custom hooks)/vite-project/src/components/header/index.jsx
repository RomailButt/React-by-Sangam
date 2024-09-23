import React from "react";

const Header = () => {
  return (
    <>
      <div className="">
        <h1>Header Components</h1>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
          }}
        >
          <li>Recipes</li>
          <li>Comments</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
