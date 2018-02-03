import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Product[];

  constructor(private productInfo: ProductService) { }

  ngOnInit() {
    this.products = this.productInfo.getProducts();
  }
}


