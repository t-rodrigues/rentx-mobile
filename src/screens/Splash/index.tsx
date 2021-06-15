import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';

import Brand from '@/assets/brand.svg';
import Logo from '@/assets/logo.svg';

import { Container } from './styles';

const Splash = (): JSX.Element => {
  const splashAnimation = useSharedValue(0);
  const navigation = useNavigation();

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [0, -200],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.5, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [-200, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  function startApp() {
    navigation.navigate('Home');
  }

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1000 }, () => {
      'worklet';
      runOnJS(startApp)();
    });
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" hidden />

      <Animated.View style={[{ position: 'absolute' }, brandStyle]}>
        <Brand width={80} height={50} />
      </Animated.View>

      <Animated.View style={[{ position: 'absolute' }, logoStyle]}>
        <Logo width={180} height={50} />
      </Animated.View>
    </Container>
  );
};

export default Splash;
