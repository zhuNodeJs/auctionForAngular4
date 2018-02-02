import { Component, OnInit } from '@angular/core';
import {AnotherProductService} from '../share/another-product.service';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
  /**
   * ,
   providers: [
   {provide: ProductService, useClass: AnotherProductService}
   ]
   */
})
export class Product2Component implements OnInit {

  private product: Product;

  constructor(private productInfo: ProductService) { }

  ngOnInit() {
    this.product = this.productInfo.getProduct();
  }

}
