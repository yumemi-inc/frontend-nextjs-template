/** @format */
import React, { Suspense } from "react"
import dynamic from "next/dynamic"
import { ButtonProps } from "./interface"

const Button = dynamic(() => import("./Button"), { ssr: true })

const LazyButton = (props: ButtonProps) => (
  <Suspense fallback={null}>
    <Button {...props} />
  </Suspense>
)

export default LazyButton
