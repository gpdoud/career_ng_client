export class CompanyConnection {

    id: number = 0;
    connection: string = '';

    active: boolean = true;
    created: string = (new Date).toISOString().substring(0,10);
    updated: string | null = null;
}