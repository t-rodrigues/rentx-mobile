import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

import { CarDto } from '@/services/fetchCars';

type CarProps = {
  id: string;
  user_id: string;
  car: CarDto;
  startDate: string;
  endDate: string;
};

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.header};

  padding: ${getStatusBarHeight() + 30}px 24px 24px;
`;

export const Back = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary600};
  font-size: ${RFValue(30)}px;
  line-height: ${RFValue(30)}px;

  color: ${({ theme }) => theme.colors.shape};
  margin-top: 24px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary400};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(34)}px;

  color: ${({ theme }) => theme.colors.shape};

  margin-top: 18px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Appointments = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 30px 0;
`;

export const AppointmentsTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary400};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.text};
`;

export const AppointmentsQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary500};
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.title};
`;

export const CarsList = styled(FlatList as new () => FlatList<CarProps>)``;

export const CarWrapper = styled.View`
  margin-bottom: 16px;
`;

export const CarFooter = styled.View`
  width: 100%;
  margin-top: -14px;
  padding: 14px 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const CarFooterTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.textDetail};

  text-transform: uppercase;
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const CarFooterDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary400};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const CarFooterIcon = styled(AntDesign)`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.textDetail};

  margin: 0 10px;
`;
