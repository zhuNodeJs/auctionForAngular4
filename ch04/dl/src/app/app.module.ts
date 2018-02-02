import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import {ProductService} from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import {LoggerService} from './shared/logger.service';
import {AnotherProductService} from './share/another-product.service';


@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule
  ],
  // providers: [ProductService, LoggerService],
  /**
   *  第一版
   *  providers: [{
    provide: ProductService,
    useFactory: () => {
      const logger = new LoggerService();
      const dev = Math.random() > 0.5;
      console.log(dev);
      if (dev) {
         return new ProductService(logger);
      } else {
        return new AnotherProductService(logger);
      }
    }
  }, LoggerService],
   */
  /**
   *  第二版 token是一个变量
   *  providers: [{
    provide: ProductService,
    useFactory: (logger: LoggerService, isDev) => {
      if (isDev) {
         return new ProductService(logger);
      } else {
        return new AnotherProductService(logger);
      }
    },
    deps: [LoggerService, 'IS_DEV_ENV']
  }, LoggerService, {
    provide: 'IS_DEV_ENV',
    useValue: false
  }],
   */
  // 变量代表的值是一个对象
  providers: [{
    provide: ProductService,
    useFactory: (logger: LoggerService, appConfig) => {
      if (appConfig.isDev) {
         return new ProductService(logger);
      } else {
        return new AnotherProductService(logger);
      }
    },
    deps: [LoggerService, 'APP_CONFIG']
  }, LoggerService, {
    provide: 'APP_CONFIG',
    useValue: {isDev: true}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
