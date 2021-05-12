import { Component, OnInit } from '@angular/core';
import { visit_sheet } from '../model/data/visit_sheet.model';
import { Database_manager } from '../model/DAO/database_manager.model';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage'
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-fiche-visite',
  templateUrl: './fiche-visite.page.html',
  styleUrls: ['./fiche-visite.page.scss'],
  
})


export class FicheVisitePage implements OnInit {

  data_fv : any = [] ;
  itemes: MenuItem[];
  col_fv : { field: string; header: string; display : string} [];

  constructor(private storage : Storage, private activated_route : ActivatedRoute, private dbm : Database_manager, private router : Router) { }

  ionViewWillEnter(){
    console.log("ato");
    this.activated_route.queryParams.subscribe((data : any )=>{
      this.data_fv = [] ;
      this.dbm.select_res_user_active()
          .then((user)=>{
            this.dbm.get_all_fiche_visite_by_id_tournee(data.id_tournee,user.id)
              .then((data)=>{      
                console.log(data);          
                this.data_fv = data ;
              })
              .catch(e => alert(e.message));
          })
          .catch(e => alert(e.message));
    })
  }

  ngOnInit() {
	   this.itemes = [
      {label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
    ];
    this.col_fv = [
      { field: 'visit_sheet_id' , header: 'id', display : 'table-cell' },
      { field: 'user_id' , header: 'Commercial', display : 'table-cell' },
      { field: 'partner_id' , header: 'Point de vente' , display: 'table-cell'},
      { field: 'visit_sheet_begin_date_time' , header: 'Debut de visite', display: 'table-cell' },
      { field: 'visit_sheet_end_date_time' , header: 'Fin de visite', display: 'table-cell' },
      { field: 'provider_longitude' , header: 'Longitude', display: 'none' },
      { field: 'provider_latitude' , header: 'Latitude', display: 'none' },
      { field: 'state' , header: 'Statut', display : 'table-cell' },

      /*
        { field: 'tournee_begin' , header: 'Debut de visite', display: 'table-cell' },
        { field: 'tournee_end' , header: 'Fin de visite', display: 'table-cell' },
      */
    ] ;
    this.activated_route.queryParams.subscribe(data => {
      this.data_fv = [] ;
      if(data['id_tournee'] == undefined) {
        this.dbm.get_all_fiche_visite().then(data => {
          this.data_fv = data ;
        });
      }
      else {
        this.dbm.select_res_user_active()
          .then((user)=>{
            this.dbm.get_all_fiche_visite_by_id_tournee(data.id_tournee,user.id)
              .then((data)=>{                
                this.data_fv = data ;
              })
              .catch(e => alert(e.message));
          })
          .catch(e => alert(e.message));
      }
    }) ;
  }

  open_nouveau_fiche_visite() {
    this.router.navigate(['new-fiche-visite']) ;
  }

  onRowClicked(rowData) {
    let navigation_extra : NavigationExtras = {
      queryParams : {
        data : JSON.stringify(rowData)
      }
    }
    let data_nav = {
      data : JSON.stringify(rowData)
    }
    this.router.navigate(['page-one',data_nav]);
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
