import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage } from '@ionic/storage'

interface Quizz {
  ans_id : number ,
  ans_name : string
}

@Component({
  selector: 'app-page-four',
  templateUrl: './page-four.page.html',
  styleUrls: ['./page-four.page.scss'],
})

export class PageFourPage implements OnInit {
	items: { id: number; label: string; } [];
	cols: any[];
	data_from_route : any ;
	dt : any ;
	pos_audit_data : any[] ;
	qz = new Array() ;

	constructor(private dbm : Database_manager, private router : Router, private activatedRoute : ActivatedRoute, private storage : Storage) { }

	ngOnInit() {
		this.items = [
	      {id : 1 , label:'NOUVEAU'},
	      {id : 2 , label:'OUVERTE'},
	      {id : 3 , label:'CLÔTURÉE'},
	    ];

			this.activatedRoute.queryParams.subscribe(data => {
				this.dt = data['data'] ;
				this.data_from_route = JSON.parse(data['data']) ;
			}) ;

			this.dbm.get_audit_data_p4().then(data => {
				this.pos_audit_data = data ;
				var quizz : Quizz[] ;
				
				for(var i = 0; i<this.pos_audit_data.length; i++) {

					var ans_id = this.pos_audit_data[i].answer_id.split('|') ;
					var ans_name = this.pos_audit_data[i].answer_name.split('|') ;
					let q : {"value" : string, "label" : string} ;
					let k = new Array() ;
					k.push({"value" : "", "label" : ""}) ;
					for(var x = 0; x < ans_id.length; x++) {
						q = {"value" : ans_name[x], "label" : ans_name[x]}		
						k.push(q) ;
					}
					this.pos_audit_data[i].answer_name = k ;
					
				}

				console.log("quizz ==>", this.pos_audit_data);
				 
			}) ;	
	}

	page_three(){
	    this.router.navigate(['page-three']) ;
  	}

  	page_five(){
			let navigation_extra : NavigationExtras = {
				queryParams : {
					data : this.dt
				}
			}
	    this.router.navigate(['page-five'], navigation_extra) ;
		}
		
		open_menu() {
			this.storage.set("last" , "tournees") ;
			this.router.navigate(['menu']) ;
		}
}
