/** @format */

import React, { FC } from "react"
import { TemplateNameProps } from "./types"
import styles from './index.module.scss';
// import { useTemplateName } from './uses';

const TemplateName: FC<TemplateNameProps> = (props) => {
  // const hoge = useTemplateName();
  return (
    <div className={styles.component_name} data-testid="template-name">
      template-name Component
    </div>
  )
}

export default TemplateName
