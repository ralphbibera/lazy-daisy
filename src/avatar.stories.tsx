import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from ".";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    modifier: {
      control: "select",
      options: ["online", "offline", "placeholder"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
  render: (args) => (
    <Avatar {...args} className="rounded-full">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </Avatar>
  ),
};

export const Group: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
  render: (args) => (
    <AvatarGroup>
      <Avatar {...args} className="rounded-full">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      </Avatar>
      <Avatar {...args} className="rounded-full">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      </Avatar>
      <Avatar {...args} className="rounded-full">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      </Avatar>
    </AvatarGroup>
  ),
};
