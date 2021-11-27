import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProductData: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getAllProduct().subscribe((data) => {
      this.allProductData = data;
      console.log(this.allProductData, "datata");
      
  })
 
}
  

}
