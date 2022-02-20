import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(items: any, field?: any, type?: string): any {
    return items.sort((a, b) => {
      if (type === 'desc') {
        return this.sortData(b, a, field);
      }
      return this.sortData(a, b, field);
    });
  }

  sortData(a, b, field): any {
    if (a[field] > b[field]) {
      return 1;
    } else if (a[field] < b[field]) {
      return -1;
    }
    return 0;
  }
}
