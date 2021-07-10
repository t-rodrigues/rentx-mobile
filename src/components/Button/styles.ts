import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import { theme } from '@/styles/theme';

const COLORS = {
  main: theme.colors.main,
  success: theme.colors.success,
  light: theme.colors.backgroundSecondary,
};

export const Container = styled(RectButton)<{
  type: 'main' | 'success' | 'light';
}>`
  background-color: ${({ type }) => COLORS[type]};
  width: 100%;
  padding: 18px;
  margin-bottom: 8px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<{ light: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary500};
  color: ${({ theme, light }) =>
    light ? theme.colors.title : theme.colors.shape};
  font-size: ${RFValue(15)}px;
`;
