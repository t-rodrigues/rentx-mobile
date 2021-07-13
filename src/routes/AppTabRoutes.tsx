import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppStackRoutes from '@/routes/AppStackRoutes';
import Home from '@/screens/Home';
import MyCars from '@/screens/MyCars';

const { Navigator, Screen } = createBottomTabNavigator();

const AppTabRoutes = (): ReactElement => {
  return (
    <Navigator>
      <Screen name="Home" component={AppStackRoutes} />
      <Screen name="Profile" component={Home} />
      <Screen name="MyCars" component={MyCars} />
    </Navigator>
  );
};

export default AppTabRoutes;
