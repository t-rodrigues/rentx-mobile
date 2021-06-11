import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import Logo from '@/assets/logo_background_gray.svg';
import Done from '@/assets/done.svg';

import { Container, Content, Title, Message, Footer } from './styles';
import ConfirmButton from '@/components/ConfirmButton';

const SchedulingComplete = (): JSX.Element => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Logo width={width} />

      <Content>
        <Done width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="Ok" />
      </Footer>
    </Container>
  );
};

export default SchedulingComplete;
