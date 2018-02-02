import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  private product: Product;

  constructor(public productInfo: ProductService) { }

  ngOnInit() {
    this.product = this.productInfo.getProduct();
  }

}
