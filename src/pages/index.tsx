/** @format */

import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 10000,
  }
}

export default () => <>example index</>
