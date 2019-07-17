import { base_data } from './base_data.model';

export class itg_product extends base_data{
    begin_date : Date ;
    end_date : Date ;
    retailer_unit_sale_price : number ;
    retailer_pqt_sale_price : number ;
    grs_cost_price : number ;
    tax_status_id : number ;
    dmg_sale_price : number ;
    brand_id : number ;
    dmg_cost_price : number ;
    active : number ;
    grs_sale_price : number ;
    manufacturer_id : number ;
    ref : string ;
    product_type_code : string ;
    product_type : number ;
}