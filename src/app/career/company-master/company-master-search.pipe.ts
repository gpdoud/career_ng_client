import { Pipe, PipeTransform } from '@angular/core';
import { CompanyMaster } from './company-master.class';

@Pipe({
  name: 'companyMasterSearch'
})
export class CompanyMasterSearchPipe implements PipeTransform {

  transform(companyMasters: CompanyMaster[], search: string):  CompanyMaster[] {
    if(typeof companyMasters === "undefined" || companyMasters === null) {
      return companyMasters;
    }
    search = search.toLowerCase();
    let selected: CompanyMaster[] = []
    for(let cm of companyMasters) {
      if(
        cm.id.toString().toLowerCase().includes(search) ||
        cm.code.toString().toLowerCase().includes(search) ||
        cm.name.toString().toLowerCase().includes(search) ||
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
        (cm.itbaRoles !== null && cm.itbaRoles.toString().toLowerCase().includes(search)) ||
        (cm.securityRoles !== null && cm.securityRoles.toString().toLowerCase().includes(search)) ||
        (cm.blendedRoles !== null && cm.blendedRoles.toString().toLowerCase().includes(search)) ||
        (cm.virtualRoles !== null && cm.virtualRoles.toString().toLowerCase().includes(search)) ||
        cm.active.toString().toLowerCase().includes(search)
      ) {
        selected.push(cm);
      }
    }
    return selected;
  }


}
