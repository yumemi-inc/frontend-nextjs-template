/** @format */

const is = {
  null: <T>(value: T | null | undefined): value is null | undefined => value == null,
  notNull: <T>(value: T | null | undefined): value is T => !is.null(value),
  development: process.env.NODE_ENV === "development",
  production: process.env.NODE_ENV === "production",
  test: process.env.NODE_ENV === "test",
}

export default is
