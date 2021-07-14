import React, { FC } from 'react';
import { StatusOfflineIcon } from '@heroicons/react/solid';
import * as S from './MockIndicator.styles';
import { MOCK_MODE } from '../../config';

const MockIndicator: FC = () => {
  return (
    MOCK_MODE && (
      <S.MockIndicator className="shadow-sm animate-pulse">
        <StatusOfflineIcon />
      </S.MockIndicator>
    )
  );
};

export default MockIndicator;
