import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../data/product';
import { HttpClient } from '@angular/common/http';
import { Prod } from '../data/Prod';
@Injectable({
  providedIn: 'root',
})
export class ProdectserviceService {
  constructor(private http: HttpClient) {}
  private cart = new BehaviorSubject<Product[]>([]);
  public cartItems = this.cart.asObservable();

  addToCart(product: Product) {
    const currentItem = this.cart.getValue();
    if (!currentItem.includes(product)) {
      this.cart.next([...currentItem, product]);
      alert(' item is added');
    } else {
      alert('this item is already added');
    }
  }

  getAllItems(): Observable<Prod> {
    return this.http.get<Prod>('https://dummyjson.com/products');
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`https://dummyjson.com/products/${id}`);
  }

  removeFromCart(item: Product) {
    const updatedCart = this.cart.getValue().filter((produ) => {
      produ.id != item.id;
    });

    this.cart.next(updatedCart);
  }
}
