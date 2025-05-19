import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product  } from '../../data/product';
import { ProdectserviceService } from '../../services/prodectservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [ProductComponent,CommonModule  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  products?:Product[]
    constructor(private productService: ProdectserviceService) { }

 ngOnInit(){
 this.productService.getAllItems().subscribe((data)=>{
  this.products=data.products;
 })
 }
}
