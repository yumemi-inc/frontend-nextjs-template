/** @format */

import { GetStaticProps, GetStaticPaths } from "next"
import React, { FC } from "react"

interface ITemplateName {
  exampleValue: string
}

const TemplateName: FC<ITemplateName> = () => {
  return <></>;
}

/* pathが固定の場合は削除する */
export const getStaticPaths: GetStaticPaths = () => {
  return {
    // paths https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
    paths: [],
    // fallback https://nextjs.org/docs/basic-features/data-fetching/get-static-paths#how-does-getstaticprops-run-with-regards-to-getstaticpaths
    fallback: true, // false or "blocking"
  }
}

export const getStaticProps: GetStaticProps<ITemplateName> = async (_context) => {
  return {
    props: {
      exampleValue: "hoge",
    },
  }
}

export default TemplateName
