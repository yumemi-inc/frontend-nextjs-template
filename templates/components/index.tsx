/** @format */

import React, { FC } from "react"
import { TemplateNameProps } from "./interface"
// import { useTemplateName } from './uses'; 

const TemplateName: FC<TemplateNameProps> = (props) => {
  // const hoge = useTemplateName();
  return (
    <div data-testid="template-name">
      template-name Component
    </div>
  )
}

export default TemplateName
