import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CategoryService } from "../services/category.service";
import { ProductosComponent } from '../productos/productos.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  @ViewChild(ProductosComponent) public tabs: ProductosComponent;

  public Categories: any;

  private url: String = "Enlace AL Componente"

  constructor(private Lista: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  //funcion que se ejecuta al inicializar
  public getCategories() {
    this.Categories = this.Lista.getCategories()['categories'];
  }

  //Para mostrar los hijos de un elemento
  mostrarHijos(padre) {
    //mostramos todo lo que sea hijo de padre
    var y = document.getElementsByClassName('hijode' + padre) as HTMLCollectionOf<HTMLElement>;;
    var j;
    for (j = 0; j < y.length; j++) {
      y[j].style.display = "block";
    }

    //mostramos el ícono de regresar
    var r = document.getElementsByClassName('regresar') as HTMLCollectionOf<HTMLElement>;;
    r[0].style.display = "flex";

  }

  regresar() {
    //ocultamos el ícono de regresar
    var r = document.getElementsByClassName('regresar') as HTMLCollectionOf<HTMLElement>;;
    r[0].style.display = "none";

    //mostramos todos los items
    var x = document.getElementsByClassName('item') as HTMLCollectionOf<HTMLElement>;;
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }

    //ocultamos los items hijo
    var y = document.getElementsByClassName('hijo') as HTMLCollectionOf<HTMLElement>;;
    var j;
    for (j = 0; j < y.length; j++) {
      y[j].style.display = "none";
    }

    //reseteamos la lista de productos
    this.resetearProductos();
  }

  resetearProductos() {
    this.tabs.obtenerProductos();
    this.tabs.CategoryName = "";
  }

  mostrarProductos(cat, name) {
    this.tabs.obtenerProductosCat(cat, name);
  }
}
