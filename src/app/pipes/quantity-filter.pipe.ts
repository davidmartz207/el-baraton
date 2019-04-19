import { Pipe, PipeTransform } from '@angular/core';

//para el filtro de cantidades
@Pipe({
  name: 'quantityFilter',
  pure: false

})
export class QuantityFilterPipe implements PipeTransform {

  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
      return items;
    }
    //filter items array, items which match and return true will be
    //kept, false will be filtered out
    return items.filter(item => item.quantity >= filter);
  }
}
