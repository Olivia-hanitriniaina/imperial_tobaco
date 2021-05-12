import { base_data } from './base_data.model';

export class itg_survey_question extends base_data {
    type : string ;
    page_id : number ;
    mandatory : boolean ;
    sequence : number ;
    survey_id : number ;
}