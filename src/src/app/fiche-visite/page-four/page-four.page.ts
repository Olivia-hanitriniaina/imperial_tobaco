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
	edit : boolean = true ;

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
				this.edit = true ;
				console.log("data from route " + JSON.stringify(this.data_from_route));
			}) ;
			this.init_data();
	}

	init_data(){
		
		this.dbm.get_audit_data_p4(this.data_from_route.visit_sheet_id).then(data => {
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
		let data_nav = {			
			partner_id : this.data_from_route.partner_id
		}
	    this.router.navigate(['page-three',data_nav]) ;
  	}

  	page_five(){
			let navigation_extra : NavigationExtras = {
				queryParams : {
					data : this.dt,
					edit : this.edit
				}
			}
	    this.router.navigate(['page-five'], navigation_extra) ;
		}
		
		open_menu() {
			this.storage.set("last" , "tournees") ;
			this.router.navigate(['menu']) ;
		}

		enable_edit(){
			if(this.edit == false) {
				this.edit = true ;
			}
			else {
				this.edit = false
			}
		}

		save(){
			this.dbm.update_response(this.data_from_route.visit_sheet_id,this.pos_audit_data)
			this.init_data();
			this.enable_edit();
		}
		cancel(){
			alert('action canceled');
			this.init_data();
			this.enable_edit();
		}
}
