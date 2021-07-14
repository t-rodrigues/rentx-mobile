import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';

import HomeSvg from '@/assets/home.svg';
import CarSvg from '@/assets/car.svg';
import PeopleSvg from '@/assets/people.svg';

import AppStackRoutes from '@/routes/AppStackRoutes';
import Home from '@/screens/Home';
import MyCars from '@/screens/MyCars';
import { Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

const AppTabRoutes = (): ReactElement => {
  const theme = useTheme();

  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.main,
        inactiveTintColor: theme.colors.textDetail,
        showLabel: false,
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 78,
          backgroundColor: theme.colors.backgroundPrimary,
        },
      }}
    >
      <Screen
        name="Home"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg width={24} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <CarSvg width={24} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => (
            <PeopleSvg width={24} height={24} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default AppTabRoutes;
