import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage } from '@ionic/storage'
import { AlertController } from '@ionic/angular';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.page.html',
  styleUrls: ['./page-two.page.scss'],
})

export class PageTwoPage implements OnInit {
   itemes: MenuItem[];
  items: { id: number; label: string; } [];
  cols: any[];
  data_from_db : any ;
  data_from_route : any ;
  edit : boolean = false ;
  dt : any ;
  data_cmp : any ;
  
  constructor(
    private alertController : AlertController,
    private router : Router,
    private activatedRoute : ActivatedRoute, 
    private dbm : Database_manager, 
    private storage : Storage
  ) 
  {
  }

  ionViewWillEnter(){

  }

  ngOnInit() {
    
	 this.itemes = [
      {label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
    ];
    this.activatedRoute.paramMap.subscribe((params : ParamMap)=>{
      console.log("p2");
      console.log(params);
      if(params.get("data_nav")){
        let data_nav = JSON.parse(params.get("data_nav"));
        this.data_from_route = data_nav ;
        this.dt = params.get("data_nav") ;
        this.dbm.get_stock_visit_sheet_by_id_p2(this.data_from_route.visit_sheet_id,this.data_from_route.res_partner_id)
          .then((data)=> {
            this.data_from_db = data;
            this.storage.set('data_p2',JSON.stringify(data)).catch(e => alert("set storage p2 " + e.message))
              .then(()=>{
                this.storage.get('data_p2')
                  .then((data:any)=>{
                    this.data_cmp = JSON.parse(data);
                  })
              })
          }).catch(e => alert(e.message))
      }
      else{
      
        this.data_from_route = JSON.parse(params.get("data"));
        this.dt = params.get("data");
        
        this.dbm.get_stock_visit_sheet_by_id_p2(this.data_from_route.visit_sheet_id,this.data_from_route.res_partner_id)
          .then((data)=> {
            this.data_from_db = data;
            this.storage.set('data_p2',JSON.stringify(data)).catch(e => alert("set storage p2 " + e.message))
              .then(()=>{
                this.storage.get('data_p2')
                  .then((data:any)=>{
                    this.data_cmp = JSON.parse(data);
                  })
              })
          }).catch(e => alert(e.message))
      }
      this.edit = true ;
      if(this.data_from_route.state=='fermé'){
        this.edit = false ;
      }

    })

	this.items = [
      {id : 1 , label:'NOUVEAU'},
      {id : 2 , label:'OUVERTE'},
      {id : 3 , label:'CLÔTURÉE'},
    ];
  //  this.cols = [0];
    // this.carService.getCarsSmall().then(cars => this.cars = cars);

    this.cols = [ 
        { field: 'product_id', header: 'product_id' ,display : 'none', text_align : "left" , pointer_events : 'none', bg : '#D3D3D3'},
        { field: 'manufacturer_name', header: 'Fabricant' ,display : 'table-cell', text_align : "left", pointer_events : 'none', bg : '#D3D3D3'},
        { field: 'product_name', header: 'Produit' ,display : 'table-cell', text_align : "left", pointer_events : 'none', bg : '#D3D3D3'},
        { field: 'last_visit_stock_avg', header: 'Stock initial moyen des 4 dernières visites' ,display : 'table-cell', text_align : "right", pointer_events : 'none', bg : '#D3D3D3'},
        { field: 'available_stock', header: 'Relevé stock initial' ,display : 'table-cell', text_align : "right", pointer_events : 'initial', bg : ''},
        { field: 'last_visit_stock', header: 'Stock initial dernière visite' ,display : 'table-cell', text_align : "right", pointer_events : 'none', bg : '#D3D3D3'},
        { field: 'last_placement', header: 'Placement dernière visite' , display : 'table-cell', text_align : "right", pointer_events : 'none', bg : '#D3D3D3'},
        { field: 'placement', header: 'Placement' , display : 'table-cell', text_align : "right", pointer_events : 'initial', bg : ''}
    ];
  }

  enable_edit(){
    if(this.edit == false) {
      this.edit = true ;
    }
    else {
      this.edit = false
    }
  }
  sauvegarder(){
    for(var i = 0; i < this.data_from_db.length; i++){
      this.dbm.update_get_data_p2(this.data_from_db[i].available_stock, this.data_from_db[i].placement, this.data_from_db[i].product_id, this.data_from_route.visit_sheet_id);
			}
			this.enable_edit();
   
  }
  annuler(){
    this.dbm.get_stock_visit_sheet_by_id_p2 (this.data_from_route.visit_sheet_id, this.data_from_route.res_partner_id).then(data => {
      this.data_from_db = data ;
    }) ;
    this.enable_edit();
  }


  cancel(){
    this.enable_edit();
  }
  save(){
    this.enable_edit();
  }
  modify(){
    this.enable_edit();
  }
  
  page_one(){
    let data_nav = {
      data: this.dt
    }
    this.router.navigate(['page-one',data_nav]);
  }
  async page_three(){
    
    let data_rtrn = [] ;
    if(this.data_from_db){
      this.data_from_db.forEach(data => {
        if(!data.placement) data.placement = 0 ;
        if(!data.available_stock) data.available_stock = 0 ;
        if( data.available_stock+data.placement > 0 ){
          data_rtrn.push(data.product_id);
          data.placement = null ;
          data.available_stock = null ;
        }
      });
    }    
    this.storage.set("data_p3",data_rtrn)
    .then(()=>{
      data_rtrn = null;
      this.storage.get("data_p3")
        .then((data)=>{
          console.log("data_p3" + data);
        })
    })
    let data_for_nav = {
      data : this.dt ,
    }
    this.storage.get('data_p2').then(async data_p2 => {
      if(data_p2 == JSON.stringify(this.data_from_db)) {
        const alert = await this.alertController.create({
          message: 'Êtes vous sûre de vouloir continuer sans rien modifier ?',
          buttons: [
            {
              text: 'Non',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                
              }
            }, {
              text: 'Oui',
              handler: () => {
                this.router.navigate(['page-three',data_for_nav]) ;
              }
            }
          ]
        });
        await alert.present();
      }
      else {
        this.router.navigate(['page-three',data_for_nav]) ;
      }
    })
    .catch(e=>alert(e.message))
     ;
    
  }

  open_menu() {
    this.storage.set("last" , "tournees") ;
    this.router.navigate(['menu']) ;
  }
	 data2_cmp  : any;
  Deconnexion(){
    this.storage.get('data_p2')
    .then((data2:any)=>{
      this.data2_cmp = JSON.parse(data2);
      this.dbm.Updata_active_Login(this.data2_cmp.id);
      this.storage.clear();
    })
    this.router.navigate(['home']);
  }
}
