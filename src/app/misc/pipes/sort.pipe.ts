import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], col: string = 'id', asc: boolean = true): any[] {
    if(typeof arr === "undefined") {
      return arr;
    }
    return arr.sort(sortFn);

    function sortFn(a: any, b: any): number {
      if(typeof a[col] === "undefined" || a[col] === null)
        a[col] = "";
      if(typeof b[col] === "undefined" || b[col] === null)
        b[col] = "";
      let aa = typeof a[col] === "number" 
              ? a[col] 
              : a[col].toString().toLowerCase(); 
      let bb = typeof b[col] === "number" 
              ? b[col] 
              : b[col].toString().toLowerCase(); 
      if(aa === bb)
        return 0;
      if(asc)
        return aa > bb ? 1 : -1;
      else
        return aa > bb ? -1 : 1;
    }
  }

}
