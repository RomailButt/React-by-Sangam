import React, { useState } from 'react'
import CommonForm from "../common-form";
import {registerFormElements} from "../../config";

const initialState = {
  name: '',
  email: '',
  password: '',
  message: '',
  gender: ''
}

const RegisterComponent = () => {
  const [ registerFormData , setRegisterFormData ] = useState(initialState);
  function onHandleSubmit (e){
    e.preventDefault();
    console.log(registerFormData);
    setRegisterFormData(initialState)
  }

  return (
   <>
    <h1>Register</h1>
      <div className="">
        <CommonForm
          formData={registerFormData}
          setFormData={setRegisterFormData}
          formControls={registerFormElements} 
          onHandleSubmit ={onHandleSubmit}
        />
      </div>
   </>
  )
}

export default RegisterComponent