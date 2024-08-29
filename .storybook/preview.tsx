import React from "react";
import type { Preview } from "@storybook/react";
import "../src/output.css";
import { testViewports } from "../test-viewports";

const customViewports = {
  desktop: {
    name: testViewports.desktop.name,
    styles: {
      width: `${testViewports.desktop.width}px`,
      height: `${testViewports.desktop.height}px`,
    },
    type: "desktop",
  },
  tablet: {
    name: testViewports.tablet.name,
    styles: {
      width: `${testViewports.tablet.width}px`,
      height: `${testViewports.tablet.height}px`,
    },
    type: "tablet",
  },
  mobile: {
    name: testViewports.mobile.name,
    styles: {
      width: `${testViewports.mobile.width}px`,
      height: `${testViewports.mobile.height}px`,
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
