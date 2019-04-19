import { Injectable } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public carrito: any;

  constructor() { }

  public setCart(cart) {
    //para cuando no hay elemntos en el carrito aún
    if (this.carrito == null) {
      this.carrito = [];
    }

    //agregamos al elemento la cantidad
    cart.cantidad = 1;
    //agregamos al elemento precio, (util cuando seleccionamos mas de una vez el prod)
    cart.precio = cart.price.replace('$', '').replace(',', '');

    var flag = 0;
    if (this.carrito) {
      this.carrito.forEach(function (element, i) {
        if (cart.id == element.id) {
          flag = 1;
          element.cantidad++;
          element.precio = element.cantidad * parseInt(element.price.replace('$', '').replace(',', ''));
        }
      });
    }

    if (flag == 1) {
      //agregamos al carrito el elemento editado
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    } else {
      this.carrito.push(cart);
      //agregamos el item al final del carrito
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }
  }

  //para obtener los elementos del carrito
  public getCart() {
    return JSON.parse(localStorage.getItem('carrito'));
  }



}
