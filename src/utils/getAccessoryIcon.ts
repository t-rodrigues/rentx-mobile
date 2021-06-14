import React from 'react';
import { SvgProps } from 'react-native-svg';

import Speed from '@/assets/speed.svg';
import Acceleration from '@/assets/acceleration.svg';
import Force from '@/assets/force.svg';
import Gasoline from '@/assets/gasoline.svg';
import Energy from '@/assets/energy.svg';
import Hybrid from '@/assets/hybrid.svg';
import Exchange from '@/assets/exchange.svg';
import People from '@/assets/people.svg';
import Car from '@/assets/car.svg';

export function getAccessoryIcon(type: string): React.FC<SvgProps> {
  switch (type) {
    case 'speed':
      return Speed;
    case 'acceleration':
      return Acceleration;
    case 'turning_diameter':
      return Force;
    case 'gasoline_motor':
      return Gasoline;
    case 'electric_motor' || 'electric':
      return Energy;
    case 'hybrid_motor':
      return Hybrid;
    case 'exchange':
      return Exchange;
    case 'seats':
      return People;
    default:
      return Car;
  }
}
