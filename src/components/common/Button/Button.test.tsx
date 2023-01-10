/** @format */

import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Button from "./Button"
import { ButtonMockProps } from "./interface"

describe("<Button />", () => {
  test("it should mount", () => {
    const { asFragment } = render(<Button {...ButtonMockProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
