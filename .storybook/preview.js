/** @type { import('@storybook/web-components').Preview } */
import "@ebay/skin/tokens";
import "@ebay/skin/core";
import "@ebay/skin/marketsans";

const preview = {
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
