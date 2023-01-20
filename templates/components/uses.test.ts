/** @format */

import { useTemplateName } from "./uses"
import { renderHook, act } from "@testing-library/react"

describe("TemplateName hooks test", () => {
  test("テスト", () => {
    const view = renderHook(() => useTemplateName(1))
    expect(view.result.current.count).toBe(1)

    // hooksのステート変更を伴うイベント
    act(() => view.result.current.increment())
    expect(view.result.current.count).toBe(3)
  })
})
