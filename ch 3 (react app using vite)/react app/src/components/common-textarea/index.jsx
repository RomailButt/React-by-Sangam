import React from "react";

const CommonTextarea = ({
  label,
  name,
  id,
  placeholder,
  value,
  onChangeFunc,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder || "Enter Value Here"}
        value={value}
        onChange={onChangeFunc}
      />
    </div>
  );
};

export default CommonTextarea;
