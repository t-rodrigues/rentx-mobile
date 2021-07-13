import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@/screens/Home';
import CarDetails from '@/screens/CarDetails';
import Confirmation from '@/screens/Confirmation';
import Scheduling from '@/screens/Scheduling';
import SchedulingDetails from '@/screens/SchedulingDetails';
import Splash from '@/screens/Splash';

const { Navigator, Screen } = createStackNavigator();

const AppStackRoutes = (): ReactElement => {
  return (
    <Navigator initialRouteName="Home" headerMode="none">
      <Screen name="Splash" component={Splash} />
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
    </Navigator>
  );
};

export default AppStackRoutes;
