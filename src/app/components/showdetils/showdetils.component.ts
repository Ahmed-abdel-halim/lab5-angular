import { Component, Input } from '@angular/core';
import { Product } from '../../data/product';
import { ProdectserviceService } from '../../services/prodectservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showdetils',
  imports: [CommonModule,],
  templateUrl: './showdetils.component.html',
  styleUrl: './showdetils.component.css',
})
export class ShowdetilsComponent {
  @Input() id?: string;
  selectedProduct?: Product;
  constructor(private servicefrmdetls:ProdectserviceService){}
  addToCartFromHome(item: Product |undefined) {
if (item) {
    this.servicefrmdetls.addToCart(item);
  } else {
    console.error("Product is undefined!");
  }  }
  ngOnInit() {
    this.servicefrmdetls.getProductById(parseInt(this.id!)).subscribe((data)=>{
      this.selectedProduct=data
    })
  }

  get stockStatus() {
    return (this.selectedProduct?.stock ?? 0) > 0 ? 'In Stock' : 'Out of Stock';
  }
  get stockClass() {
    return (this.selectedProduct?.stock ?? 0) > 0 ? 'bg-success' : 'bg-danger';
  }
}
