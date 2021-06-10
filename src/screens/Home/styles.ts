import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

type CarData = {
  id: string;
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
};

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

// export const CarsList = styled(FlatList as new () => FlatList<CarData>).attrs({
//   contentContainerStyle: { padding: 16 },
//   showsVerticalScrollIndicator: false,
// })``;

export const CarsList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
  showsVerticalScrollIndicator: false,
})``;
