import React, { useEffect, useState, ReactElement } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { useNavigation } from '@react-navigation/native';

import Logo from '@/assets/logo.svg';
import { CarDto } from '@/models/CarDto';
import { fetchCars } from '@/services/fetchCars';

import Car from '@/components/Car';
import LoadingAnimated from '@/components/LoadingAnimated';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarsList,
} from './styles';

const Home = (): ReactElement => {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<CarDto[]>([]);

  const navigation = useNavigation();

  const handleCardDetails = (car: CarDto) => {
    navigation.navigate('CarDetails', { car });
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
        hidden={false}
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          {!loading && <TotalCars>Total de {cars.length} carros</TotalCars>}
        </HeaderContent>
      </Header>

      {loading ? (
        <LoadingAnimated />
      ) : (
        <CarsList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Car onPress={() => handleCardDetails(item)} data={item} />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
