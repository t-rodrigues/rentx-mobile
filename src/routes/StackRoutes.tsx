import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@/screens/Home';
import CarDetails from '@/screens/CarDetails';
import Scheduling from '@/screens/Scheduling';
import SchedulingDetails from '@/screens/SchedulingDetails';
import SchedulingComplete from '@/screens/SchedulingComplete';
import MyCars from '@/screens/MyCars';
import SignIn from '@/screens/SignIn';
import Splash from '@/screens/Splash';
import FirstStep from '@/screens/SignUp/FirstStep';
import SecondStep from '@/screens/SignUp/SecondStep';

const { Navigator, Screen } = createStackNavigator();

const StackRoutes = (): ReactElement => {
  return (
    <Navigator initialRouteName="SignIn" headerMode="none">
      <Screen
        name="Home"
        component={Home}
        options={{ gestureEnabled: false }}
      />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="MyCars" component={MyCars} />
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUpFirstStep" component={FirstStep} />
      <Screen name="SignUpSecondStep" component={SecondStep} />
    </Navigator>
  );
};

export default StackRoutes;
