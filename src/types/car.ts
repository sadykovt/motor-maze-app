export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  transmission: "automatic" | "manual";
  fuel: "gasoline" | "diesel" | "hybrid" | "electric";
  color: string;
  bodyType: "sedan" | "suv" | "crossover" | "hatchback";
  drive: "fwd" | "rwd" | "awd";
  engine: string;
  power: string;
  image: string;
  description?: string;
}
