/** @format */

import { Meta, StoryFn } from "@storybook/react"
import TemplateName from "./index"
import { TemplateNameProps } from "./types"

export const Default = {}
export default {
  component: TemplateName,
  argTypes: {},
} as Meta<typeof TemplateName>

const Template: StoryFn<TemplateNameProps> = (props) => <TemplateName {...props} />

export const Base = Template.bind({})
