import React, { FC } from 'react';
import * as S from './Button.styles';

interface Props {
  text: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  onButtonClick?: () => void;
}

const Button: FC<Props> = ({ variant = 'primary', text, onButtonClick }) => {
  return (
    <S.Button variant={variant} onClick={onButtonClick}>
      {text}
    </S.Button>
  );
};

export default Button;
