import { Injectable } from '@angular/core';
import jsonData from "../data/categories.json";


@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor() { }

  getCategories() {
    return jsonData;
  }

}
