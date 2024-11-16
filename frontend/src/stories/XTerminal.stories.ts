import type { Meta, StoryObj } from "@storybook/react";

import XTerminal from "../components/XTerminal";

const meta = {
  title: "XTerminal",
  component: XTerminal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof XTerminal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // title: "Introduction to JavaScript Arrays",
    // path: "/",
  },
};
