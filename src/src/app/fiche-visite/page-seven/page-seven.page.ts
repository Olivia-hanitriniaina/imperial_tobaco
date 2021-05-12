import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage'

import {FormGroup,FormControl,FormBuilder,Validators, FormArray } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { Database_manager } from 'src/app/model/DAO/database_manager.model';

@Component({
  selector: 'app-page-seven',
  templateUrl: './page-seven.page.html',
  styleUrls: ['./page-seven.page.scss'],
})
export class PageSevenPage implements OnInit{

 	items: { id: number; label: string; } [];
	cols: any[];
	data_from_route : any ;
	dt : any ;
	
	myForm : FormGroup;
	orderFields: any;
	data_from_db : any ;
	model = { };
	formArray : FormArray;
	display: boolean = false;
	name: string = '';
	private todo : FormGroup;
	private filegroupe : FormGroup;
	fileName: string;

	constructor(private formBuilder: FormBuilder,private dbm : Database_manager, private fbuilder: FormBuilder, private storage : Storage, private router : Router, private activatedRoute : ActivatedRoute) {
		this.todo = this.formBuilder.group({});
		this.filegroupe = this.formBuilder.group({
			fileName : '',
		});
	 }

	ngOnInit() {
		this.cols=[];
		this.activatedRoute.queryParams.subscribe(data => {
			this.dt = data['data'] ;
			this.data_from_route = JSON.parse(data['data']) ;
			console.log("data from route " + JSON.stringify(this.data_from_route));
		}) ;

		this.dbm.get_data_for_p7(1,3).then(data => {
			this.data_from_db = data ;

			console.log(JSON.stringify(this.data_from_db));
			for(var i =0 ; i<this.data_from_db.length; i++){
				this.todo.addControl('input'+i, new FormControl());	
			}
		});

		this.items = [
	      {id : 1 , label:'NOUVEAU'},
	      {id : 2 , label:'OUVERTE'},
	      {id : 3 , label:'CLÔTURÉE'},

		];
		this.cols;
			
	}
	removeControl(){
		
		let formObj = this.todo.getRawValue(); 

		for(var i =0 ; i<this.data_from_db.length; i++){
			var serializedForm = formObj['input'+i];
			
		this.data_from_db[i].response = serializedForm;
			this.cols= [ 
				{ field: "name", header: 'question' ,display : 'table-cell', text_align : "left", pointer_events : 'none', bg : ''},
				{ field: "response", header: 'reponse' ,display : 'table-cell', text_align : "right", pointer_events : 'none', bg : ''},	

			];
			
		}
		
		this.display = false;
	  }

	page_six(){
	    this.router.navigate(['page-six']) ;
	}

	open_menu() {
		this.storage.set("last" , "tournees") ;
		this.router.navigate(['menu']) ;
	}


	page_one() {
		this.router.navigate(['page-one']) ;
	}

	end_visite() {
		let id = this.data_from_route.visit_sheet_id;
		let partner_id = this.data_from_route.partner_id;
		let now = this.dbm.getDatetimeNow();

		// get begin datetime 	
		this.dbm.get_visit_begin_datetime(id)
		.then(data => {
			let begin_datetime = data.begin_datetime;

			begin_datetime = new Date(begin_datetime).valueOf();
			let end_datetime = new Date(now).valueOf();

			let duration = end_datetime - begin_datetime;
			duration = duration/1000;
			duration = duration/60;
			
			this.dbm.set_visit_duration_end_datetime(id,duration,now)
				.then()
				.catch(e=>alert(e.message));
		})
		.catch(e => alert(e.message))
		this.router.navigate(['page-one']);
	}

	
	  showDialog() {
		  this.display = true;
	  }
	  Annuler(){
		this.display = false;
	  }
	
	  filename: string = '' ;
	  onFileSelected(event){
		let file = event.target.files[0];        
		this.filename= file.name;
		let reader = new FileReader();
        reader.onload = (e: any) => {
           let fileData = e.target.result;
        };
	   reader.readAsDataURL(file);
	  }

	onSubmit(order)
	{
		console.log(order);
		console.log(JSON.stringify(this.orderFields)) ;
	}

}
