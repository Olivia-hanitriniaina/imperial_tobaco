import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
import { Storage } from '@ionic/storage'
import { Database_manager } from 'src/app/model/DAO/database_manager.model';

@Component({
	selector: 'app-page-three',
	templateUrl: './page-three.page.html',
	styleUrls: ['./page-three.page.scss'],
})
export class PageThreePage implements OnInit {
	items: { id: number; label: string; } [];
	cols: any[];
	edit : boolean = false ;
	data_from_route : any ;
	dt : any ;
	arr_product_id = [] ;
	data_from_db = [] ;

	constructor(private router : Router, private activatedRoute : ActivatedRoute, private storage : Storage, private dbm : Database_manager) { }

	ngOnInit() {
		
		this.activatedRoute.paramMap.subscribe((params : ParamMap)=>{
			console.log(JSON.stringify(params));
			this.dt = params.get('data');
			if(params.get("data")){
				this.data_from_route = JSON.parse(params.get('data'));
				this.edit = (params.get("edit"))? true : false ;
				console.log("data from route p3 " + JSON.stringify(this.data_from_route));
			}
			if(params.get("data_for_three")){
				this.arr_product_id=JSON.parse(params.get("data_for_three"));
				this.arr_product_id.forEach(id => {
					this.dbm.get_data_for_p3(id,this.data_from_route.visit_sheet_id,this.data_from_route.res_partner_id)
						.then((data:any)=>{
							this.data_from_db.push(data) ;
						}).catch(e=>alert(e.message))
				});
			}
			if(params.get("partner_id")){
				this.data_from_route = [];
				this.data_from_route.partner_id= params.get("partner_id");
			}
		})

		this.items = [
	      {id : 1 , label:'NOUVEAU'},
	      {id : 2 , label:'OUVERTE'},
	      {id : 3 , label:'CLÔTURÉE'},
	    ];

	    // this.carService.getCarsSmall().then(cars => this.cars = cars);

	    this.cols = [
        { field: 'manufacturer_name', header: 'Fabricant' ,display : 'table-cell', text_align : "left", pointer_events : 'none', bg : '#D3D3D3'},
        { field: 'product_name', header: 'Produit' ,display : 'table-cell', text_align : "left", pointer_events : 'none', bg : '#D3D3D3'},
        { field: 'current_price_2', header: 'Prix relevé lors de la dernière visite' ,display : 'table-cell', text_align : "right", pointer_events : 'none', bg : '#D3D3D3'},
        { field: 'current_price', header: 'Relevé prix' ,display : 'table-cell', text_align : "right", pointer_events : 'initial', bg : ''},
    ];
	}


	save() // relevé prix
		{	
			this.dbm.update_current_price(parseInt(this.data_from_route.res_partner_id),this.data_from_db);
			for(var i = 0; i < this.arr_product_id.length ; i++) {
				this.dbm.get_data_for_p3(this.arr_product_id[i], this.data_from_route.visit_sheet_id, this.data_from_route.res_partner_id)
					.then(data => {
						this.data_from_db = [] ;
						this.data_from_db.push(data) ;
					});
			}
			this.enable_edit();
		}

		cancel(){
			for(var i = 0; i < this.arr_product_id.length ; i++) {
				this.dbm.get_data_for_p3(this.arr_product_id[i], this.data_from_route.visit_sheet_id, this.data_from_route.res_partner_id)
					.then(data => {
						this.data_from_db = [] ;
						this.data_from_db.push(data) ;
						alert('Opération annulée!!');
					});
			}
			this.enable_edit();
		}
	page_two(){
		let data_nav = {
			data_nav : this.data_from_route
		}
	    this.router.navigate(['page-two',data_nav]) ;
	  }

	  page_four(){
			let navigation_extra : NavigationExtras = {
				queryParams : {
					data : this.dt,
					edit : this.edit
				}
			}
	    this.router.navigate(['page-four'], navigation_extra) ;
		}
		
		enable_edit(){
			if(this.edit == false) {
				this.edit = true ;
			}
			else {
				this.edit = false
			}
		}

		open_menu() {
			this.storage.set("last" , "tournees") ;
			this.router.navigate(['menu']) ;
		}
		

}
