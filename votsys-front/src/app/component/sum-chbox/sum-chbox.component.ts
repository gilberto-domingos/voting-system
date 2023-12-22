import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
}

@Component({
  selector: 'app-sum-chbox',
  templateUrl: './sum-chbox.component.html',
  styleUrls: ['./sum-chbox.component.scss']
})
export class SumChboxComponent {

  products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 15 },
    { name: 'Product 4', price: 25 },
    { name: 'Product 5', price: 30 },
    { name: 'Product 6', price: 12 }
  ];

  total = 0;

  updateTotal(event: Event, price: number) {
    const target = event.target as HTMLInputElement;
    if (target && target.checked !== undefined) {
      if (target.checked) {
        this.total += price;
      } else {
        this.total -= price;
      }
    }
  }
}
