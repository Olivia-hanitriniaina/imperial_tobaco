import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage}  from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { AlertPromise } from 'selenium-webdriver';

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
  res_partner_name : any ;
  data : string = "" ;
  coord : any ;
  dist : number ;
  edit : boolean = false ;
  location = {
    latitude : 0,
    longitude : 0
  }

  constructor(private geolocation: Geolocation, private storage : Storage, private dbm : Database_manager, private router : Router, private activeroute : ActivatedRoute) { 

  }

  ngOnInit() {
    
    this.dbm.select_res_user_active().then(async data => {
      this.name = data.login ;
      this.id = data.id
    }) ;
    
  this.activeroute.paramMap.subscribe((params :ParamMap) =>{
    this.edit = (params.get("edit"))? true : false ;
  })

  this.activeroute.queryParams.subscribe(qp => {
    this.data = qp['data'] ;
    this.res_partner_name = JSON.parse(qp['data']) ;
  }) ;


	this.items = [
      {id : 1 , label:'NOUVEAU'},
      {id : 2 , label:'OUVERTE'},
      {id : 3 , label:'CLÔTURÉE'},
    ];
  }

  modify(){
    
    this.enable_edit();
  }
  create(){
    this.enable_edit();
  }
  save(){
    this.enable_edit();
  }
  cancel(){
    this.enable_edit();
  }
  page_two(){

    let data_for_nav = {
      edit:this.edit,
      data:this.data
    }

    this.storage.set("user_id",this.id)
      .then(()=>{        
        this.router.navigate(['page-two',data_for_nav]) ;
      })
      .catch(e => alert(e.message));
  }

	enable_edit() {
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

  page_fiche_visite(){
    this.router.navigate(['fiche-visite']) ;
  }

  async demarrer_visite() {
    
    this.dbm.start_visit(this.res_partner_name.visit_sheet_id);

    var options = {
      enableHighAccuracy: true, timeout: 60000, maximumAge: 0
    };

    await this.geolocation.getCurrentPosition(options).then( async (resp) => {

      console.log(this.res_partner_name.provider_latitude + "    " + this.res_partner_name.provider_longitude) ;

      var geodist = require('geodist') ;
      var p1 = {lat: resp.coords.latitude, lon: resp.coords.longitude}    ;
      
      var p2 = {lat: this.res_partner_name.provider_latitude, lon: this.res_partner_name.provider_longitude};

      this.dist = geodist(p1, p2, {exact: true, unit: 'm'}) ;

      this.coord = resp.coords ;

      this.res_partner_name.state = "opened" ;

     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

}



