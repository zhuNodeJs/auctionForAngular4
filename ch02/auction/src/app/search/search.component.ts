import { ProductService } from './../shared/product.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { positiveNumberValidator } from '../validators/formValidators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  protected formModel: FormGroup;
  protected categories: string[];

  constructor(private productService: ProductService) {
    let fb = new FormBuilder();
    this.formModel = fb.group({
      title: ['', Validators.minLength(3)],
      price: [null, positiveNumberValidator],
      category: ['-1']
    });
  }

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
  }

  onSearch() {
     if (this.formModel.valid) {
      //  console.log(this.formModel.value);
      // 点击按钮来控制右边的商品的列表的显示;
      this.productService.searchEvent.emit(this.formModel.value);
     }
  }

}
