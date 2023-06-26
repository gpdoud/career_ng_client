import { User } from "../user/user.class";

export class Company {

    id: number = 0;
    name: string = '';
    address: string = '';
    city: string = '';
    stateCode: string = '';
    zip: string = '';
    phone: string = '';
    email: string = '';
    contactName: string = '';
    contactPhone: string = '';
    contactRole: string = '';

    userId: number = 0;
    user: User | null = null;
    userLastname: string | null = null

    active: boolean = true;
    created: string = (new Date).toISOString().substring(0,10);
    updated: string | null = null

}