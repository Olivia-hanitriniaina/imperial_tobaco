import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { i_t_tournee } from 'src/app/model/data/i_t_tournee.model';
import { Storage } from '@ionic/storage' ;
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-liste-tournee',
  templateUrl: './liste-tournee.page.html',
  styleUrls: ['./liste-tournee.page.scss'],
  styles: [`
        
    `
    ]
})
export class ListeTourneePage implements OnInit {
  itemes: MenuItem[];
  cols: { field: string; header: string; display : string}[];
  data : i_t_tournee [] ;
  selected : any[];
  user_id : number ;

  constructor( private dbm : Database_manager, private router : Router, private storage : Storage) { }

  ngOnInit() {
    this.itemes = [
      {label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
    ];

    this.cols = [
      { field: 'id' , header: 'id', display : 'none' },
      { field: 'name' , header: 'Nom' , display: 'table-cell'},
      { field: 'state' , header: 'Etat', display: 'table-cell' },
      { field: 'start_date' , header: 'start_date' , display: 'none'},
      { field: 'end_date' , header: 'start_date', display: 'none' },
    ];
    this.dbm.select_res_user_active().then( data => {
      this.user_id = data.id
      this.dbm.get_all_tournees_by_user(this.user_id)
        .then( (data :any) => {
          if(data){
            this.data = data
          }
        })
        .catch(e => alert(e.message)) ;
    }) ;
  }

  ionViewWillEnter(){
        

    
  }

  open_menu(){
    this.storage.set("last" , "fiches-client") ;
    this.router.navigate(['menu']) ;
  }

  open_nouveau_client(){
    this.router.navigate(['new-client']) ;  
  }

  onRowSelect(event) {
    console.log(JSON.stringify(this.selected))
  }

  onRowUnselect(event) {
    console.log(JSON.stringify(this.selected))
  }

  onRowClicked(rowData){
   let navigationExtras: NavigationExtras = {
      queryParams: {
        "id": rowData.id ,
        "name" : rowData.name ,
        "status" : rowData.state ,
        "date_debut" : rowData.start_date,
        "date_fin" : rowData.end_date
      }
    };
    //this.data_router.storage = rowData.id ;
    this.router.navigate(['detail-tournee'], navigationExtras) ; 
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
