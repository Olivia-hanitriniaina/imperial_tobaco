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
	edit : boolean = false ;

	constructor(private dbm : Database_manager, private router : Router, private activatedRoute : ActivatedRoute) { }

	ngOnInit() {

		this.activatedRoute.queryParams.subscribe(data => {
			this.dt = data['data'] ;
			this.data_from_route = JSON.parse(data['data']) ;
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
			{ field: 'produit_id', header: '' ,display : 'none', text_align : "left"},
			{ field: 'name', header: 'Article' ,display : 'table-cell', text_align : "left"},
			{ field: 'quantity', header: 'Quantité étalée / remise' ,display : 'table-cell', text_align : "right"},
			{ field: 'manufacturer_id', header: '' ,display : 'none', text_align : "left"},
		];
	}

	page_four(){
	    this.router.navigate(['page-four']) ;
	}

	page_six(){
		let navigation_extra : NavigationExtras = {
			queryParams : {
				data : this.dt
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

}
