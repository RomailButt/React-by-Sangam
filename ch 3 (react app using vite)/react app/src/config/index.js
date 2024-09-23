export const loginFormElements = [
  {
    name: "email",
    id: "email",
    placeholder: "Enter your email address",
    label: "Email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    id: "password",
    placeholder: "Enter your password",
    label: "Password",
    type: "password",
    componentType: "input",
  },
];

export const registerFormElements = [
  {
    name: "name",
    id: "name",
    placeholder: "Enter your name",
    label: "Name",
    type: "text",
    componentType: "input",
  },
  {
    name: "email",
    id: "email",
    placeholder: "Enter your email address",
    label: "Email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    id: "password",
    placeholder: "Enter your password",
    label: "Password",
    type: "password",
    componentType: "input",
  },
  {
    name: "message",
    id: "message",
    placeholder: "Enter your message",
    label: "Message",
    type: "text",
    componentType: "textarea",
  },
  {
    name: "gender",
    id: "gender",
    placeholder: "Enter your gender",
    label: "Gender",
    type: "text",
    componentType: "select",
    options: ["male", "female"],
  },
];

export default {
  registerFormElements,
  loginFormElements,
};
