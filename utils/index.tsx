import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Global, ThemeProvider } from '@emotion/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-axe/extend-expect';

import theme from '../styles/theme';
import globalStyles from '../styles/globals';

const Wrapper: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';
export * from 'jest-axe';
export { default as userEvent } from '@testing-library/user-event';

// override render method
export { customRender as render };
