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
  photos: string[];
};

export async function fetchCars(): Promise<CarDto[]> {
  const response = await api.get<CarDto[]>('/cars');

  return response.data;
}
