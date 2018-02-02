import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
export class ProductService {

  constructor(private logInfo: LoggerService) { }

  getProduct(): Product {
    this.logInfo.log('这是打印的消息，success');
    return new Product(0, 'iphone8', 58899, '最新的苹果手机');
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {}
}
