import { base_data } from './base_data.model';

export class i_t_contrat extends base_data {

    public date_debut_contrat : Date ;
    public date_fin_contrat : Date ;

    constructor(date_fin_contrat : Date,  date_debut_contrat : Date, create_uid : number, name : string, write_uid : number, id? : number){
        super(create_uid, name, write_uid, id);
        this.setDate_debut_contrat(date_debut_contrat) ;
        this.setDate_fin_contrat(date_fin_contrat) ;
    }

    public setDate_debut_contrat (date_debut_contrat : Date) {
        this.date_debut_contrat = date_debut_contrat ;
    }

    public setDate_fin_contrat (date_fin_contrat : Date) {
        this.date_fin_contrat = date_fin_contrat ;
    }

    public getDate_debut_contrat () : Date {
        return this.date_debut_contrat ;
    }

    public getDate_fin_contrat () : Date {
        return this.date_fin_contrat ;
    }

}