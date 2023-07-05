import { Pipe, PipeTransform } from '@angular/core';
import { Activity } from './activity.class';

@Pipe({
  name: 'activitySearch'
})
export class ActivitySearchPipe implements PipeTransform {

  transform(activity: Activity[], search: string):  Activity[] {
    if(typeof activity === "undefined" || activity === null) {
      return activity;
    }
    search = search.toLowerCase();
    let selected: Activity[] = []
    for(let at of activity) {
      if(
        at.id.toString().toLowerCase().includes(search) ||
        at.opportunityId.toString().toLowerCase().includes(search) ||
        (at.opportunity !== null && at.opportunity.toString().toLowerCase().includes(search)) ||
        at.activityTypeId.toString().toLowerCase().includes(search) ||
        (at.activityType !== null && at.activityType.toString().toLowerCase().includes(search)) ||
        at.date.toString().toLowerCase().includes(search) ||
        at.notes.toString().toLowerCase().includes(search) ||
        at.active.toString().toLowerCase().includes(search)
      ) {
        selected.push(at);
      }
    }
    return selected;
  }

}
