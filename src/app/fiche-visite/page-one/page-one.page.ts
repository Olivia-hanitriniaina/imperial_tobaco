import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage}  from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx'
import { AlertPromise } from 'selenium-webdriver';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.page.html',
  styleUrls: ['./page-one.page.scss'],
})
export class PageOnePage implements OnInit {
   itemes: MenuItem[];
	items: { id: number; label: string; } [];
  name : string = "" ;
  date_debut : any ;
  duree : number = 0 ;
  checked : boolean = false ;
  id : number = 0 ;
  res_partner_name : any ;
  data : string = "" ;
  coord : any = {
    longitude : 0,
    latitude : 0
  };
  dist : number ;
  edit : boolean = false ;
  location = {
    latitude : 0,
    longitude : 0
  }  
  data_from_route : any = [] ;
  constructor(private geolocation: Geolocation, private storage : Storage, private dbm : Database_manager, private router : Router, private activeroute : ActivatedRoute) { 

  }

  ngOnInit() {
    this.itemes = [
			{label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
		  ];
    this.dbm.select_res_user_active().then(async data => {
      this.name = data.login ;
      this.id = data.id
    }) ;
    
  this.activeroute.paramMap.subscribe((params :ParamMap) =>{
    console.log(params);
    this.data_from_route = JSON.parse(params.get("data"))
    this.data = params.get("data");
    this.res_partner_name = JSON.parse(params.get("data"));
    this.edit = true ;
    if(this.res_partner_name.state=='fermé'){
      this.edit = false ;
    }
  })

  /*this.activeroute.queryParams.subscribe(qp => {
    this.data = qp['data'] ;
    this.res_partner_name = JSON.parse(qp['data']) ;
  }) ;
*/

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
    
    this.dbm.start_visit(this.res_partner_name.visit_sheet_id).then(()=>{
      let stock_line_data = {
        create_uid : this.id,
        placement : 0 ,
        product_id : 0,
        write_uid : this.id,
        visit_sheet_id : this.data_from_route.visit_sheet_id,
        create_date : null ,
        available_stock : 0 ,
        write_date : null ,
        manufacturer_id : 0 ,
        last_visit_stock : 0 ,
      }
      this.dbm.insert_stock_line(stock_line_data);
    })

    var options = {
      enableHighAccuracy: true, timeout: 60000, maximumAge: 0
    };

    await this.geolocation.getCurrentPosition(options).then( async (resp) => {

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



