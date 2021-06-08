import React from 'react';

import BackButton from '@/components/BackButton';
import ImageSlider from '@/components/ImageSlider';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from './styles';

import Speed from '@/assets/speed.svg';
import Accessory from '@/components/Accessory';
import Button from '@/components/Button';

const CarDetails = (): JSX.Element => {
  return (
    <Container>
      <Header>
        <BackButton />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            {
              id: '63546',
              url: 'https://png2.cleanpng.com/sh/92d23f0c1f1a14ac92bae0c8b73d28c2/L0KzQYi4UsE3N2E9TJGAYUO3c7S8g8k0amEATZC6M0e1RIe8VME2OWQ5SKsBMki5QIWCTwBvbz==/5a34cc5c93b095.1372465415134096286049.png',
            },
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>KKKK</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 320</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380 km/h" icon={Speed} />
          <Accessory name="380 km/h" icon={Speed} />
          <Accessory name="380 km/h" icon={Speed} />
          <Accessory name="380 km/h" icon={Speed} />
          <Accessory name="380 km/h" icon={Speed} />
        </Accessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={() => {}} />
      </Footer>
    </Container>
  );
};

export default CarDetails;
