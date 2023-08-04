export class User {
    id: number = 0;
    email: string = '';
    password: string = '';
    lastname: string = '';
    firstname: string = '';
    phone: string = '';
    admin: boolean = false;
    active: boolean = true;
    created: string = (new Date).toISOString().substring(0,10);
    updated: string | null = null;

    selected: boolean | null = null;
}