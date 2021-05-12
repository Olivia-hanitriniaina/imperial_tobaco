import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage } from '@ionic/storage';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-page-five',
  templateUrl: './page-five.page.html',
  styleUrls: ['./page-five.page.scss'],
})
export class PageFivePage implements OnInit {
		itemes: MenuItem[];
  	items: { id: number; label: string; } [];
	cols: any[];
	dt : any ;
	data_from_route : any ;
	data_from_db : any ;
	edit : boolean = true ;
	data_for_three : string ;
	constructor(private storage : Storage, private dbm : Database_manager, private router : Router, private activatedRoute : ActivatedRoute) { }

	ngOnInit() {
		
			this.itemes = [
			{label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
		  ];
		this.activatedRoute.paramMap.subscribe((params:any) => {
			this.dt = params.get("data");
			this.data_from_route = JSON.parse(this.dt) ;
			console.log("p5");
      		console.log(params);
			this.dbm.get_data_for_p5 (this.data_from_route.visit_sheet_id).then(data => {
				this.data_from_db = data ;
			}) ;
		  }) ;

		  this.edit = true ;
		  if(this.data_from_route.state=='fermé'){
			this.edit = false ;
		  }
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
		let data_for_nav = {
			data : this.dt,
		}
	    this.router.navigate(['page-four',data_for_nav]) ;
	}

	page_six(){
		let data_for_nav = {
			data : this.dt,
		}
	    this.router.navigate(['page-six',data_for_nav]);
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
		/*this.dbm.get_data_for_p5 (this.data_from_route.visit_sheet_id).then(data => {
			this.data_from_db = data ;
		}) ;
		this.enable_edit();
		this.dbm.set_pv_line_quantity_product(this.data_from_db,this.data_from_route.visit_sheet_id);*/
		this.enable_edit();
	}
	cancel(){
		this.dbm.get_data_for_p5 (this.data_from_route.visit_sheet_id).then(data => {
			this.data_from_db = data ;
		}) ;
		this.enable_edit();
	}
	data_cmp  : any;
	Deconnexion(){
	  this.storage.get('data_p2')
	  .then((data2:any)=>{
		this.data_cmp = JSON.parse(data2);
		this.dbm.Updata_active_Login(this.data_cmp.id);
		this.storage.clear();
	  })
	  this.router.navigate(['home']);
	}
}
