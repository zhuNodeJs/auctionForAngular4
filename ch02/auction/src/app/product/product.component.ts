import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Observable<Product[]>;
  // private keyword: string;
  // private titleFilter: FormControl = new FormControl();
  // constructor(private productInfo: ProductService, private productService: ProductService) {
    constructor(private productService: ProductService) {
    // this.titleFilter.valueChanges.debounceTime(500).subscribe(value => this.keyword = value);
    // this.titleFilter.valueChanges.subscribe(value => this.keyword = value);
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    // this.products = this.productInfo.getProducts();
    this.productService.searchEvent.subscribe(
      params => this.products = this.productService.search(params)
    );
  }
}


