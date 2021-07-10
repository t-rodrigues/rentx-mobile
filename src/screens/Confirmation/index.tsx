import React, { ReactElement } from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import Done from '@/assets/done.svg';
import Logo from '@/assets/logo_background_gray.svg';

import ConfirmButton from '@/components/ConfirmButton';

import { Container, Content, Title, Message, Footer } from './styles';
import { useRoute } from '@react-navigation/native';

type ConfirmationParams = {
  title: string;
  message: string;
  nextScreenRoute: string;
};

const Confirmation = (): ReactElement => {
  const navigation = useNavigation();
  const route = useRoute();
  const { width } = useWindowDimensions();

  const { title, message, nextScreenRoute } =
    route.params as ConfirmationParams;

  const handleConfirm = () => {
    navigation.navigate(nextScreenRoute);
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
        <Title>{title}</Title>

        {message && <Message>{message}</Message>}
      </Content>

      <Footer>
        <ConfirmButton title="Ok" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
};

export default Confirmation;
