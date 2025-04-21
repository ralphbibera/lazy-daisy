import type { Meta, StoryObj } from "@storybook/react";
import { Input, Label, TextField } from "react-aria-components";
import { Modal } from ".";

const meta: Meta = {
  title: "Components/Modal",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Modal.Provider>
      <Modal.Trigger>Sign Up</Modal.Trigger>
      <Modal.Portal>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Sign up</Modal.Title>
          </Modal.Header>
          <TextField>
            <Label>First Name:</Label>
            <Input />
          </TextField>
          <TextField>
            <Label>Last Name:</Label>
            <Input />
          </TextField>
          <Modal.Footer>
            <Modal.Close>Submit</Modal.Close>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Provider>
  ),
};
