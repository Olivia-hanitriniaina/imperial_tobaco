import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage'
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { EditableColumn } from 'primeng/table';

@Component({
  selector: 'app-page-six',
  templateUrl: './page-six.page.html',
  styleUrls: ['./page-six.page.scss'],
})
export class PageSixPage implements OnInit {

  	items: { id: number; label: string; } [];
	cols: any[];
	data_from_route : any ;
	dt : any ;
	visit_goal : string  ;
	modifiable : boolean = true ;

	constructor(private router : Router, private activatedRoute : ActivatedRoute, private storage : Storage,private dbm:Database_manager) { }

	ngOnInit() {
		this.modifiable = true ;
		this.activatedRoute.queryParams.subscribe(data => {
			this.dt = data['data'] ;
			this.data_from_route = JSON.parse(data['data']) ;	
			console.log("data from route " + JSON.stringify(this.data_from_route));		
			//get next visit goal where visit_sheet_id = 
			this.dbm.get_next_visit_goal(this.data_from_route.visit_sheet_id).then((data)=>{
				if(data){
					this.visit_goal = data.next_visit_goal ;
					this.modifiable = false ;
				}
			})
			.catch(e=>alert(e.message));
		}) ;

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
		let navigation_extra : NavigationExtras = {
			queryParams : {
				data : this.dt,
			}
		}
	    this.router.navigate(['page-seven'], navigation_extra) ;
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
	    this.router.navigate(['page-five']) ;
	}

	open_menu() {
		this.storage.set("last" , "tournees") ;
		this.router.navigate(['menu']) ;
	}

}
