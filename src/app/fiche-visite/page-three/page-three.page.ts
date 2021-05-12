import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
import { Storage } from '@ionic/storage'
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import {MenuItem} from 'primeng/api';

@Component({
	selector: 'app-page-three',
	templateUrl: './page-three.page.html',
	styleUrls: ['./page-three.page.scss'],
})
export class PageThreePage implements OnInit {
		itemes: MenuItem[];
	items: { id: number; label: string; } [];
	cols: any[];
	edit : boolean = false ;
	data_from_route : any ;
	dt : any ;
	data_for_three : any = [] ;
	arr_product_id = [] ;
	data_from_db = [] ;

	constructor(private router : Router, private activatedRoute : ActivatedRoute, private storage : Storage, private dbm : Database_manager) { }

	ionViewWillEnter(){
		this.activatedRoute.paramMap.subscribe((params : ParamMap)=>{
			console.log("p3");
      		console.log(params);
			this.data_from_db = [] ;
			this.edit = false ;
			
			if(params.get("data")){
				this.dt = params.get('data');
				this.data_from_route = JSON.parse(params.get('data'));
			}else{
				this.dt = params.get('data_nav');
				this.data_from_route = JSON.parse(params.get("data_nav"));
			}
			this.storage.get("data_p3")
			.then((data_p3:any)=>{
				data_p3.forEach((id:number) => {
					this.dbm.get_data_for_p3(id,this.data_from_route.visit_sheet_id,this.data_from_route.res_partner_id)
						.then((data:any)=>{
							this.data_from_db.push(data) ;
						}).catch(e=>alert(e.message))
				});
			})
		})
		this.edit = true ;
		if(this.data_from_route.state=='fermé'){
		  this.edit = false ;
		}
	}

	ngOnInit() {
		
	this.itemes = [
			{label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
		  ];

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
			this.enable_edit();
		}

		cancel(){
			this.enable_edit();
		}
	page_two(){
		let data_nav = {
			data_nav : JSON.stringify(this.data_from_route),
		}
	    this.router.navigate(['page-two',data_nav]) ;
	  }

	page_four(){
		let data_for_nav = {
			data : this.dt,
			data_for_three : JSON.stringify(this.arr_product_id)
		}
	    this.router.navigate(['page-four',data_for_nav]);
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
