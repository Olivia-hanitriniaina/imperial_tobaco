import { base_data } from './base_data.model';

export class visit_sheet extends base_data {
    
    show_btn_end_visit : number;
    visit_duration : number;
    user_id : number;
    page_number : number ;
    page_number_total : number;
    page_number_total_str : string;
    provider_longitude : number;
    begin_datetime : Date;
    next_visit_goal : string;
    provider_latitude : number;
    end_datetime : Date;
    hide_btn_next_next_page : number;
    tour_id : number;
    visit_duration_str : string;
    partner_id : number ;
    pos_initial : number ;
    region_id : number ;
    secteur_id : number ;
    agence_id : number ;
    zone_id : number ;
    state : string ;
    has_survey : number ;
    pos_initial_line_id : number ;
    pos_additional_line_id : number
}