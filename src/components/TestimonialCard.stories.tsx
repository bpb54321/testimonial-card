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
  args: {
    quote:
      "I've been searching for high-quality abstract images for my design " +
      "projects, and I'm thrilled to have found this platform. The variety and " +
      "depth of creativity are astounding!",
  },
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

const longQuote =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod " +
  "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim " +
  "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea " +
  "commodo consequat. Duis aute irure dolor in reprehenderit in voluptate " +
  "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
  "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id " +
  "est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed " +
  "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad " +
  "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex " +
  "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate " +
  "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
  "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id " +
  "est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed " +
  "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad " +
  "minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex " +
  "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate " +
  "velit esse cillum dolore eu fugiat nulla pariatur.";
export const LongQuote: Story = {
  args: {
    quote: longQuote,
  },
};
