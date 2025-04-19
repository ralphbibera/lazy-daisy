import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from ".";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    allowsMultipleExpanded: false,
  },
  argTypes: {
    allowsMultipleExpanded: {
      control: "boolean",
    },
  },
  render: (args) => (
    <Accordion.Provider
      className="w-96"
      allowsMultipleExpanded={args.allowsMultipleExpanded}
    >
      <Accordion.Item>
        <Accordion.Trigger>What is this?</Accordion.Trigger>
        <Accordion.Content>It's an accordion component.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>How does it work?</Accordion.Trigger>
        <Accordion.Content>
          Click to expand and see more content.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Trigger>Why use it?</Accordion.Trigger>
        <Accordion.Content>
          To keep things clean and organized.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Provider>
  ),
};
