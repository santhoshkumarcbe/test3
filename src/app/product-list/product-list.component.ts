import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // name = 'SanthoshKumar K'
  addToCart:number = 0;
 product = {
  name: "iPhone X",
  price: 899,
  color: "Meta blue",
  discount: 8.5,
  inStock: 5,
  pImage: "https://cdn1.smartprix.com/rx-iD8y25iVP-w420-h420/apple-iphone-12.webp"
 }

 getDiscountedPrice(){
  return this.product.price - (this.product.price * this.product.discount / 100)
 }

 decrementCartValue(){
    this.addToCart--;
 }

 incrementCartValue(){
    this.addToCart++;
 }

 onNameChange(event: any) {
  console.log(event.target.value);
  // this.name = event.target.value
 }
}
