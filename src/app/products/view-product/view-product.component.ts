import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productID = 0;
  @Input() productData : any;

  

  constructor(private activatedRoute : ActivatedRoute,
              private productService : ProductService,
              private cartService : CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productID = data.id
      console.log(this.productID)
    })
    this.productService.getProduct(this.productID).subscribe(viewData => {
      this.productData = viewData;
      console.log(this.productData);

    })
  }

  onAddtoCart(item : any) {
    this.cartService.addToCart(item);
    console.log("hsdjbfskdbv", this.productData) 

  }

}
