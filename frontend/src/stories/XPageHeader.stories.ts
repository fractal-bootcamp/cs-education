import type { Meta, StoryObj } from "@storybook/react";

import XPageHeader from "../components/XPageHeader";

const meta = {
  title: "XPageHeader",
  component: XPageHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof XPageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Introduction to JavaScript Arrays",
  },
};
