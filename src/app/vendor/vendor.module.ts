import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { ProductsListComponent } from './components/products-list/products-list.component';



@NgModule({
  declarations: [
    AddProductComponent,
    EditProductComponent,
    OrdersTableComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VendorModule { }
