/** @format */
import React, { Suspense } from "react"
import dynamic from "next/dynamic"
import { TemplateNameProps } from "./interface"

const TemplateName = dynamic(() => import("./TemplateName"), { ssr: true })

const LazyTemplateName = (props: TemplateNameProps) => (
  <Suspense fallback={null}>
    <TemplateName {...props} />
  </Suspense>
)

export default LazyTemplateName
