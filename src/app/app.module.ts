import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { CategoriesComponent } from './categories/categories.component';
import { KeysPipe } from '../app/pipes/formatea.pipe';
import { ProductosComponent } from './productos/productos.component';
import { QuantityFilterPipe } from './pipes/quantity-filter.pipe'
import { FormsModule } from '@angular/forms';
import { AvailableFilterPipe } from './pipes/available-filter.pipe';
import { PreciomayorFilterPipe } from './pipes/preciomayor-filter.pipe';
import { PreciomenorFilterPipe } from './pipes/preciomenor-filter.pipe';
import { CartComponent } from './cart/cart.component';
import { NombreFilterPipe } from './pipes/nombre-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    KeysPipe,
    CategoriesComponent,
    ProductosComponent,
    QuantityFilterPipe,
    AvailableFilterPipe,
    PreciomayorFilterPipe,
    PreciomenorFilterPipe,
    CartComponent,
    NombreFilterPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
