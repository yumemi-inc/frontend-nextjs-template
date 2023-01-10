/** @format */

import { Meta, StoryFn } from "@storybook/react"
import Button from "./Button"
import { ButtonProps } from "./interface"

export const Default = {}
export default {
  component: Button,
  argTypes: {},
} as Meta<typeof Button>

const Template: StoryFn<ButtonProps> = (props) => <Button {...props} />

export const Base = Template.bind({})
