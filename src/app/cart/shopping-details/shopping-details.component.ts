import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-details',
  templateUrl: './shopping-details.component.html',
  styleUrls: ['./shopping-details.component.css']
})
export class ShoppingDetailsComponent implements OnInit {

  myData: any;
  @Input() product : any;
  @Input() grandTotal : any;
  shoppingDetails: FormGroup = new FormGroup({});
  constructor(private http : HttpClient, private form : FormBuilder, 
             private cartService : CartService) { 
    this.shoppingDetails = form.group({
    'firstName' : new FormControl(null, Validators.required),
    'lastName'  : new FormControl(null, Validators.required),
    'address' : new FormControl(null, Validators.required),
    'country' : new FormControl(null, Validators.required),
    'city'    : new FormControl(null, Validators.required),
    'zip'     : new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(6)]),
    'phone'   : new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
     })
  }

  ngOnInit(): void {
    // this.http.get('https://trial.mobiscroll.com/content/countries.json').subscribe((resp: any) => {
    //         const countries = [];
    //         for (let i = 0; i < resp.length; ++i) {
    //             const country = resp[i];
    //             countries.push({ text: country.text, value: country.value });
    //         }
    //         this.myData = countries;
    //         console.log(this.myData)
    //     });
    // console.log("form", this.shoppingDetails);
    
  }

  onSubmit(){
    console.log(this.shoppingDetails);
  }

  

}
