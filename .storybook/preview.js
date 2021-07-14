import { Global, ThemeProvider } from '@emotion/react';
import globalStyles from '../styles/globals';
import theme from '../styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Story />
    </ThemeProvider>
  ),
];
