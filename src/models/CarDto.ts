type Accessory = {
  id: string;
  type: string;
  name: string;
};

type Photo = {
  id: string;
  photo: string;
};

export type CarDto = {
  id: string;
  brand: string;
  name: string;
  about: string;
  period: string;
  price: number;

  fuel_type: string;
  thumbnail: string;
  accessories: Accessory[];
  photos: Photo[];
};
