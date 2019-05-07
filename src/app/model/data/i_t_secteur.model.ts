import { base_data } from './base_data.model';

export class i_t_secteur extends base_data {

    zone_id : number ;
    code : string ;

    constructor(zone_id : number , create_uid : number, name : string, write_uid : number, id? : number){
        super(create_uid, name, write_uid, id);
        this.setZone_id(zone_id) ;
    }


    public setZone_id (zone_id : number) {
        this.zone_id = zone_id ;
    }

    public getZone_id () : number {
        return this.zone_id ;
    }

}