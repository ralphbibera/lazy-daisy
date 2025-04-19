import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from ".";

const meta: Meta<typeof Loading> = {
  title: "Components/Loading",
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
      options: ["spinner", "dots", "ring", "ball", "bars", "infinity"],
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
  },
  render: (args) => <Loading {...args} />,
};

export const BrandColors: Story = {
  render: (args) => (
    <div className="flex gap-2 flex-col">
      <Loading color="neutral" {...args} />
      <Loading color="primary" {...args} />
      <Loading color="secondary" {...args} />
      <Loading color="accent" {...args} />
    </div>
  ),
};

export const StateColors: Story = {
  render: (args) => (
    <div className="flex gap-2 flex-col">
      <Loading color="info" {...args} />
      <Loading color="success" {...args} />
      <Loading color="warning" {...args} />
      <Loading color="error" {...args} />
    </div>
  ),
};
