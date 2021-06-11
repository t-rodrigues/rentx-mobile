import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import Done from '@/assets/done.svg';
import Logo from '@/assets/logo_background_gray.svg';

import ConfirmButton from '@/components/ConfirmButton';

import { Container, Content, Title, Message, Footer } from './styles';

const SchedulingComplete = (): JSX.Element => {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  const handleConfirm = () => {
    navigation.navigate('Home');
  };

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
        <ConfirmButton title="Ok" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
};

export default SchedulingComplete;
