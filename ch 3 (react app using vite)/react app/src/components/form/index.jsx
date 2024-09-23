import React, { useState } from "react";

const FormComponent = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  //   function handleInputChange(e) {
  //     setNameValue(e.target.value);
  //   }
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(emailValue, nameValue);
    console.log(formData);
  }
  function handleOnChange(e) {
    const { name, value } = e.target;
    console.log({
        ...formData,
        [name]: value,
      });
    
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  return (
    <>
      <div className="">
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={formData.name}
            type="text"
            name="name"
            id=""
            placeholder="Enter Name"
            onChange={handleOnChange}
          />
          <input
            value={formData.email}
            type="email"
            name="email"
            id=""
            placeholder="Enter Email"
            onChange={handleOnChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default FormComponent;
