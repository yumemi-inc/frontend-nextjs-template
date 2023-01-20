/** @format */

import { useState, useCallback } from "react"

export const useTemplateName = (initialState = 0) => {
  const [count, setCount] = useState(initialState)
  const increment = useCallback(() => {
    setCount((val) => val + 1)
  }, [])

  const decrement = useCallback(() => {
    setCount((val) => val - 1)
  }, [])

  return {
    count,
    increment,
    decrement,
  }
}
