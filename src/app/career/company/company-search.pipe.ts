import { Pipe, PipeTransform } from '@angular/core';
import { Company } from './company.class';

@Pipe({
  name: 'companySearch'
})
export class CompanySearchPipe implements PipeTransform {

  transform(companies: Company[], search: string):  Company[] {
    if(typeof companies === "undefined" || companies === null) {
      return companies;
    }
    search = search.toLowerCase();
    let selected: Company[] = []
    for(let cm of companies) {
      if(
        cm.id.toString().toLowerCase().includes(search) ||
        cm.name.toString().toLowerCase().includes(search) ||
        (cm.userLastname !== null && cm.userLastname.toString().toLowerCase().includes(search)) ||
        (cm.address !== null && cm.address.toString().toLowerCase().includes(search)) ||
        (cm.city !== null && cm.city.toString().toLowerCase().includes(search)) ||
        (cm.stateCode !== null && cm.stateCode.toString().toLowerCase().includes(search)) ||
        (cm.zip !== null && cm.zip.toString().toLowerCase().includes(search)) ||
        (cm.phone !== null && cm.phone.toString().toLowerCase().includes(search)) ||
        (cm.email !== null && cm.email.toString().toLowerCase().includes(search)) ||
        (cm.website !== null && cm.website.toString().toLowerCase().includes(search)) ||
        (cm.contactName !== null && cm.contactName.toString().toLowerCase().includes(search)) ||
        (cm.contactPhone !== null && cm.contactPhone.toString().toLowerCase().includes(search)) ||
        (cm.contactRole !== null && cm.contactRole.toString().toLowerCase().includes(search)) ||
        cm.active.toString().toLowerCase().includes(search)
      ) {
        selected.push(cm);
      }
    }
    return selected;
  }

}
