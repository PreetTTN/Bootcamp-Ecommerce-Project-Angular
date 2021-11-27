import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './cart/shopping-cart/shopping-cart.component';
import { CartComponent } from './cart/cart.component';
import { ShoppingDetailsComponent } from './cart/shopping-details/shopping-details.component';
import { PaymentOptionComponent } from './cart/payment-option/payment-option.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { SucessComponent } from './sucess/sucess.component';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    CartComponent,
    ShoppingDetailsComponent,
    PaymentOptionComponent,
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    HelpComponent,
    SucessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
