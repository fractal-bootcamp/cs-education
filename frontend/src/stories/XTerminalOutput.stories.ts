import type { Meta, StoryObj } from "@storybook/react";

import XTerminalOutput from "../components/XTerminalOutput";

const meta = {
  title: "XTerminalOuput",
  component: XTerminalOutput,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof XTerminalOutput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    content: "['orange', 'banana', 'apple']",
    createdDate: new Date(),
    terminalPath: "~/arrays/lesson-1",
  },
};
