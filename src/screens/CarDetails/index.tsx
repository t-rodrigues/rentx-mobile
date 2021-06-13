import React from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';

import Accessory from '@/components/Accessory';
import BackButton from '@/components/BackButton';
import Button from '@/components/Button';
import ImageSlider from '@/components/ImageSlider';

import { CarDto } from '@/services/fetchCars';
import { getAccessoryIcon } from '@/utils/getAccessoryIcon';

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
  About,
  Accessories,
  Footer,
} from './styles';

type Params = {
  car: CarDto;
};

const CarDetails = (): JSX.Element => {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  const handleSchedule = () => {
    navigation.navigate('Scheduling', { car });
  };

  return (
    <Container>
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

        <About>{car.about} </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleSchedule} />
      </Footer>
    </Container>
  );
};

export default CarDetails;
