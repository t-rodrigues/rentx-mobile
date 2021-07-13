import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Confirmation from '@/screens/Confirmation';
import SignIn from '@/screens/SignIn';
import Splash from '@/screens/Splash';
import FirstStep from '@/screens/SignUp/FirstStep';
import SecondStep from '@/screens/SignUp/SecondStep';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes = (): ReactElement => {
  return (
    <Navigator initialRouteName="Splash" headerMode="none">
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="FirstStep" component={FirstStep} />
      <Screen name="SecondStep" component={SecondStep} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
};

export default AuthRoutes;
