export class tournees_sc1 {
    res_partner_name : string;
    visite : string;
    name : string ;
    start_date : Date ;
    end_date : Date ;
    
    constructor(res_partner_name : string, visite : string, name : string, start_date : Date, end_date : Date) {
        this.name = name ;
        this.res_partner_name = res_partner_name ;
        this.visite = visite ;
        this.start_date = start_date ;
        this.end_date = end_date ;
    }
}