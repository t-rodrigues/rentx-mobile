import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
}

const Button = ({ title, color, onPress, ...rest }: Props): JSX.Element => {
  return (
    <Container color={color} onPress={onPress} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
