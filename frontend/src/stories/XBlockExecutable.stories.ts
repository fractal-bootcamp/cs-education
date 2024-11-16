import XBlockExecutable from "@/components/XBlockExecutable";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "XBlockExecutable",
  component: XBlockExecutable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof XBlockExecutable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Arrays in JavaScript are ordered collections that can hold multiple values of any type. They are defined using square brackets [] and can contain numbers, strings, objects, or even other arrays.\n\nLet's start by learning how to create and access arrays.",
    placeholder: "function fruits() { \n   let fruits = ['apple', 'banana', 'orange'] \n }",
    onExecute: () => {},
  },
};
