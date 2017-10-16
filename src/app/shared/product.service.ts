import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';


@Injectable()
export class ProductService {

  constructor(private logger: LoggerService) { }
  // 提供商品信息的构造函数

  getProduct(): Product{
    this.logger.log('getProduct方法被调用');
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





