import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { format } from 'date-fns';

import { useRoute, useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { CarDto } from '@/services/fetchCars';
import { getAccessoryIcon } from '@/utils/getAccessoryIcon';
import { getPlatformDate } from '@/utils/getPlatformDate';
import { api } from '@/services/api';

import Accessory from '@/components/Accessory';
import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import ImageSlider from '@/components/ImageSlider';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accessories,
  Footer,
  RentalPeriod,
  CalendarWrapper,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  Arrow,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

type Params = {
  car: CarDto;
  dates: string[];
};

type RentalPeriod = {
  start: string;
  end: string;
};

const SchedulingDetails = (): JSX.Element => {
  const [rentalPeriod, setRentalPeriod] = useState({} as RentalPeriod);

  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  const { car, dates } = route.params as Params;

  const rentalTotal = Number(car.rent.price) * dates.length;

  const handleScheduleConfirm = async () => {
    const response = await api.get(`/schedules_bycars/${car.id}`);

    const unavailableDates = [...response.data.unavailable_dates, ...dates];

    await api.post('/schedules_byuser', {
      user_id: 1,
      car,
      startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endDate: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        'dd/MM/yyyy',
      ),
    });

    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates: unavailableDates,
      })
      .then(() => {
        navigation.navigate('SchedulingComplete');
      })
      .catch(() =>
        Alert.alert('Error!', 'Não foi possível conclur sua solicitação'),
      );
  };

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(
        getPlatformDate(new Date(dates[dates.length - 1])),
        'dd/MM/yyyy',
      ),
    });
  }, [dates]);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <BackButton onPress={() => navigation.goBack()} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map(accessory => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <RentalPeriod>
          <CalendarWrapper>
            <CalendarIcon name="calendar" size={RFValue(24)} />
          </CalendarWrapper>

          <DateInfo>
            <DateTitle>de</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Arrow name="chevron-right" size={RFValue(16)} />

          <DateInfo>
            <DateTitle>até</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              {`R$ ${car.rent.price} x${dates.length} diária(s)`}
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {rentalTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleScheduleConfirm}
        />
      </Footer>
    </Container>
  );
};

export default SchedulingDetails;
