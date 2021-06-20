import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { CarDto } from '@/services/fetchCars';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const Header = styled.View`
  height: 114px;
  width: 100%;

  justify-content: flex-end;
  padding: 32px 24px;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary400};
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.text};
`;

export const CarsList = styled(FlatList as new () => FlatList<CarDto>).attrs({
  contentContainerStyle: { padding: 16 },
  showsVerticalScrollIndicator: false,
})``;

export const MyCarsButton = styled(RectButton)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.main};
`;

export const MyCarsButtonIcon = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(32)}px;
`;
