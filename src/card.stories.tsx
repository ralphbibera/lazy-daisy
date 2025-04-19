import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
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
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    style: {
      control: "select",
      options: ["border", "dash"],
    },
  },
  render: (args) => (
    <Card.Container {...args} className="bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?"
          alt="Shoes"
        />
      </figure>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <Card.Actions className="justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </Card.Actions>
      </Card.Body>
    </Card.Container>
  ),
};
