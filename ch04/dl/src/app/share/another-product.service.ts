import { Injectable } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {LoggerService} from '../shared/logger.service';

@Injectable()
export class AnotherProductService implements ProductService {

  constructor(private logInfo: LoggerService) { }

  getProduct(): Product {
    this.logInfo.log('这是来自another-product.service，success');
    return new Product(0, 'sumsung', 4899, '最新的三星手机');
  }

}
