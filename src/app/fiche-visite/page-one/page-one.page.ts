import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.page.html',
  styleUrls: ['./page-one.page.scss'],
})
export class PageOnePage implements OnInit {
	items: { id: number; label: string; } [];
  name : string = "" ;
  date_debut : any ;
  duree : number = 0 ;
  checked : boolean = false ;
  id : number = 0 ;
  res_partner_name : string = ""

  constructor(private dbm : Database_manager, private router : Router, private activeroute : ActivatedRoute) { 

  }

  ngOnInit() {
    this.dbm.select_res_user_active().then(async data => {
      this.name = data.login ;
      this.id = data.id
    }) ;
    
  this.activeroute.queryParams.subscribe(qp => {
    this.res_partner_name = qp['res_partner_name'] ;
    console.log( qp['visit_sheet_id'] );
    this.dbm.select_basic_data_with_id( "visit_sheet" , qp['visit_sheet_id']).then( async data => {
      console.log(JSON.stringify(data) );
    }) ;
  }) ;
	this.items = [
      {id : 1 , label:'NOUVEAU'},
      {id : 2 , label:'OUVERTE'},
      {id : 3 , label:'CLÔTURÉE'},
    ];
  }

  page_two(){
    this.router.navigate(['page-two']) ;
  }

}
