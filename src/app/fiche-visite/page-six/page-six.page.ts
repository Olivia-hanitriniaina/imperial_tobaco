import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
import { Storage } from '@ionic/storage'
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { EditableColumn } from 'primeng/table';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-page-six',
  templateUrl: './page-six.page.html',
  styleUrls: ['./page-six.page.scss'],
})
export class PageSixPage implements OnInit {
	itemes: MenuItem[];
  	items: { id: number; label: string; } [];
	cols: any[];
	data_from_route : any ;
	dt : any ;
	visit_goal : string  ;
	modifiable : boolean = true ;
	constructor(private router : Router, private activatedRoute : ActivatedRoute, private storage : Storage,private dbm:Database_manager) { }

	ngOnInit() {
		
		this.itemes = [
			{label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
		  ];
		this.modifiable = true ;
		this.activatedRoute.paramMap.subscribe((params : ParamMap) => {
			console.log("p6");
      		console.log(params);
			this.dt = params.get("data");
			this.data_from_route = JSON.parse(this.dt) ;	
			//get next visit goal where visit_sheet_id = 
			this.dbm.get_next_visit_goal(this.data_from_route.visit_sheet_id).then((data)=>{
				if(data){
					this.visit_goal = data.next_visit_goal ;
					this.modifiable = false ;
				}
			})
			.catch(e=>alert(e.message));
		}) ;
		this.modifiable = true ;
		if(this.data_from_route.state=='fermé'){
		  this.modifiable = false ;
		}
		this.items = [
	      {id : 1 , label:'NOUVEAU'},
	      {id : 2 , label:'OUVERTE'},
	      {id : 3 , label:'CLÔTURÉE'},
	    ];

	    // this.carService.getCarsSmall().then(cars => this.cars = cars);

	    this.cols = [
	        { field: 'vin', header: 'Vin' },
	        {field: 'year', header: 'Year' },
	        { field: 'brand', header: 'Brand' },
	        { field: 'color', header: 'Color' }
	    ];
	}

	modif_next_visit_goal(){
		this.modifiable = true ; 
	}

	page_seven(){
		let data_for_nav = {
			data : this.dt,
		}
	    this.router.navigate(['page-seven',data_for_nav]);
	}
	save_next_visit_goal(){
		let visit_sheet_id = this.data_from_route.visit_sheet_id;
		this.dbm.save_next_visit_goal(visit_sheet_id,this.visit_goal);
		//get next visit goal where visit_sheet_id = 
		this.dbm.get_next_visit_goal(this.data_from_route.visit_sheet_id)
		.then((value)=>{
			if(value){
				this.visit_goal = value.next_visit_goal;
				this.modifiable = false ; 
			}
		})
		.catch(e=>{
			this.visit_goal = null ;
			alert(e.message);
		})
	}

	page_five(){
		let data_for_nav = {
			data : this.dt,
		}
	    this.router.navigate(['page-five',data_for_nav]);
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
