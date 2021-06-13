import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';

import Logo from '@/assets/logo.svg';
import { CarDto, fetchCars } from '@/services/fetchCars';

import Car from '@/components/Car';
import Loading from '@/components/Loading';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarsList,
  MyCarsButton,
  MyCarsButtonIcon,
} from './styles';

const Home = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<CarDto[]>([]);
  const navigation = useNavigation();

  const handleCardDetails = (car: CarDto) => {
    navigation.navigate('CarDetails', { car });
  };

  const handleOpenMyCars = () => {
    navigation.navigate('MyCars');
  };

  async function loadCars() {
    try {
      const cars = await fetchCars();

      setCars(cars);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCars();
  }, []);

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

          <TotalCars>Total de {cars.length} carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? (
        <Loading size="large" />
      ) : (
        <CarsList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Car onPress={() => handleCardDetails(item)} data={item} />
          )}
        />
      )}

      <MyCarsButton onPress={handleOpenMyCars}>
        <MyCarsButtonIcon name="ios-car-sport" />
      </MyCarsButton>
    </Container>
  );
};

export default Home;
