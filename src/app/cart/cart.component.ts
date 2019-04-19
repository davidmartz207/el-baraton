import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public productos: any;
  constructor(private Cart: CartService) { }

  ngOnInit() {
    this.Iniciar();
  }

  //inicializa el carrito en caso de que se cierre el navegador
  Iniciar() {
    this.Cart.carrito = this.Cart.getCart();
    if (this.Cart.carrito == null) {
      this.Cart.carrito = [];
    }

    this.productos = this.Cart.carrito;
  }


  //suma la cantidad total de elementos del carrito
  getTotal() {
    var suma = 0;
    if (this.productos) {
      this.productos.forEach(element => {
        suma = suma + parseInt(element.precio);
      });
    }

    return suma;
  }

  //permite abrir el carrito al hacer click sobre el ícono
  abrirCarrito() {
    var x = document.getElementsByClassName('carrito-desplegado') as HTMLCollectionOf<HTMLElement>;;
    x[0].style.display = "block";
  }

  //permite cerrar el carrito al hacer click sobre el ícono
  cerrarCarrito() {
    var x = document.getElementsByClassName('carrito-desplegado') as HTMLCollectionOf<HTMLElement>;;
    x[0].style.display = "none";
  }

  //añade o elimina elementos de la variable
  cambiarCantidad(id, tipo) {
    this.productos.forEach(element => {
      if (element.id == id) {
        if (tipo == 1) {
          element.cantidad = element.cantidad + 1;
        } else {
          element.cantidad = element.cantidad - 1;
          //para que el filtro no de numeros negativos
          if (element.cantidad <= 0) { element.cantidad = 1 }
        }

        element.precio = element.cantidad * parseInt(element.price.replace('$', '').replace(',', ''))
      }
    });
    //actualizamos la base
    localStorage.setItem('carrito', JSON.stringify(this.productos));

  }
  //elimina por completo un item del carrito
  eliminarItem(id) {
    var prods = this.productos;
    this.productos.forEach(function (element, i) {
      if (id == element.id) {
        prods.splice(i, 1);
      }
    });
    //actualizamos la base
    localStorage.setItem('carrito', JSON.stringify(this.productos));
  }

  //paga y elimina la información persistida
  Pagar() {
    localStorage.clear();
    alert('!Gracias por comprar en nuestra tienda!!');
    this.cerrarCarrito();
    this.Iniciar();
  }
}
