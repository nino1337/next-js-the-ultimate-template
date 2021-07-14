import '@emotion/react';
import { Theme } from '@emotion/react';

type Colors = {
  primary: string;
  secondary: string;
  text: string;
  white: string;
};

type Fonts = {
  primary: string;
  secondary: string;
};

/**
 * By default, props.theme is an empty object because it’s the only thing that is type-safe as a default.
 * You can define a theme type by extending our type declarations via your own declarations file.
 * see https://emotion.sh/docs/typescript#define-a-theme
 *
 * this is necessary to have auto-completion and to avoid compiling errors when using theme props in styled-components
 */
declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    font: Fonts;
  }
}

const theme: Theme = {
  colors: {
    primary: '#f4db6b',
    secondary: '#f2aa68',
    text: '#333333',
    white: '#ffffff',
  },
  font: {
    primary: 'sans-serif',
    secondary: 'arial',
  },
};

export default theme;
