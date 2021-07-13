import React, { ReactElement } from 'react';
import { AuthProvider } from './auth';

type AppProviderProps = {
  children: ReactElement;
};

function AppProvider({ children }: AppProviderProps): ReactElement {
  return <AuthProvider>{children}</AuthProvider>;
}

export { AppProvider };
