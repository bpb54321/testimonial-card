import React from "react";
import type { Preview } from "@storybook/react";
import "../src/output.css";

const customViewports = {
  desktop: {
    name: "Desktop",
    styles: {
      width: "1440px",
      height: "768px",
    },
    type: "desktop",
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "768px",
      height: "1024px",
    },
    type: "tablet",
  },
  mobile: {
    name: "Mobile",
    styles: {
      width: "375px",
      height: "812px",
    },
    type: "mobile",
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: "desktop",
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
