import type { Meta, StoryObj } from "@storybook/react";
import { Select } from ".";

const meta: Meta = {
  title: "Components/Select",
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
  render: (args) => (
    <Select.Provider
      aria-label="Animal Selection"
      placeholder="Select an animal"
    >
      <Select.Trigger className="w-48" {...args}>
        <Select.Value />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.Item id="aardvark">Aardvark</Select.Item>
          <Select.Item id="cat">Cat</Select.Item>
          <Select.Item id="dog">Dog</Select.Item>
          <Select.Item id="kangaroo">Kangaroo</Select.Item>
          <Select.Item id="panda">Panda</Select.Item>
          <Select.Item id="snake">Snake</Select.Item>
        </Select.Content>
      </Select.Portal>
    </Select.Provider>
  ),
};
