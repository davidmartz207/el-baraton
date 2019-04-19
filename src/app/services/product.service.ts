import { Injectable } from '@angular/core';
import jsonData from "../data/products.json";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return jsonData;
  }
}
