import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CartComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
