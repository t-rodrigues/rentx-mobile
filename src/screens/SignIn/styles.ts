import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 116}px;
  padding: 0 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary600};
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const SubTitle = styled.Text`
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.primary400};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Form = styled.View`
  margin: 64px 0;
`;

export const Footer = styled.View``;
