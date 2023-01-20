/** @format */

import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import TemplateName from "./index"
import { TemplateNameMockProps } from "./type"

describe("<Button />", () => {
  test("スナップショットテスト", () => {
    const { asFragment } = render(<TmplateName {...TemplateNameMockProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('成功ケースのテスト', () => {
    render(<TmplateName {...TemplateNameMockProps} />)
    const element = screen.getByTestId('template-name');
    expect(element.innerHTML).toBe('template-name Component');
  })

  test('失敗ケースのテスト', () => {
    render(<TmplateName {...TemplateNameMockProps} />)
    const element = screen.getByTestId('template-name');
    expect(element.innerHTML).toBe('test');
  })
})
