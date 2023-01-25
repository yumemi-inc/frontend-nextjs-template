/** @format */

import { GetStaticProps } from "next"

const TemplateName = () => {
  return <>example index</>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 10000,
  }
}

export default TemplateName;
