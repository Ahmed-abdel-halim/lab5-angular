import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../data/product';
import { ProdectserviceService } from '../../services/prodectservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',

  imports: [RouterLink, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // router:Router;
  Math = Math;


  @Input() product!: any;
  get stockStatus() {
    return this.product.stock > 0 ? 'In Stock' : 'Out of Stock';
  }
  constructor(
    private router: Router,
    private productt: ProdectserviceService
  ) {}
  addToCartFromHome(item: Product) {
    this.productt.addToCart(item);
  }
  // this.router=new Router();

  get stockClass() {
    return this.product.stock > 0 ? 'bg-success' : 'bg-danger';
  }
  showDetails(id: number) {

  this.router.navigate(['/showdetails', id]);
}

}
