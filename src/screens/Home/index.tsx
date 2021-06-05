import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '@/assets/logo.svg';
import Car from '@/components/Car';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarsList,
} from './styles';

const Home = (): JSX.Element => {
  const car = {
    id: 'wer3',
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'ao dia',
      price: 120,
    },
    thumbnail:
      'https://e7.pngegg.com/pngimages/790/861/png-clipart-2018-audi-rs-5-car-audi-s5-audi-a5-audi-rs5-car-performance-car-thumbnail.png',
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarsList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={item => String(item)}
        renderItem={() => <Car data={car} />}
      />
    </Container>
  );
};

export default Home;
