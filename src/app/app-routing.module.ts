import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './cart/shopping-cart/shopping-cart.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { ShoppingDetailsComponent } from './cart/shopping-details/shopping-details.component';
import { PaymentOptionComponent } from './cart/payment-option/payment-option.component';
import { SucessComponent } from './sucess/sucess.component';

const routes: Routes = [
  
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  // {path : 'products', component : ProductsComponent},
  {path : 'cart' , component : CartComponent},
  {path : 'about', component : AboutComponent},
  {path : 'help', component : HelpComponent},
  {path : 'shopping-cart', component : CartComponent},
  {path : 'shopping-details', component : ShoppingDetailsComponent},
  {path : 'payment-options', component : PaymentOptionComponent},
  {path : 'sucess', component : SucessComponent},
  {path : '' , redirectTo : 'products', pathMatch : 'full' },
  
  {path : '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
