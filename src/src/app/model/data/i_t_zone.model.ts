import { base_data } from './base_data.model';

export class i_t_zone extends base_data {

    agence_id : number ;

    constructor(create_uid : number, name : string, write_uid : number, agence_id : number, id? : number){
        if(id){
            super(create_uid, name, write_uid, id);
        }
        else {
            super(create_uid, name, write_uid);
        }
        this.set_agence_id(agence_id) ;
    }

    public set_agence_id (agence_id : number) {
        this.agence_id = agence_id;
    }

    public get_agence_id() : number {
        return this.agence_id ;
    }

}