import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  @Input() product: any;
  @Input() grandTotal: any;
  subTotal : any = 0;
  tax : any = 22;
  finalTotal : any =0;
 
  
  // subTotal: any = 0;
  // @Input() finalTotalWithTax : any;
  // @Input() tax : any;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.product, 'product from dfetialta ');
    this.cartService.cartItemList.forEach((res: any) => {
      this.subTotal += res.price * res.quantity;
      this.finalTotal = this.subTotal + this.tax;
      
    });
  }
  
  onIncrease(p: any) {
    // console.log(p , "on INcresse");
    if (p.quantity != 5) {
      p.quantity = p.quantity + 1;

      console.log(p, 'on INc');

      // let a = p.price * p.quantity;
      let a = p.price;
      this.subTotal = Math.round(this.subTotal + a);
      // this.subTotal = this.cartService.total;
      // this.cartService.total = p.price * p.quantity;
      console.log(this.cartService.total);
      this.finalTotal = this.subTotal + this.tax;

    }

    // this.reduceTotal();
  }

  // reduceTotal(){
  //   this.cartService.total.forEach((res : any) => {
  //       this.cartService.total += res
  //   })
  // }

  onDecrease(p: any) {
    // console.log(p, "on Decrease");
    if (p.quantity != 1) {
      p.quantity = p.quantity - 1;

      console.log(p, 'on Dec');
      let a = p.price;
      this.subTotal = Math.round(this.subTotal - a);
      // this.subTotal = this.cartService.total;
      // this.cartService.total = p.price * p.quantity;
      console.log(this.cartService.total);
      this.finalTotal = this.subTotal + this.tax;

    }
  }

  onApplyCoupon(coupon : any) {
     const value = coupon.toUpperCase();
     
     console.log(value);
     if(value.toString() == 'BOOTCAMP2021'){
        this.finalTotal = (this.subTotal + this.tax) - (1/10*this.subTotal);
     }
     else{
       this.finalTotal = this.subTotal + this.tax;
     }
  }
}
