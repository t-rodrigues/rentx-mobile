import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${getStatusBarHeight() + 18}px;
`;

export const Steps = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary600};
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.title};

  margin-top: 48px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary400};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-top: 16px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 64px;
  margin-bottom: 16px;
`;

export const FormTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary600};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};

  margin-bottom: 24px;
`;
