import React from "react";

const CommonSelect = ({
  label,
  name,
  id,
  placeholder,
  value,
  onChangeFunc,
  options,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={id}
        placeholder={placeholder || "Enter Value Here"}
        onChange={onChangeFunc}
      >
        {options?.length > 0
          ? options.map((element, index) => {
              return <option value={element} key={index}>{element}</option>;
            })
          : null}
      </select>
    </div>
  );
};

export default CommonSelect;
