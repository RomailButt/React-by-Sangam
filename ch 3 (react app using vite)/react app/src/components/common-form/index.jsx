"use strict";
import React from "react";
import CommonInput from "../common-input";
import CommonTextarea from "../common-textarea";
import CommonSelect from "../common-select";

const formType = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

const CommonForm = ({
  formControls = [],
  formData,
  setFormData,
  buttonText,
  onHandleSubmit,
}) => {
  function renderFormElement(element) {
    // console.log(element);

    let content = null;
    switch (element?.componentType) {
      case formType.INPUT:
        content = (
          <CommonInput
            name={element.name}
            label={element.label}
            id={element.id}
            placeholder={element.placeholder}
            onChangeFunc={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
            value={formData[element.name]}
            type={element.type}
          />
        );
        break;
      case formType.TEXTAREA:
        content = (
          <CommonTextarea
            name={element.name}
            label={element.label}
            id={element.id}
            placeholder={element.placeholder}
            onChangeFunc={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
            value={formData[element.name]}
            type={element.type}
          />
        );

        break;
        case formType.SELECT:
        content = (
          <CommonSelect
            name={element.name}
            label={element.label}
            id={element.id}
            placeholder={element.placeholder}
            onChangeFunc={(e) => {
              setFormData({
                ...formData,
                [e.target.name]: e.target.value,
              });
            }}
            value={formData[element.name]}
            type={element.type}
            options={element.options  }
          />
        );

        break;

      // default:
      //   content = (
      //     <CommonInput
      //       name={element.name}
      //       label={element.label}
      //       id={element.id}
      //       placeholder={element.placeholder}
      //       onChangeFunc={(e) => {
      //         setFormData({
      //           ...formData,
      //           [e.target.name]: e.target.value,
      //         });
      //       }}
      //       value={formData[element.name]}
      //       type={element.type}
      //     />
      //   );
      //   break;
    }
    return content;
  }

  return (
    <form onSubmit={onHandleSubmit}>
      {formControls?.length > 0 &&
        formControls.map((singleInputData, index) => (
          <div key={index}>{renderFormElement(singleInputData)}</div>
        ))}
      <button type="submit">{buttonText || "Submit"}</button>
    </form>
  );
};

export default CommonForm;
