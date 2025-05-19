import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Product } from '../../data/product';
import { ProdectserviceService } from '../../services/prodectservice.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartItemList:Product[]=[];

  counter=this.cartItemList?.length;
  constructor(private productService:ProdectserviceService){}
ngOnInit(){
  this.productService.cartItems.subscribe((data)=>{
    this.cartItemList=data
  })
}
}
