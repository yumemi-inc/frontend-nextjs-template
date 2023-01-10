/** @format */

import is from "./is"

describe("is", () => {
  test("null", () => {
    expect(is.null(null)).toBe(true)
    expect(is.null(undefined)).toBe(true)
    expect(is.null(0)).toBe(false)
    expect(is.null(1)).toBe(false)
    expect(is.null("")).toBe(false)
    expect(is.null("a")).toBe(false)
  })

  test("not null", () => {
    expect(is.notNull(null)).toBe(false)
    expect(is.notNull(undefined)).toBe(false)
    expect(is.notNull(0)).toBe(true)
    expect(is.notNull(1)).toBe(true)
    expect(is.notNull("")).toBe(true)
    expect(is.notNull("a")).toBe(true)
  })
})
