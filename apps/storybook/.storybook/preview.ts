import type { Preview } from '@storybook/react-vite';

//import "@juwel-development/design-system/style.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
