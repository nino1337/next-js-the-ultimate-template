import styled from '@emotion/styled';
import xw from 'xwind';

export const MockIndicator = styled.span`
  box-shadow: -1px -1px 14px -1px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  bottom: 24px;
  height: 40px;
  right: 24px;
  padding: 8px;
  position: fixed;
  width: 40px;
`;

// unfortunately this is not working right now, as the package xwind needs to fix an issue with the jit compiling of tailwindcss
/* export const MockIndicator = styled.span`
  box-shadow: -1px -1px 14px -1px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  bottom: 24px;
  height: 30px;
  right: 24px;
  padding: 4px;
  position: fixed;
  width: 30px;

  ${xw`
  shadow-sm
  `}
`; */
