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
    terminalOutputs: [
      {
        content:
          "total 32\ndrwxr-xr-x  5 user  group   160 Mar 15 10:30 .\ndrwxr-xr-x  3 user  group    96 Mar 15 10:29 ..",
        createdDate: new Date("2024-03-15T10:30:00Z"),
        terminalPath: "~/project",
      },
      {
        content:
          "Installing dependencies...\nadded 1250 packages, and audited 1251 packages in 3m\n\n125 packages are looking for funding",
        createdDate: new Date("2024-03-15T10:31:00Z"),
        terminalPath: "~/project",
      },
      {
        content: "Hello World!",
        createdDate: new Date("2024-03-15T10:32:00Z"),
        terminalPath: "~/project/src",
      },
    ],
  },
};
