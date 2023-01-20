/** @format */
import React, { Suspense } from "react"
import dynamic from "next/dynamic"
import { TemplateNameProps } from "./types"

const TemplateName = dynamic(() => import("./index"), { ssr: true })

const LazyTemplateName = (props: TemplateNameProps) => (
  <Suspense fallback={null}>
    <TemplateName {...props} />
  </Suspense>
)

export default LazyTemplateName
