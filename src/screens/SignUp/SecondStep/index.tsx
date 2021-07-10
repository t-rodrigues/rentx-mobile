import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import BackButton from '@/components/BackButton';
import Bullet from '@/components/Bullet';
import Button from '@/components/Button';
import PasswordInput from '@/components/PasswordInput';

import { Container, Header, Steps, Form, FormTitle } from './styles';

type Params = {
  user: {
    name: string;
    email: string;
    driverLicense: number;
  };
};

const SecondStep = (): JSX.Element => {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const navigation = useNavigation();
  const route = useRoute();

  const { user } = route.params as Params;

  function handleGoBack() {
    navigation.goBack();
  }

  function handleRegister() {
    if (!!password && password === passwordConfirmation) {
      return console.log({
        ...user,
        password,
      });
    }
    console.log('error');
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback>
        <Container>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <Header>
            <BackButton onPress={handleGoBack} />

            <Steps>
              <Bullet />
              <Bullet active />
            </Steps>
          </Header>

          <Form>
            <FormTitle>2. Senha</FormTitle>

            <PasswordInput
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput
              placeholder="Repetir senha"
              onChangeText={setPasswordConfirmation}
              value={passwordConfirmation}
            />
          </Form>

          <Button title="Cadastrar" type="success" onPress={handleRegister} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SecondStep;
