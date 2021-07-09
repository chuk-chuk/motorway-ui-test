import React from "react";
import { render } from "@testing-library/react";
import AvatarPicture from ".";

const image = {
  user: {
    profile_image: "url",
  }
}

describe("AvatarPicture", () => {
  it("renders the component", () => {
    const { getByAltText } = render(<AvatarPicture data={image} />);
    const avaAltText = getByAltText("avatar");
    expect(avaAltText).toBeTruthy()
  })
})
