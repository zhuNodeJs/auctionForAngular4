import { Observable } from 'rxjs';
import { Http, URLSearchParams } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  // private products: Product[] = [
  //   new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，排列为第一个', ['电子产品', '硬件设备']),
  //   new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品，排列为第一个', ['食品', '硬件设备']),
  //   new Product(3, '第三个商品', 3.99, 1.5, '这是第三个商品，排列为第一个', [ '硬件设备']),
  //   new Product(4, '第四个商品', 4.99, 3.5, '这是第四个商品，排列为第一个', ['电子产品', '硬件设备']),
  //   new Product(5, '第五个商品', 5.99, 4.5, '这是第五个商品，排列为第一个', ['生活', '硬件设备']),
  //   new Product(6, '第六个商品', 6.99, 3.5, '这是第个商品，排列为第一个', [ '图书'])
  //   ];

  // private comments: Comment[] = [
  //   new Comment(1, 1, '2017-02-02 22:22:22', '张三', 3, '东西不错'),
  //   new Comment(2, 1, '2017-03-03 23:22:22', '李四', 4, '东西是不错'),
  //   new Comment(3, 1, '2017-04-04 21:22:22', '王五', 2, '东西挺不错'),
  //   new Comment(4, 2, '2017-05-05 20:22:22', '赵六', 4, '东西还不错')
  // ];

  constructor(private http: Http) { }

  searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter();

  // return all products
  getProducts(): Observable<Product[]>  {
    return this.http.get('http://localhost:8888/apa/products')
      .map((res) => res.json());
  }

  //  return produt according id
  getProduct(id: number): Observable<Product> {
    return this.http.get('http://localhost:8888/apa/product/'+id)
     .map((res) => res.json());
  }

  // return product comments array function
  getCommentsForProduct(id: number): Observable<Comment[]> {
    return this.http.get('http://localhost:8888/apa/product/'+id+'/comments')
     .map((res) => res.json());
  }

  // 返回分类信息
  getAllCategories(): string[] {
    return ['电子产品', '硬件设备', '图书']
  }

  // 实现查询的方法
  search(params: ProductSearchParams): Observable<Product[]> {
    return this.http.get('http://localhost:8888/apa/products', {search: this.encodeParams(params)})
      .map((res) => res.json());
  }

  private encodeParams(params: ProductSearchParams): URLSearchParams {
    // return result;
    return Object.keys(params)
       .filter(key => params[key])
       .reduce((sum: URLSearchParams, key: string) => {
          sum.append(key, params[key]);
          return sum;
       }, new URLSearchParams());
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}

export class ProductSearchParams {
    constructor(
      public title: string,
      public price: number,
      public category: string
    ) {

    }
}
