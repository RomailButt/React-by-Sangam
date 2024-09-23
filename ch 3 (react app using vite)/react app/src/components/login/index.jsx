import React, { useState } from "react";
import CommonForm from "../common-form";
import {loginFormElements} from "../../config";

const initialState = {
  email: "",
  password: "",
};

const LoginComponent = () => {
  const [loginFormData, setLoginFormData] = useState(initialState);
  function onHandleSubmit (e){
    e.preventDefault();
    console.log(loginFormData);
    setLoginFormData(initialState);
  }
  return (
    <>
      <h1>Login</h1>
      <div className="">
        <CommonForm
          formData={loginFormData}
          setFormData={setLoginFormData}
          formControls={loginFormElements} 
          onHandleSubmit ={onHandleSubmit}
        />
      </div>
    </>
  );
};

export default LoginComponent;
