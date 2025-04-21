import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from ".";
import { CheckCircle, Info, MailWarning, XCircle } from "lucide-react";

const meta: Meta = {
  title: "Components/Alert",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    style: {
      control: "select",
      options: ["outline", "dash", "soft"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    color: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
  },
  render: (args) => (
    <Alert {...args}>
      <Info />
      <span>12 unread messages. Tap to see.</span>
    </Alert>
  ),
};

export const StateColors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      <Alert color="info" {...args}>
        <Info />
        <span>12 unread messages. Tap to see.</span>
      </Alert>
      <Alert color="success" {...args}>
        <CheckCircle />
        <span>Your purchase has been confirmed!</span>
      </Alert>
      <Alert color="warning" {...args}>
        <MailWarning />
        <span>Warning: Invalid email address!</span>
      </Alert>
      <Alert color="error" {...args}>
        <XCircle />
        <span>Error! Task failed successfully.</span>
      </Alert>
    </div>
  ),
};
