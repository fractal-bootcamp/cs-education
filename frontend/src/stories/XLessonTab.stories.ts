import type { Meta, StoryObj } from "@storybook/react";

import XLessonTab from "../components/XLessonTab";

const meta = {
  title: "XLessonTab",
  component: XLessonTab,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof XLessonTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Introduction to JavaScript Arrays",
  },
};
