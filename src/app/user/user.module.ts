import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';



@NgModule({
  declarations: [
    CartComponent,
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
