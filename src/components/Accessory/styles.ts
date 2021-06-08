import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: ${RFValue(100)}px;
  height: ${RFValue(92)}px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.backgroundPrimary};

  margin-bottom: 8px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary500};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-bottom: 8px;
`;
