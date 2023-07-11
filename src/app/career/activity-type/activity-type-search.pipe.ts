import { Pipe, PipeTransform } from '@angular/core';
import { ActivityType } from './activity-type.class';

@Pipe({
  name: 'activityTypeSearch'
})
export class ActivityTypeSearchPipe implements PipeTransform {

  transform(activityTypes: ActivityType[], search: string):  ActivityType[] {
    if(typeof activityTypes === "undefined" || activityTypes === null) {
      return activityTypes;
    }
    search = search.toLowerCase();
    let selected: ActivityType[] = []
    for(let at of activityTypes) {
      if(
        at.id.toString().toLowerCase().includes(search) ||
        at.type.toString().toLowerCase().includes(search) ||
        at.description.toString().toLowerCase().includes(search) ||
        at.adminOnly.toString().toLowerCase().includes(search) ||
        at.active.toString().toLowerCase().includes(search)
      ) {
        selected.push(at);
      }
    }
    return selected;
  }


}
