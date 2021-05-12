import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage } from '@ionic/storage'
import {MenuItem} from 'primeng/api';
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
	itemes: MenuItem[];

	constructor(private dbm : Database_manager, private router : Router, private activatedRoute : ActivatedRoute, private storage : Storage) { }

	ngOnInit() {
		
		this.itemes = [
			{label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
		  ];
		this.items = [
	      {id : 1 , label:'NOUVEAU'},
	      {id : 2 , label:'OUVERTE'},
	      {id : 3 , label:'CLÔTURÉE'},
	    ];

		this.activatedRoute.paramMap.subscribe((params : ParamMap)=>{
			console.log("p4");
      		console.log(params);
			this.dt = params.get("data");
			this.data_from_route = JSON.parse(params.get("data"));
		})
		this.edit = true ;
		if(this.data_from_route.state=='fermé'){
		  this.edit = false ;
		}
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
		}) ;
	}

	page_three(){
		let data_nav = {
			data : this.dt
		}
	    this.router.navigate(['page-three',data_nav]) ;
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

		enable_edit(){
			if(this.edit == false) {
				this.edit = true ;
			}
			else {
				this.edit = false
			}
		}

		save(){
			this.dbm.update_response(this.data_from_route.visit_sheet_id,this.pos_audit_data);
			this.init_data();
			//this.dbm.set_response(this.data_from_route.visit_sheet_id,this.pos_audit_data)
			//this.storage.set("data_p4",this.pos_audit_data)
			this.enable_edit();
		}
		cancel(){
			alert('action canceled');
			this.init_data();
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
