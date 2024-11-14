import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import XLessonBlockText from "../components/XLessonBlockText";

const meta = {
  title: "XLessonBlockText",
  component: XLessonBlockText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof XLessonBlockText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Arrays in JavaScript are ordered collections that can hold multiple values of any type. They are defined using square brackets [] and can contain numbers, strings, objects, or even other arrays.\n\nLet's start by learning how to create and access arrays.",
  },
};
