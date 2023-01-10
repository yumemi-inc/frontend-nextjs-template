/** @format */

import { GetServerSideProps } from "next"
import React, { FC } from "react"
interface ITemplateName {
  exampleValue: string
}

const TemplateName: FC<ITemplateName> = () => <></>

export const getStaticProps: GetServerSideProps<ITemplateName> = async (_context) => {
  return {
    props: {
      exampleValue: "hoge",
    },
  }
}

export default TemplateName
