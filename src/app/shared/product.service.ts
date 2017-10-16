import { Injectable } from '@angular/core';

// export class Product {
//   id: number;
//   name: string;
// }

// export const PRODUCT: Product[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];

@Injectable()
export class ProductService {

  constructor() { }
  // 提供商品信息的构造函数
  // product: Product =  {id: 0, title: 'xiaomi6', price: 2599, desc: '小米手机666'}

  // getProduct(): Product[] {
  //   return PRODUCT;
  // }

  getProduct(): Product{
    return new Product(0, 'xiaomi6', 2599, '小米手机666');
  }
 }

export class Product {

  constructor(
    public id:number,
    public title:string,
    public price:number,
    public desc:string
  ) {

  }

}





