import React from 'react';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';

type Props = {
  imagesUrl: string[];
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
          imagesUrl.map((image, index) => (
            <CarImage
              key={index}
              source={{ uri: image }}
              resizeMode="contain"
            />
          ))}
      </CarImageWrapper>
    </Container>
  );
};

export default ImageSlider;
