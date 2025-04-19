import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu } from ".";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/Dropdown Menu",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu.Provider>
      <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item onAction={() => alert("Profile")}>
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item onAction={() => alert("Settings")}>
            Settings
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onAction={() => alert("Logout")}
            className="text-error"
          >
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Provider>
  ),
};
