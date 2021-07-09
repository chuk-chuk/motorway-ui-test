import React from "react";
import { render } from "@testing-library/react";
import App from ".";

describe("App", () => {
  it("renders the component", () => {
    const { getByText } = render(<App />);
    const text = getByText("Gallery");
    expect(text).toBeTruthy();
  })
})
