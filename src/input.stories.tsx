import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import { Mail } from "lucide-react";

const meta: Meta = {
  title: "Components/Input",
  parameters: {
    layout: "centered",
  },
  args: {
    disabled: false,
    size: "md",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    style: {
      control: "select",
      options: ["ghost"],
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
    label: {
      control: "select",
      options: ["start", "end"],
    },
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
  },
  render: (args) => <Input {...args} />,
};

export const BrandColors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Input color="neutral" placeholder="Neutral" {...args} />
      <Input color="primary" placeholder="Primary" {...args} />
      <Input color="secondary" placeholder="Secondary" {...args} />
      <Input color="accent" placeholder="Accent" {...args} />
      <Input color="info" placeholder="Info" {...args} />
      <Input color="success" placeholder="Success" {...args} />
      <Input color="warning" placeholder="Warning" {...args} />
      <Input color="error" placeholder="Error" {...args} />
    </div>
  ),
};

export const StateColors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Input color="info" placeholder="Info" {...args} />
      <Input color="success" placeholder="Success" {...args} />
      <Input color="warning" placeholder="Warning" {...args} />
      <Input color="error" placeholder="Error" {...args} />
    </div>
  ),
};

export const Label: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Input {...args} placeholder="email@domain.com">
        <Mail className="size-4" />
      </Input>
      <Input {...args} label="end" placeholder="domain">
        .com
      </Input>
    </div>
  ),
};
