import React, { useRef, useState } from 'react';
import { ViewToken } from 'react-native';
import Bullet from '../Bullet';

import {
  Container,
  ImageIndexes,
  CarImageWrapper,
  CarImageList,
  CarImage,
} from './styles';

type Props = {
  imagesUrl: string[];
};

type ChangeImageProps = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

const ImageSlider = ({ imagesUrl }: Props): JSX.Element => {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index;
    setImageIndex(Number(index));
  });

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((_, index) => (
          <Bullet key={index} active={index === imageIndex} />
        ))}
      </ImageIndexes>

      <CarImageList
        data={imagesUrl}
        keyExtractor={key => key}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  );
};

export default ImageSlider;
