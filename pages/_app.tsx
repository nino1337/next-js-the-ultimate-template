import { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import 'tailwindcss/tailwind.css';

import MockIndicator from '../components/MockIndicator/MockIndicator';
import globalStyles from '../styles/globals';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
      <MockIndicator />
    </ThemeProvider>
  );
}

export default MyApp;
