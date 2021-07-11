import React from "react";
import useInputState, { notEmpty } from "../../hooks/use-input-state"
import Input from "../Input";
import "./styles.css";

const Form = () => {
  const inputStateName = useInputState("", [
    notEmpty("Field is required"),
  ])
  const inputStateEmail = useInputState("", [
    notEmpty("Field is required"),
  ])
  const inputStateDob = useInputState("", [
    notEmpty("Field is required"),
  ])
  const inputStateColor = useInputState("", [
    notEmpty("Field is required"),
  ])
  const inputStateSalary = useInputState("", [
    notEmpty("Field is required"),
  ])

  return (
    <>
    <Input
      type="text"
      fieldName="name"
      labelText="Name"
      value={inputStateName.value}
      onChange={inputStateName.onChange}
      onBlur={inputStateName.onBlur}
      errorMessage={inputStateName.errorMessage}
    />
    <Input
      type="email"
      fieldName="email"
      labelText="Email"
      value={inputStateEmail.value}
      onChange={inputStateEmail.onChange}
      onBlur={inputStateEmail.onBlur}
      errorMessage={inputStateEmail.errorMessage}
    />
    <Input
      type="text"
      fieldName="dob"
      labelText="Date of birth"
      value={inputStateDob.value}
      onChange={inputStateDob.onChange}
      onBlur={inputStateDob.onBlur}
      errorMessage={inputStateDob.errorMessage}
    />
    <Input
      type="color"
      fieldName="color"
      labelText="Favourite colour"
      value={inputStateColor.value}
      onChange={inputStateColor.onChange}
    />
     <Input
      type="range"
      min={0}
      max={1000}
      defaultValue={0} 
      step={1}
      fieldName="salary"
      labelText="Salary"
      value={inputStateSalary.value}
      onChange={inputStateSalary.onChange}
    />
    <div className="button">
      <button className="submit-button" onClick={() => {console.log("form submitted")}}>Submit</button>
    </div>
    </>
  );
}

export default Form;
