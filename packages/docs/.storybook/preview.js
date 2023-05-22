/** @type { import('@storybook/react').Preview } */

import "@controle-devs-ui/react/dist/index.css"

import  {themes} from '@storybook/theming'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
     docs:{
      theme:themes.dark
    },
    darkMode: {
      darkClass: 'dark',
      lightClass: 'light',
      stylePreview: true,
    },

  }

};

export default preview;

export const globalTypes = {
   darkMode: {
      defaultValue: true
    }
};
