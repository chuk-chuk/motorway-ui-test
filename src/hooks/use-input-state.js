import { useState } from "react"

// Validator
export const notEmpty = (errorMessage) => (value) =>
  !value ? errorMessage : null

// Hooks
const useInputState = (
  initialValue,
  validations
) => {
  const [{ value, blurred }, setState] = useState({
    value: initialValue,
    blurred: false,
  })

  const errorMessage =
    validations
      .map((validation) => validation(value))
      .find((message) => message) || ""

  return {
    value,
    hasValidValue: !errorMessage,
    errorMessage: blurred ? errorMessage : "",
    onChange: (event) => {
      const newValue = event.target.value
      setState((prev) => ({ ...prev, value: newValue }))
    },
    onBlur: () => setState((prev) => ({ ...prev, blurred: true })),
  }
}

export default useInputState
