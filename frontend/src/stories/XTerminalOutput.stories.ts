import type { Meta, StoryObj } from "@storybook/react";
import XTerminalOutput from "../components/XTerminalOutput";

const meta: Meta<typeof XTerminalOutput> = {
  component: XTerminalOutput,
};

export default meta;
type Story = StoryObj<typeof XTerminalOutput>;

export const Primary: Story = {
  args: {
    content:
      "Installing dependencies...\nadded 1250 packages, and audited 1251 packages in 3m\n\n125 packages are looking for funding\nfound 0 vulnerabilities",
    createdDate: new Date("2024-03-15T10:30:00Z"),
    terminalPath: "~/project",
  },
};

export const DirectoryListing: Story = {
  args: {
    content:
      "total 32\ndrwxr-xr-x  5 user  group   160 Mar 15 10:30 .\ndrwxr-xr-x  3 user  group    96 Mar 15 10:29 ..",
    createdDate: new Date("2024-03-15T10:31:00Z"),
    terminalPath: "~/project/src",
  },
};

export const SimpleCommand: Story = {
  args: {
    content: "Hello World!",
    createdDate: new Date("2024-03-15T10:32:00Z"),
    terminalPath: "~/project",
  },
};
