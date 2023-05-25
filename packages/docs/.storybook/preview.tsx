import React from "react";

import { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";

import "@controle-devs-ui/react/dist/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
  globalTypes: {
    darkMode: {
      defaultValue: true, // Enable dark mode by default on all stories
    },
  },
  decorators: [
    (Story) => (
      <div className="h-full w-full bg-white dark:bg-gray-900">
        <Story />
      </div>
    ),
  ],
};

export default preview;
