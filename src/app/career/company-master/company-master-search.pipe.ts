import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerMasterSearch'
})
export class CompanyMasterSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
