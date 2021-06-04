import React from 'react';
import { ActivityIndicator } from 'react-native';

import { theme } from '@/styles/theme';

import { Container } from './styles';

type Props = {
  size: 'large' | 'small';
};

const Loading = ({ size }: Props): JSX.Element => {
  return (
    <Container>
      <ActivityIndicator size={size} color={theme.colors.main} />
    </Container>
  );
};

export default Loading;
