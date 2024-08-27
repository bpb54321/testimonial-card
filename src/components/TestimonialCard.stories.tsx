import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialCard } from "./TestimonialCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "TestimonialCard",
  component: TestimonialCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    backgrounds: {
      default: "gradient",
      values: [
        {
          name: "gradient",
          value: "linear-gradient(to bottom, #f9fafb, #d2d6db)",
        },
      ],
    },
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  decorators: [
    (Story) => (
      <>
        <style>
          {`
          html {
            font-size: 16px;
          }
        `}
        </style>
        <Story />
      </>
    ),
  ],
};

export const FontSizeLarge: Story = {
  decorators: [
    (Story) => (
      <>
        <style>
          {`
          html {
            font-size: 20px;
          }
        `}
        </style>
        <Story />
      </>
    ),
  ],
};

export const FontSizeVeryLarge: Story = {
  decorators: [
    (Story) => (
      <>
        <style>
          {`
          html {
            font-size: 24px;
          }
        `}
        </style>
        <Story />
      </>
    ),
  ],
};

export const FontSizeSmall: Story = {
  decorators: [
    (Story) => (
      <>
        <style>
          {`
          html {
            font-size: 12px;
          }
        `}
        </style>
        <Story />
      </>
    ),
  ],
};

export const FontSizeVerySmall: Story = {
  decorators: [
    (Story) => (
      <>
        <style>
          {`
          html {
            font-size: 9px;
          }
        `}
        </style>
        <Story />
      </>
    ),
  ],
};
