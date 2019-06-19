import { base_data } from './base_data.model';

export class stock_line extends base_data {
    placement : number ;
    product_id : number ;
    visit_sheet_id : number ;
    available_stock : number ;
    manufacturer_id : number ;
    last_visit_stock : number
}