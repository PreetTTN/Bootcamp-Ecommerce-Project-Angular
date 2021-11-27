import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { TruncateDescriptionPipe } from './truncate-description.pipe';
import { TruncateTitlePipe } from './truncate-title.pipe';



@NgModule({
  declarations: [
    ProductsComponent,
    ViewProductComponent,
    ViewAllProductComponent,
    TruncateDescriptionPipe,
    TruncateTitlePipe,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    
  ]
})
export class ProductsModule { }
