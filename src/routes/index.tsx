import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '@/hooks/auth';

import AppTabRoutes from '@/routes/AppTabRoutes';
import AuthRoutes from '@/routes/AuthRoutes';

const Routes = (): ReactElement => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
