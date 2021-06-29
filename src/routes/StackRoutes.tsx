import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@/screens/Home';
import CarDetails from '@/screens/CarDetails';
import Scheduling from '@/screens/Scheduling';
import SchedulingDetails from '@/screens/SchedulingDetails';
import SchedulingComplete from '@/screens/SchedulingComplete';
import MyCars from '@/screens/MyCars';
import SignIn from '@/screens/SignIn';
import Splash from '@/screens/Splash';

const { Navigator, Screen } = createStackNavigator();

const StackRoutes = (): JSX.Element => {
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
    </Navigator>
  );
};

export default StackRoutes;
