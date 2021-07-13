import { api } from './api';

import { CarDto } from '@/models/CarDto';

export async function fetchCars(): Promise<CarDto[]> {
  const response = await api.get<CarDto[]>('/cars');

  return response.data;
}
