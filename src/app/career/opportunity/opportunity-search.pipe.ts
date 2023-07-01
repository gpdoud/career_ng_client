import { Pipe, PipeTransform } from '@angular/core';
import { Opportunity } from './opportunity.class';

@Pipe({
  name: 'opportunitySearch'
})
export class OpportunitySearchPipe implements PipeTransform {

  transform(opportunities: Opportunity[], search: string):  Opportunity[] {
    if(typeof opportunities === "undefined" || opportunities === null) {
      return opportunities;
    }
    search = search.toLowerCase();
    let selected: Opportunity[] = []
    for(let o of opportunities) {
      if(
        o.id.toString().toLowerCase().includes(search) ||
        o.companyName.toString().toLowerCase().includes(search) ||
        o.rank.toString().toLowerCase().includes(search) ||
        o.companyConnectionName.toString().toLowerCase().includes(search) ||
        o.notes.toString().toLowerCase().includes(search) ||
        o.active.toString().toLowerCase().includes(search)
      ) {
        selected.push(o);
      }
    }
    return selected;
  }


}
