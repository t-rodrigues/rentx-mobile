import React, {
  ReactElement,
  useState,
  createContext,
  useContext,
} from 'react';

import { api } from '@/services/api';

type User = {
  id: string;
  name: string;
  email: string;
  driver_license: string;
  avatar: string;
};

type AuthState = {
  token: string;
  user: User;
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: User;
  signIn: (credentials: SignInCredentials) => Promise<void>;
};

type AuthProviderProps = {
  children: ReactElement;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps): ReactElement {
  const [data, setData] = useState<AuthState>({} as AuthState);

  async function signIn({ email, password }: SignInCredentials) {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data as AuthState;

    api.defaults.headers.authorization = `Bearer ${token}`;
    setData({ token, user });
  }

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
