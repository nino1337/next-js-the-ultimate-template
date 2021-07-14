import { css, SerializedStyles } from '@emotion/react';
import { Theme } from '@emotion/react';

const globalStyles: (theme: Theme) => SerializedStyles = theme => css`
  body,
  html {
    font-family: ${theme.font.primary};
    margin: 0;
    height: 100vh;
  }
`;

export default globalStyles;
