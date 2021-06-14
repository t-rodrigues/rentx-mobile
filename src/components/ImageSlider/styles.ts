import styled from 'styled-components/native';
import { Dimensions, FlatList } from 'react-native';

type ImageIndexProps = {
  active: boolean;
};

export const Container = styled.View``;

export const ImageIndexes = styled.View`
  flex-direction: row;
  justify-content: flex-end;

  padding-right: 24px;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 8px;
  height: 8px;
  border-radius: 3px;
  margin-right: 8px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};
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
