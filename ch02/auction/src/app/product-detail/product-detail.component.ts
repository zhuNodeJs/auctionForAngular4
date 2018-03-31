import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService, Comment} from '../shared/product.service';
import { WebsocketService } from '../shared/websocket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private product: Product;
  private comments: Comment[];

  private newRating: number = 5;
  private newComment: string = '';

  private isCommentHidden: boolean = true;

  // 关注商品控制
  isWatched: boolean = false;
  currentBid: number;

  subscription: Subscription;

  constructor(private routeInfo: ActivatedRoute, private productService: ProductService, private wsService: WebsocketService) { }

  ngOnInit() {
    const productId: number = this.routeInfo.snapshot.params['productId'];
    this.productService.getProduct(productId).subscribe(
      product => {
        this.product = product[0];
        this.currentBid = this.product.price;
      }
    );
    this.productService.getCommentsForProduct(productId).subscribe(
      comments => {
         this.comments = comments;
      }
    );
  }

  addComment() {
    let comment = new Comment(0, this.product.id, new Date().toISOString(), 'someone', this.newRating , this.newComment);
    this.comments.unshift(comment);
    let sum = this.comments.reduce((sum, comment) =>
      sum + comment.rating, 0
    );
    this.product.rating = sum / this.comments.length;
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }


  // 关注的按钮的实现
  watchPrice() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.isWatched = false;
      this.subscription = null;
    } else {
      this.isWatched = true;
      this.subscription = this.wsService.createObservableSocket('ws://localhost:8085', this.product.id)
      .subscribe(
        products => {
          let product = products.find(p => p.productId === this.product.id);
          this.currentBid = product.bid;
        }
      );
    }
  }
}
