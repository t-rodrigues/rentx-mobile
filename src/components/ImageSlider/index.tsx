import React from 'react';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';

type ImageUrl = {
  id: string;
  url: string;
};

type Props = {
  imagesUrl: ImageUrl[];
};

const ImageSlider = ({ imagesUrl }: Props): JSX.Element => {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        {imagesUrl &&
          imagesUrl.map(image => (
            <CarImage
              key={image.id}
              source={{ uri: image.url }}
              resizeMode="contain"
            />
          ))}
      </CarImageWrapper>
    </Container>
  );
};

export default ImageSlider;
