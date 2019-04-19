import { Component, OnInit } from '@angular/core';
import { ProductService } from "../services/product.service";
import { Cart } from '../../app/Models/cart';
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  constructor(private Lista: ProductService, private Cart: CartService) { }
  public Products: any;
  public CategoryName: String;
  public mayq;
  public menq;
  public name;
  public available;
  public quantity;

  ngOnInit() {
    this.obtenerProductos();
  }


  //funcion que se ejecuta al inicializar
  obtenerProductos() {
    this.Products = this.Lista.getProducts()['products'];
  }

  //funcion para buscar un producto por categoría
  obtenerProductosCat(cat, name) {
    this.CategoryName = name;

    //obtenemos todos los productos a filtrar
    this.obtenerProductos();
    //asignamos a una variable array los elementos que coinciden
    var keys = [];
    this.Products.forEach(function (element) {
      if (cat == element.sublevel_id) {
        keys.push(element);
      }
    });
    //regeneramos la lista de productos
    this.Products = keys;

  }

  //ordena por cantidad los productos de manera ascendiente
  ordenarCantidadAsc() {
    let aux = [];
    for (let i = 1; i < this.Products.length; i++) {
      for (let j = this.Products.length - 1; j >= i; j--) {
        if (this.Products[j - 1].quantity > this.Products[j].quantity) {
          aux = this.Products[j];
          this.Products[j] = this.Products[j - 1];
          this.Products[j - 1] = aux;
        }
      }

    }
  }

  //ordena por cantidad productos de manera descendiente
  ordenarCantidadDesc() {

    let aux = [];
    for (let i = 1; i < this.Products.length; i++) {
      for (let j = this.Products.length - 1; j >= i; j--) {
        if (this.Products[j - 1].quantity < this.Products[j].quantity) {
          aux = this.Products[j];
          this.Products[j] = this.Products[j - 1];
          this.Products[j - 1] = aux;
        }
      }

    }
  }

  //ordena por precio los productos de manera ascendente
  ordenarPrecioAsc() {

    let aux = [];
    for (let i = 1; i < this.Products.length; i++) {
      for (let j = this.Products.length - 1; j >= i; j--) {
        if (parseInt(this.Products[j - 1].price.replace('$', '').replace(',', '')) > parseInt(this.Products[j].price.replace('$', '').replace(',', ''))) {
          aux = this.Products[j];
          this.Products[j] = this.Products[j - 1];
          this.Products[j - 1] = aux;
        }
      }

    }
  }

  ordenarPrecioDesc() {

    let aux = [];
    for (let i = 1; i < this.Products.length; i++) {
      for (let j = this.Products.length - 1; j >= i; j--) {
        if (parseInt(this.Products[j - 1].price.replace('$', '').replace(',', '')) < parseInt(this.Products[j].price.replace('$', '').replace(',', ''))) {
          aux = this.Products[j];
          this.Products[j] = this.Products[j - 1];
          this.Products[j - 1] = aux;
        }
      }

    }
  }

  //ordena por disponibilidad los productos primero disponible
  ordenarDisponible() {
    let aux = [];
    for (let i = 1; i < this.Products.length; i++) {
      for (let j = this.Products.length - 1; j >= i; j--) {
        if (this.Products[j - 1].available < this.Products[j].available) {
          aux = this.Products[j];
          this.Products[j] = this.Products[j - 1];
          this.Products[j - 1] = aux;
        }
      }

    }
  }

  //ordena por disponibilidad los productos primero no disponible
  ordenarNoDisponible() {
    let aux = [];
    for (let i = 1; i < this.Products.length; i++) {
      for (let j = this.Products.length - 1; j >= i; j--) {
        if (this.Products[j - 1].available > this.Products[j].available) {
          aux = this.Products[j];
          this.Products[j] = this.Products[j - 1];
          this.Products[j - 1] = aux;
        }
      }

    }
  }

  //agrega productos al carrito
  agregarCarrito(item) {
    this.Cart.setCart(item);
  }
}
