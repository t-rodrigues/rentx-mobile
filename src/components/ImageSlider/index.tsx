import React, { useRef, useState } from 'react';
import { ViewToken } from 'react-native';

import Bullet from '@/components/Bullet';

import {
  Container,
  ImageIndexes,
  CarImageWrapper,
  CarImageList,
  CarImage,
} from './styles';

type Props = {
  imagesUrl: { id: string; photo: string }[];
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
        {imagesUrl.map((item, index) => (
          <Bullet key={item.id} active={index === imageIndex} />
        ))}
      </ImageIndexes>

      <CarImageList
        data={imagesUrl}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item.photo }} resizeMode="contain" />
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
