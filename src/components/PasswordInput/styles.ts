import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

type Props = {
  isActive: boolean;
};

type IconProps = Props & {
  isFilled: boolean;
};

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View<Props>`
  width: 56px;
  height: 56px;
  margin-right: 2px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  ${({ isActive, theme }) =>
    isActive &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main}};
    `}
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: 24px;
  color: ${({ theme, isActive, isFilled }) =>
    isActive || isFilled ? theme.colors.main : theme.colors.text};
`;

export const InputText = styled(TextInput)<Props>`
  flex: 1;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  font-family: ${({ theme }) => theme.fonts.primary400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};

  padding: 0 22px;

  ${({ isActive, theme }) =>
    isActive &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main}};
    `}
`;

export const ChangePasswordVisibilityButton = styled(BorderlessButton)``;

export const VisibilityIcon = styled(Feather)<IconProps>`
  font-size: 24px;
  color: ${({ theme, isActive, isFilled }) =>
    isActive || isFilled ? theme.colors.main : theme.colors.text};
`;
