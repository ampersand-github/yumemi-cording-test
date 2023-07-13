import type { Meta, StoryObj } from "@storybook/react";

// todo 最低一個のstoryを書く必要があるからかいた。後で消す
const Button = () => {
  return <button>button</button>;
}

const meta: Meta<typeof Button> = {
  title: "components/sampleStory",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
