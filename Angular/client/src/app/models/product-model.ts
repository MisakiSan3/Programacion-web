import { CategoryModel } from './category-model';
export interface ProductModel {
  id: number;
  title: string;
  price: number;
  description: string;
  category: CategoryModel;
}
export interface CreateProductModel extends  Omit<ProductModel, 'id'|'category'>{
 categoryId: number;
 images: String[]
}

export interface updateProductModel extends Partial<ProductModel>{
  categoryId?: number;
}

