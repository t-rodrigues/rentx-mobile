import { api } from './api';

type Rent = {
  period: string;
  price: number;
};

type Accessory = {
  type: string;
  name: string;
};

export type CarDto = {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: Rent;
  fuel_type: string;
  thumbnail: string;
  accessories: Accessory[];
  photos: [''];
};

export async function fetchCars(): Promise<Car[]> {
  const response = await api.get<Car[]>('/cars');

  return response.data;
}
