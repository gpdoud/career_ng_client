export class ActivityType {
 
    id: number = 0;
    type: string = '';
    description: string = '';
    adminOnly: boolean = false;

    active: boolean = true;
    created: string = (new Date).toISOString().substring(0,10);
    updated: string | null = null;
    
}