import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolDisplay'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? "Yes" : "No";
  }

}
