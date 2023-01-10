/** @format */

import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import TemplateName from "./TemplateName"
import { TemplateNameMockProps } from "./interface"

describe("<TemplateName />", () => {
  test("it should mount", () => {
    const { asFragment } = render(<TemplateName {...TemplateNameMockProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
