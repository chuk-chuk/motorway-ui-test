import React from "react";
import useInputState, { notEmpty } from "../../hooks/use-input-state"
import Input from "../Input";
import "./styles.css";

const Form = () => {
  const inputState = useInputState("", [
    notEmpty("Field is required"),
  ])

  return (
    <>
    <Input
      type="email"
      fieldName="email"
      labelText="Email"
      value={inputState.value}
      onChange={inputState.onChange}
      onBlur={inputState.onBlur}
      errorMessage={inputState.errorMessage}
    />
    </>
  );
}

export default Form;
