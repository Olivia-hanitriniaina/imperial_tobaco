import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';

@Component({
  selector: 'app-page-five',
  templateUrl: './page-five.page.html',
  styleUrls: ['./page-five.page.scss'],
})
export class PageFivePage implements OnInit {

  	items: { id: number; label: string; } [];
	cols: any[];
	dt : any ;
	data_from_route : any ;
	data_from_db : any ;
	edit : boolean = true ;

	constructor(private dbm : Database_manager, private router : Router, private activatedRoute : ActivatedRoute) { }

	ngOnInit() {
		
		this.activatedRoute.queryParams.subscribe(data => {
			this.dt = data['data'] ;
			this.data_from_route = JSON.parse(data['data']) ;
			console.log("data from route " + JSON.stringify(this.data_from_route));			
			this.dbm.get_data_for_p5 (this.data_from_route.visit_sheet_id).then(data => {
				this.data_from_db = data ;
			}) ;
		  }) ;


		this.items = [
	      {id : 1 , label:'NOUVEAU'},
	      {id : 2 , label:'OUVERTE'},
	      {id : 3 , label:'CLÔTURÉE'},
		];
		
		this.cols = [ 
			{ field: 'produit_id', header: '' ,display : 'none', text_align : "left", pointer_events : 'none', bg : '#D3D3D3'},
			{ field: 'product_name', header: 'Article' ,display : 'table-cell', text_align : "left", pointer_events : 'none', bg : '#D3D3D3'},
			{ field: 'quantity', header: 'Quantité étalée / remise' ,display : 'table-cell', text_align : "right", pointer_events : 'initial', bg : ''},
			{ field: 'manufacturer_id', header: '' ,display : 'none', text_align : "left", pointer_events : 'none', bg : '#D3D3D3'},
		];
	}

	page_four(){
	    this.router.navigate(['page-four']) ;
	}

	page_six(){
		let navigation_extra : NavigationExtras = {
			queryParams : {
				data : this.dt,
				edit : this.edit
			}
		}
	    this.router.navigate(['page-six'], navigation_extra) ;
	}

	enable_edit() {
		if(this.edit == false) {
			this.edit = true ;
		  }
		  else {
			this.edit = false
		  }
	}

	save(){
		this.dbm.update_pv_line_quantity_product(this.data_from_db,this.data_from_route.visit_sheet_id);
		this.dbm.get_data_for_p5 (this.data_from_route.visit_sheet_id).then(data => {
			this.data_from_db = data ;
		}) ;
		this.enable_edit();
	}
	cancel(){
		this.dbm.get_data_for_p5 (this.data_from_route.visit_sheet_id).then(data => {
			this.data_from_db = data ;
		}) ;
		this.enable_edit();
	}

}
