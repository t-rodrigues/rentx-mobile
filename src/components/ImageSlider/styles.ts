import styled from 'styled-components/native';
import { Dimensions, FlatList } from 'react-native';

export const Container = styled.View``;

export const ImageIndexes = styled.View`
  flex-direction: row;
  justify-content: flex-end;

  padding-right: 24px;
`;

export const CarImageWrapper = styled.View`
  flex-direction: row;
  width: ${Dimensions.get('window').width}px;
  height: 132px;

  justify-content: center;
  align-items: center;
`;

export const CarImageList = styled(FlatList as new () => FlatList<string>)``;

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`;
