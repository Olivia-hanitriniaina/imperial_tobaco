import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage'

import {FormGroup,FormControl,FormBuilder,Validators, FormArray } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-page-seven',
  templateUrl: './page-seven.page.html',
  styleUrls: ['./page-seven.page.scss'],
})
export class PageSevenPage implements OnInit{
	
	itemes: MenuItem[];
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
	data_for_three : any = [] ;
	question_answer : any;
	data_question : any;

	constructor(private formBuilder: FormBuilder,private dbm : Database_manager, private fbuilder: FormBuilder, private storage : Storage, private router : Router, private activatedRoute : ActivatedRoute) {
		this.todo = this.formBuilder.group({});
		this.filegroupe = this.formBuilder.group({
			fileName : '',
		});
	 }

	ngOnInit() {
	
	this.itemes = [
			{label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
		  ];

		this.activatedRoute.paramMap.subscribe(data => {
			console.log("p7");
      		console.log(data);
			this.dt = data.get("data");
			this.data_from_route = JSON.parse(this.dt) ;
			this.data_for_three = data.get("data_for_three");
		}) ;

		this.dbm.get_data_for_p7(1,1).then(data => {
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
		this.cols = [0];
			
	}
	removeControl(){
		
		let formObj = this.todo.getRawValue(); 

		for(var i =0 ; i<this.data_from_db.length; i++){
			var serializedForm = formObj['input'+i];		
			this.data_from_db[i].response = serializedForm;
			this.question_answer = [this.data_from_db[i].name, this.data_from_db[i].response];
			this.dbm.insert_question_answer(this.data_from_route.visit_sheet_id,this.question_answer).then(() => {
				console.log("vita");
				
			});
		}
		this.dbm.get_data_survey_p7(this.data_from_route.visit_sheet_id).then(data => {
			this.data_question = data ;
			console.log(JSON.stringify(this.data_question));
			
		});
		this.cols= [ 
			{ field: "question", header: 'Questions' ,display : 'table-cell', text_align : "left", pointer_events : 'none', bg : ''},
			{ field: "answer", header: 'Réponses' ,display : 'table-cell', text_align : "right", pointer_events : 'none', bg : ''},	
		];
		this.display = false;
	  }

	  page_six(){
		let data_for_nav = {
			data : this.dt,
			data_for_three : this.data_for_three
		}
	    this.router.navigate(['page-six',data_for_nav]);
	}

	open_menu() {
		this.storage.set("last" , "tournees") ;
		this.router.navigate(['menu']) ;
	}


	page_one() {
		let data_nav = {
			data : this.dt 
		}
		this.router.navigate(['page-one',data_nav]);
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
		this.page_one();
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
	   alert(file);
	   //var binary = atob(file)
	  }
	
	 /* dataURItoBlob(dataURI) {
		var binary = atob(dataURI.split(',')[1]);
		var array = [];
	  for (var i = 0; i < binary.length; i++) {
		 array.push(binary.charCodeAt(i));
	  }
	 return new Blob([new Uint8Array(array)], {
		type: 'image/jpg'
	});
	}
	
	 var myFile:Blob=this.dataURItoBlob(myDataUri);*/
	onSubmit(order)
	{
		console.log(order);
		console.log(JSON.stringify(this.orderFields)) ;
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
