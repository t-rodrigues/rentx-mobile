import React from 'react';
import { ActivityIndicator } from 'react-native';

import { theme } from '@/styles/theme';

import { Container } from './styles';

type Props = {
  size: 'large' | 'small';
  color?: string;
};

const Loading = ({ size, color = theme.colors.main }: Props): JSX.Element => {
  return (
    <Container>
      <ActivityIndicator size={size} color={color} />
    </Container>
  );
};

export default Loading;
