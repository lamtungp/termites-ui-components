import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components/Button";
import { ThemeProvider, createTheme } from "../themes";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

//👇 The ListTemplate construct will be spread to the existing stories.
const Template: Story = {
  render: ({ ...args }) => {
    const theme = createTheme();
    return (
      <ThemeProvider theme={theme}>
        <Button {...args} />
      </ThemeProvider>
    );
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  ...Template,
  args: {
    label: "Button",
  },
};

export const Secondary: Story = {
  ...Template,
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  ...Template,
  args: {
    size: "small",
    label: "Button",
  },
};
