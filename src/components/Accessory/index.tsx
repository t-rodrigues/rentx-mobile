import React from 'react';
import { SvgProps } from 'react-native-svg';

import { useTheme } from 'styled-components';

import { Container, Name } from './styles';

type Props = {
  name: string;
  icon: React.FC<SvgProps>;
};

const Accessory = ({ name, icon: Icon }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Container>
      <Icon width={32} height={32} fill={theme.colors.title} />
      <Name>{name}</Name>
    </Container>
  );
};

export default Accessory;
