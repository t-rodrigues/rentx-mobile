import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { CarDto } from '@/services/fetchCars';
import { api } from '@/services/api';

import BackButton from '@/components/BackButton';
import Car from '@/components/Car';
import Loading from '@/components/Loading';

import {
  Container,
  Header,
  Back,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarsList,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
  CarFooterIcon,
} from './styles';

type CarProps = {
  id: string;
  user_id: string;
  car: CarDto;
  startDate: string;
  endDate: string;
};

const MyCars = (): JSX.Element => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const navigation = useNavigation();

  const loadData = async () => {
    try {
      const response = await api.get(`/schedules_byuser?user_id=1`);

      setCars(response.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

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

        <Title>Seus agendamentos, estão aqui.</Title>

        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>

      {loading ? (
        <Loading size="large" />
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>{Number(cars.length)}</AppointmentsQuantity>
          </Appointments>

          <CarsList
            data={cars}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <CarFooterIcon name="arrowright" />
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
            showsVerticalScrollIndicator={false}
          />
        </Content>
      )}
    </Container>
  );
};

export default MyCars;
