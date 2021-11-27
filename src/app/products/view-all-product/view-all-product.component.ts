import { Component, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css'],
})
export class ViewAllProductComponent implements OnInit {
  @Input() allProductData: any;
  private subjectKeyUp = new Subject<any>();
  @Output() cartProduct: any;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.subjectKeyUp.pipe(debounceTime(300)).subscribe((data) => {
      this.getProducts(data);
    });
  }

  onSearch($event: any) {
    const value = $event.target.value;
    console.log(value);
    this.subjectKeyUp.next(value);
    this.getProducts(value);
  }

  onAddtoCart(item: any) {
    this.cartService.addToCart(item);
  }

  getProducts(value: any) {
   
    this.productService.getAllProduct().subscribe((res) => {
      console.log('ressssssssssssss', res);
      let arrOfSearchProduct: any = [];
      res.forEach((item: any) => {
        if (item.title.includes(value)) {
          arrOfSearchProduct.push(item);
          console.log(arrOfSearchProduct, 'snvsndksbv');
        }
      });
      this.allProductData = arrOfSearchProduct;
    });
  }
}
