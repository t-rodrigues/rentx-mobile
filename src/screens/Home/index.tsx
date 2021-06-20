import React, { useEffect, useState } from 'react';
import { StatusBar, BackHandler } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import Animated, {
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useSharedValue,
} from 'react-native-reanimated';
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

const ButtonAnimated = Animated.createAnimatedComponent(MyCarsButton);

const Home = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<CarDto[]>([]);

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive: (event, ctx: any) => {
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd: () => {
      // positionX.value = 0;
      // positionY.value = 0;
    },
  });

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

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
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

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            { position: 'absolute', right: 24, bottom: 24 },
          ]}
        >
          <ButtonAnimated onPress={handleOpenMyCars}>
            <MyCarsButtonIcon name="ios-car-sport" />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
};

export default Home;
