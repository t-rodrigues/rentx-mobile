import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Yup from 'yup';

import { useNavigation } from '@react-navigation/native';

import Button from '@/components/Button';
import Input from '@/components/Input';
import PasswordInput from '@/components/PasswordInput';

import { Container, Header, Title, SubTitle, Form, Footer } from './styles';
import { useAuth } from '@/hooks/auth';

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const { signIn } = useAuth();

  const handleSignUp = () => {
    navigation.navigate('SignUpFirstStep');
  };

  const handleSignIn = async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate({ email, password });
      signIn({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert('Opa', error.message);
      }

      return Alert.alert('Erro na autenticação', 'Algo inesperado aconteceu!');
    }
  };

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />

          <Header>
            <Title>Estamos{'\n'}quase lá.</Title>
            <SubTitle>
              Faça seu login para começar{'\n'}uma experiência incrível.
            </SubTitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button
              title="Login"
              onPress={handleSignIn}
              enabled={!!email && !!password}
              loading={false}
            />

            <Button
              title="Criar conta gratuita"
              onPress={handleSignUp}
              type="light"
              light
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
