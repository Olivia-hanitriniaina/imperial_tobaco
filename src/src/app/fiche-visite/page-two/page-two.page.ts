import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras, ParamMap } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage } from '@ionic/storage'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.page.html',
  styleUrls: ['./page-two.page.scss'],
})

export class PageTwoPage implements OnInit {
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
    
    this.activatedRoute.paramMap.subscribe((params : ParamMap)=>{
      if(params.get("data_nav")){
        this.data_from_route = [] ;
        this.data_from_route = params.get("data_nav");
      }
      else{
        this.edit = (params.get("edit"))? true : false ;
      
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
      

    })

	this.items = [
      {id : 1 , label:'NOUVEAU'},
      {id : 2 , label:'OUVERTE'},
      {id : 3 , label:'CLÔTURÉE'},
    ];

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
    let navigation_extra : NavigationExtras = {
      queryParams : {
        data : this.dt ,

      }
    }
  }
  async page_three(){
    
    let data_rtrn =new Array<any>() ;
    let data_rtrn2 = [];
    if(this.data_from_db){
      for(var i = 0 ; i < this.data_from_db.length ; i++) {
        if(this.data_from_db[i].available_stock != this.data_cmp[i].available_stock || this.data_from_db[i].placement != this.data_cmp[i].placement) {
          data_rtrn.push(this.data_from_db[i].product_id)
        }
      }
    }
    let navigation_extra : NavigationExtras = {
      queryParams : {
        data : this.dt ,
        data_for_three :JSON.stringify( data_rtrn),
        edit : this.edit
      }
    }

    let data_for_nav = navigation_extra.queryParams;
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
                console.log('Confirm Cancel: blah');
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

}
