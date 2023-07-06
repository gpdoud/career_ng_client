import { Pipe, PipeTransform } from '@angular/core';
import { Help } from './help.class';

@Pipe({
  name: 'helpSearch'
})
export class HelpSearchPipe implements PipeTransform {

  transform(helps: Help[], search: string):  Help[] {
    if(typeof helps === "undefined" || helps === null) {
      return helps;
    }
    search = search.toLowerCase();
    let selected: Help[] = []
    for(let h of helps) {
      if(
        h.id.toString().toLowerCase().includes(search) ||
        h.topic.toString().toLowerCase().includes(search) ||
        h.response.toString().toLowerCase().includes(search) ||
        h.active.toString().toLowerCase().includes(search)
      ) {
        selected.push(h);
      }
    }
    return selected;
  }

}
