import XLessonBlockExecutable from "@/components/XLessonBlockExecutable";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "XLessonBlockExecutable",
  component: XLessonBlockExecutable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof XLessonBlockExecutable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Arrays in JavaScript are ordered collections that can hold multiple values of any type. They are defined using square brackets [] and can contain numbers, strings, objects, or even other arrays.\n\nLet's start by learning how to create and access arrays.",
  },
};
