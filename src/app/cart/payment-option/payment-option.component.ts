import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-option',
  templateUrl: './payment-option.component.html',
  styleUrls: ['./payment-option.component.css'],
})
export class PaymentOptionComponent implements OnInit {
  @Input() product : any;
  @Input() grandTotal : any;
  paymentDetails: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.paymentDetails = new FormGroup({
      pay: new FormControl('', Validators.required),
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11})$'
        ),
      ]),
      expMonth: new FormControl('', Validators.required),
      cvv: new FormControl('', Validators.required),
      cardHolderName: new FormControl('', Validators.required),
    });
  }

  onSubmit() {}
}
