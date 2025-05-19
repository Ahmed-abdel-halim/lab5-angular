import { Component } from '@angular/core';
import { Product } from '../../data/product';
import { ProdectserviceService } from '../../services/prodectservice.service';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-cart',
  imports: [ProductCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'

})
export class CartComponent {
 cartList:Product[]=[];
 totalAmount: number = 0;


  constructor(private productService: ProdectserviceService) { }


  ngOnInit() {
    this.productService.cartItems.subscribe((data) => {
      this.cartList = data
        this.calculateTotalAmount();
    })
  }

  removeItem(item:Product){
    this.productService.removeFromCart(item)
     this.calculateTotalAmount();
  }
    increaseQuantity(product: Product) {
    product.quantity = (product.quantity || 1) + 1;
      this.calculateTotalAmount();
  }

  decreaseQuantity(product: Product) {
    if (product.quantity && product.quantity > 1) {
      product.quantity -= 1;
    }
      this.calculateTotalAmount();
  }
    calculateTotalAmount() {
    this.totalAmount = this.cartList.reduce(
      (acc, item) => acc + (item.price * (item.quantity || 1)),
      0
    );
  }
}
