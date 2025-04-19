import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  parameters: {
    layout: "centered",
  },
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    style: {
      control: "select",
      options: ["outline", "dash", "soft", "ghost"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "neutral",
  },
  argTypes: {
    color: {
      control: "select",
      options: [
        "neutral",
        "primary",
        "secondary",
        "accent",
        "info",
        "success",
        "warning",
        "error",
      ],
    },
    isDisabled: {
      control: "boolean",
    },
  },
  render: (args) => <Badge {...args}>Default</Badge>,
};

export const BrandColors: Story = {
  render: (args) => (
    <div className="flex gap-2 flex-col">
      <Badge color="neutral" {...args}>
        Neutral
      </Badge>
      <Badge color="primary" {...args}>
        Primary
      </Badge>
      <Badge color="secondary" {...args}>
        Secondary
      </Badge>
      <Badge color="accent" {...args}>
        Accent
      </Badge>
    </div>
  ),
};

export const StateColors: Story = {
  render: (args) => (
    <div className="flex gap-2 flex-col">
      <Badge color="info" {...args}>
        Info
      </Badge>
      <Badge color="success" {...args}>
        Success
      </Badge>
      <Badge color="warning" {...args}>
        Warning
      </Badge>
      <Badge color="error" {...args}>
        Error
      </Badge>
    </div>
  ),
};
