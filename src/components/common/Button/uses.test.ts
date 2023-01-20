/** @format */

import { useCounter } from "./uses"
import { renderHook, act } from "@testing-library/react"

describe("Button hooks test", () => {
  test("example", () => {
    const view = renderHook(() => useCounter(1))
    expect(view.result.current.count).toBe(1)

    // hooksのステート変更を伴うイベント
    act(() => view.result.current.increment())
    expect(view.result.current.count).toBe(2)
  })

})
