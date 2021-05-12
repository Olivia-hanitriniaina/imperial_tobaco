import { base_data } from './base_data.model';

export class price_line extends base_data {

    product_id : number ;
    currency_id : number ;
    visit_sheet_id : number ;
    current_price : number ;
    manufacturer_id : number ;
}