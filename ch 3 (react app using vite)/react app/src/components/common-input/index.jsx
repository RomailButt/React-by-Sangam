import React from "react";

const CommonInput = ({label , name , id , placeholder , value , onChangeFunc , type}) => {
  return (
    <>
      <div className="">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder || "Enter Value Here"}
          value={value}
          onChange={onChangeFunc}
        />
      </div>
    </>
  );
};

export default CommonInput;
