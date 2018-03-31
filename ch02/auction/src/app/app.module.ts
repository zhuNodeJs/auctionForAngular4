import { WebsocketService } from './shared/websocket.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductService} from './shared/product.service';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { FilterPipe } from './pipe/filter.pipe';


const routeConfig: Routes = [
  {path: '', component: <any>HomeComponent},
  {path: 'productDetail/:productId', component: <any>ProductDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    ProductComponent,
    SearchComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ProductService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
