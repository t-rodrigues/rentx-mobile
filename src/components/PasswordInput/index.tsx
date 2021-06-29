import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  IconContainer,
  Icon,
  InputText,
  ChangePasswordVisibilityButton,
  VisibilityIcon,
} from './styles';

type Props = TextInputProps & {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
};

const PasswordInput = ({ iconName, value, ...rest }: Props): JSX.Element => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  const handleVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  return (
    <Container>
      <IconContainer isActive={isFocused}>
        <Icon name={iconName} isActive={isFocused} isFilled={isFilled} />
      </IconContainer>

      <InputText
        {...rest}
        secureTextEntry={isPasswordVisible}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isActive={isFocused}
      />

      <ChangePasswordVisibilityButton onPress={handleVisibility}>
        <IconContainer isActive={isFocused}>
          <VisibilityIcon
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            isActive={isFocused}
            isFilled={isFilled}
          />
        </IconContainer>
      </ChangePasswordVisibilityButton>
    </Container>
  );
};

export default PasswordInput;
