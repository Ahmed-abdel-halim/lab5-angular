import { Routes } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowdetilsComponent } from './components/showdetils/showdetils.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  { path: 'home', component: ProductCardComponent, title: 'Home Page' },
  { path: 'login', component: LoginComponent, title: 'login Page' },
  { path: 'showdetails/:id', component: ShowdetilsComponent },
  { path: 'cart', component: CartComponent, title: 'cart Page' },

  { path: 'register', component: RegisterComponent, title: 'register Page' },
  { path: 'about', component: AboutComponent, title: 'About Page' },
  { path: 'contact', component: ContactComponent, title: 'Contact Page' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '**', component: NotfoundComponent },
];
