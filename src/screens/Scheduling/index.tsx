import React from 'react';
import { StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { useTheme } from 'styled-components';

import ArrowRightSvg from '@/assets/arrow.svg';

import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import Calendar from '@/components/Calendar';

import {
  Container,
  Header,
  Back,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';

const Scheduling = (): JSX.Element => {
  const navigation = useNavigation();
  const theme = useTheme();

  const handleScheduleConfirm = () => {
    navigation.navigate('SchedulingDetails');
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <Back>
          <BackButton
            color={theme.colors.shape}
            onPress={() => navigation.goBack()}
          />
        </Back>

        <Title>
          Escolha uma {'\n'}data de início e {'\n'}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>de</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>

          <ArrowRightSvg width={48} height={10} />

          <DateInfo>
            <DateTitle>até</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleScheduleConfirm} />
      </Footer>
    </Container>
  );
};

export default Scheduling;
