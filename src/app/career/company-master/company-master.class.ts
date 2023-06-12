export class CompanyMaster {
    id: number = 0;
    code: string = '';
    name: string = '';
    address: string | null = null;
    city: string | null = null;
    stateCode: string | null = null;
    zip: string | null = null;
    phone: string | null = null;
    email: string | null = null;
    contactName: string | null = null;
    contactPhone: string | null = null;
    contactRole: string | null = null;
    codingRoles: boolean | null = null;
    itbaRoles: boolean | null = null;
    securityRoles: boolean | null = null;
    blendedRoles: boolean | null = null;
    virtualRoles: boolean | null = null;
    active: boolean = true;
    created: string = (new Date()).toISOString().substring(0, 10)
    updated: string | null = null;
}