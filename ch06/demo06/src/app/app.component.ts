import { Component } from '@angular/core';
import {PriceQuote} from "./price-quote/price-quote.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private stock: string;
  private priceQuote: PriceQuote = new PriceQuote('', 0);
  priceQuoteHandle(event) {
    this.priceQuote = event;
  }
  buyQuoteHandle(event) {
    this.priceQuote = event;
  }
}
