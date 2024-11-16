import type { Meta, StoryObj } from "@storybook/react";

import XNavbar from "../components/XNavbar";

const meta = {
  title: "XNavbar",
  component: XNavbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof XNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // title: "Introduction to JavaScript Arrays",
  },
};
