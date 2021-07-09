import React from 'react';

import { Container } from './styles';

type Props = {
  active?: boolean;
};

const Bullet = ({ active = false }: Props): JSX.Element => {
  return <Container active={active} />;
};

export default Bullet;
