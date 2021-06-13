import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import { format } from 'date-fns';

import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import ArrowRightSvg from '@/assets/arrow.svg';
import { getPlatformDate } from '@/utils/getPlatformDate';
import { CarDto } from '@/services/fetchCars';

import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import Calendar, {
  DayProps,
  MarkedDateProps,
  generateInterval,
} from '@/components/Calendar';

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

type RentalPeriod = {
  start: string;
  end: string;
};

type Params = {
  car: CarDto;
};

const Scheduling = (): JSX.Element => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps,
  );
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps,
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod,
  );

  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();

  const { car } = route.params as Params;

  const handleScheduleConfirm = () => {
    if (!rentalPeriod.start || !rentalPeriod.end) {
      return Alert.alert('Atenção!', 'Selecione um intervalo de datas');
    }
    navigation.navigate('SchedulingDetails', {
      car,
      dates: Object.keys(markedDates),
    });
  };

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      start: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      end: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    });
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
            <DateValue selected={!!rentalPeriod.start}>
              {rentalPeriod.start}
            </DateValue>
          </DateInfo>

          <ArrowRightSvg width={48} height={10} />

          <DateInfo>
            <DateTitle>até</DateTitle>
            <DateValue selected={!!rentalPeriod.end}>
              {rentalPeriod.end}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleScheduleConfirm} />
      </Footer>
    </Container>
  );
};

export default Scheduling;
