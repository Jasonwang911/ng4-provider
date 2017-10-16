import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';

@Injectable()
export class AnotherProductService implements ProductService{

  constructor() { }

  getProduct(): Product {
    return new Product(1, '荣耀7', 2899, '我觉得荣耀不好用，低配高价');
  }

}
