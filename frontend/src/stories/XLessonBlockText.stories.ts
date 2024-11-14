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
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof XLessonBlockText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    // label: "Button",
  },
};
