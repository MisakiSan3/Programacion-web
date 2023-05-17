import { CategoryModel } from './category-model';
export interface ProductModel {
  id: number;
  title: string;
  price: number;
  description: string;
  category: CategoryModel;
  images: string[];
}
export interface CreateProductModel extends  Omit<ProductModel, 'id'|'category'>{
 categoryId: number;
}

export interface updateProductModel extends Partial<ProductModel>{
  id: number;
  categoryId?: number;
}

