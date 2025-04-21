import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  parameters: {
    layout: "centered",
  },
  args: {
    isDisabled: false,
    size: "md",
  },
  argTypes: {
    isDisabled: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    style: {
      control: "select",
      options: ["outline", "dash", "soft", "ghost", "link"],
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
  render: (args) => <Button {...args}>Default</Button>,
};

export const BrandColors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Button color="neutral" {...args}>
        Neutral
      </Button>
      <Button color="primary" {...args}>
        Primary
      </Button>
      <Button color="secondary" {...args}>
        Secondary
      </Button>
      <Button color="accent" {...args}>
        Accent
      </Button>
    </div>
  ),
};

export const StateColors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Button color="info" {...args}>
        Info
      </Button>
      <Button color="success" {...args}>
        Success
      </Button>
      <Button color="warning" {...args}>
        Warning
      </Button>
      <Button color="error" {...args}>
        Error
      </Button>
    </div>
  ),
};
