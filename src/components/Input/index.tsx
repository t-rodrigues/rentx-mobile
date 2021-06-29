import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, IconContainer, Icon, InputText } from './styles';

type Props = TextInputProps & {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
};

const Input = ({ iconName, value, ...rest }: Props): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  return (
    <Container>
      <IconContainer isActive={isFocused}>
        <Icon name={iconName} isActive={isFocused} isFilled={isFilled} />
      </IconContainer>

      <InputText
        isActive={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default Input;
