/** @format */

import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Button from "./Button"
import { ButtonMockProps } from "./interface"

describe("<Button />", () => {
  test("スナップショットテスト", () => {
    const { asFragment } = render(<Button {...ButtonMockProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('成功ケースのテスト', () => {
    render(<Button {...ButtonMockProps} />)
    const element = screen.getByTestId('button');
    expect(element.innerHTML).toBe('button Component');
  })

  test('失敗ケースのテスト', () => {
    render(<Button {...ButtonMockProps} />)
    const element = screen.getByTestId('button');
    expect(element.innerHTML).toBe('test');
  })
})
