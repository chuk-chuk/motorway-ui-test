import React from "react"
import "./styles.css"

const Input = ({
  labelText,
  fieldName,
  placeholder,
  type,
  errorMessage,
  value,
  onChange,
  onBlur,
  disabled = false,
}) => {
  return (
    <div className="input-wrapper">
      <label className="styled-label" htmlFor={fieldName}>{labelText}</label>
      <input
        className="styled-input"
        id={fieldName}
        type={type}
        placeholder={placeholder}
        name={fieldName}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
      <div className="error-message">{errorMessage}</div>
    </div>
  )
}

export default Input
