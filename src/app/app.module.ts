import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import {HttpClientModule}  from '@angular/common/http'

import { SiteLayoutModule } from './site-layout/site-layout.module';
import{ReactiveFormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component'

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    SiteLayoutModule,
    ProductsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
