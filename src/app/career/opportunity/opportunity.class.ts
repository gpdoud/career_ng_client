import { Activity } from "../activity/activity.class";
import { CompanyConnection } from "../company-connection/company-connection.class";
import { Company } from "../company/company.class";
import { User } from "../user/user.class";

export class Opportunity {

    id: number = 0;
    description: string = '';
    userId: number = 0
    user: User | null = null;
    username: string = '';
    companyId: number = 0;
    company: Company | null = null;
    companyName: string = '';
    rank: string = 'C'; // A, B, C
    companyConnectionId: number = 0;
    companyConnection: CompanyConnection | null = null;
    companyConnectionName: string = '';
    notes: string = '';
    activities: Activity[] = [];

    active: boolean = true;
    created: string = (new Date).toISOString().substring(0,10);
    updated: string | null = null;
}