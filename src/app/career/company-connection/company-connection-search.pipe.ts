import { Pipe, PipeTransform } from '@angular/core';
import { CompanyConnection } from './company-connection.class';

@Pipe({
  name: 'companyConnectionSearch'
})
export class CompanyConnectionSearchPipe implements PipeTransform {

  transform(companyMasters: CompanyConnection[], search: string):  CompanyConnection[] {
    if(typeof companyMasters === "undefined" || companyMasters === null) {
      return companyMasters;
    }
    search = search.toLowerCase();
    let selected: CompanyConnection[] = []
    for(let cc of companyMasters) {
      if(
        cc.id.toString().toLowerCase().includes(search) ||
        cc.connection.toString().toLowerCase().includes(search) ||
        cc.active.toString().toLowerCase().includes(search)
      ) {
        selected.push(cc);
      }
    }
    return selected;
  }

}
