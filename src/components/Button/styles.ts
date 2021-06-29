import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

type ButtonProps = {
  color?: string;
};

type ButtonTitle = {
  light: boolean;
};

export const Container = styled(RectButton)<ButtonProps>`
  background-color: ${({ theme, color }) => color || theme.colors.main};
  width: 100%;
  padding: 18px;
  margin-bottom: 8px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<ButtonTitle>`
  font-family: ${({ theme }) => theme.fonts.primary500};
  color: ${({ theme, light }) =>
    light ? theme.colors.title : theme.colors.shape};
  font-size: ${RFValue(15)}px;
`;
