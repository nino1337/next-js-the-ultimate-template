import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
}

export const Button = styled.button<ButtonProps>`
  appearance: none;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  min-width: 200px;
  padding: 12px;
  text-transform: uppercase;
  width: fit-content;

  ${({ variant, theme }) =>
    variant === 'primary' &&
    css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    `}

  ${({ variant, theme }) =>
    variant === 'secondary' &&
    css`
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
    `}
`;
