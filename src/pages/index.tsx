/** @format */

import { GetStaticProps } from "next"
import Button from "@/components/common/Button/Button.lazy"

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 10000,
  }
}

export default Button
