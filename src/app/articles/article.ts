import { Categorie } from './../categories/categorie';
export interface Article {
  id: number;
  name: string;
  description: string;
  tax: number;
  price: number;
  category: Categorie;
}
