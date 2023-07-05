import { ActivityType } from "../activity-type/activity-type.class";
import { Opportunity } from "../opportunity/opportunity.class";

export class Activity {

    id: number = 0;
    opportunityId: number = 0;
    opportunity: Opportunity | null = null;
    activityTypeId: number = 0;
    activtyType: ActivityType | null = null;
    date: string = '';
    notes: string = '';

    active: boolean = true;
    created: string = (new Date).toISOString().substring(0,10);
    updated: string | null = null;
}