import {Component, Input, OnInit} from '@angular/core';
import {PriceQuote} from "../price-quote/price-quote.component";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // @Input()
  // private amount: number;
  // @Input()
  // private stockCode: string;
     @Input()
     private priceQuote: PriceQuote;
  constructor() {
    /**
     * const that = this;
     setInterval(function () {
      that.stockCode = 'Apple';
    }, 3000);
     */
    // setInterval(() => {
    //   this.stockCode = 'Apple';
    // }, 3000);

  }

  ngOnInit() {
  }

}
