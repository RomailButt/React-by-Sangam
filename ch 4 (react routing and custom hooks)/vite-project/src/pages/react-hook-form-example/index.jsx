import React from "react";
import { useForm } from "react-hook-form";

const ReactHookFormExamplePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  function onSubmitForm(formData) {
    console.log(formData);
    reset();
  }

  function handleClick() {
    console.log(errors);
  }

  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              type="email"
              name="email"
              id="email"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="">
            <label htmlFor="password">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "Password must not exceed 20 characters",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
                },
              })}
              type="password"
              name="password"
              id="password"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="">
            <button type="submit" onClick={handleClick}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReactHookFormExamplePage;
