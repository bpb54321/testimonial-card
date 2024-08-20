import React from "react";
import type { Preview } from "@storybook/react";
import "../src/output.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="font-noto-sans antialiased">
        <Story />
      </div>
    ),
  ],
};

export default preview;
