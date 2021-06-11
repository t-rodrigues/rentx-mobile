import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/core';
import { useTheme } from 'styled-components';

import Speed from '@/assets/speed.svg';

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

const SchedulingDetails = (): JSX.Element => {
  const navigation = useNavigation();
  const theme = useTheme();

  const handleScheduleConfirm = () => {
    navigation.navigate('SchedulingComplete');
  };

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            {
              id: '63546',
              url: 'https://png2.cleanpng.com/sh/92d23f0c1f1a14ac92bae0c8b73d28c2/L0KzQYi4UsE3N2E9TJGAYUO3c7S8g8k0amEATZC6M0e1RIe8VME2OWQ5SKsBMki5QIWCTwBvbz==/5a34cc5c93b095.1372465415134096286049.png',
            },
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>KKKK</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 320</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380 km/h" icon={Speed} />
          <Accessory name="380 km/h" icon={Speed} />
          <Accessory name="380 km/h" icon={Speed} />
          <Accessory name="380 km/h" icon={Speed} />
          <Accessory name="380 km/h" icon={Speed} />
        </Accessories>

        <RentalPeriod>
          <CalendarWrapper>
            <CalendarIcon name="calendar" size={RFValue(24)} />
          </CalendarWrapper>

          <DateInfo>
            <DateTitle>de</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Arrow name="chevron-right" size={RFValue(16)} />

          <DateInfo>
            <DateTitle>até</DateTitle>
            <DateValue>20/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
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
