import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import Loading from '@/components/Loading';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

const Button = ({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false,
  ...rest
}: Props): JSX.Element => {
  return (
    <Container
      color={color}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: !enabled || loading ? 0.5 : 1 }}
      {...rest}
    >
      {loading ? (
        <Loading size="large" />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
