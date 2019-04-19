import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preciomayorFilter',
  pure: false
})
export class PreciomayorFilterPipe implements PipeTransform {


  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
      return items;
    }

    var re = /abc/g;

    //filter items array, items which match and return true will be
    //kept, false will be filtered out
    return items.filter(item => item.price.replace(/\$/g, '').replace(',', '') >= filter);
  }

}
