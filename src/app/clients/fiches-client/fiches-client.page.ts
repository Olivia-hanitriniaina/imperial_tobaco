import { Component, OnInit } from '@angular/core';
import { Database_manager } from '../../model/DAO/database_manager.model';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage'
import { HttpClient } from '@angular/common/http';
import { ClientInterface } from '../../model/screen/clients.screen';
import { Data } from 'src/app/model/data/data.model';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-fiches-client',
  templateUrl: './fiches-client.page.html',
  styleUrls: ['./fiches-client.page.scss'],
  styles : 
  [ `
      .id : {
        display : none ;
      };
  `]
})
export class FichesClientPage implements OnInit {
  itemes: MenuItem[];
  cols: { field: string; header: string; display : string}[];
  data : ClientInterface [] ;
  selected : ClientInterface[]

  constructor(private data_router : Data , private dbm : Database_manager,private router : Router, private storage : Storage, private http : HttpClient) { }

  ngOnInit() {

    this.itemes = [
      {label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
    ];

    this.cols = [
      { field: 'id' , header: 'id', display : 'none' },
      { field: 'name' , header: 'Code client' , display: 'table-cell'},
      { field: 'region_id' , header: 'Région', display: 'table-cell' },
      { field: 'agence_id' , header: 'Agence', display: 'table-cell' },
      { field: 'zone_id' , header: 'Zone', display: 'table-cell' },
      { field: 'secteur_id' , header: 'Secteur', display: 'table-cell' },
      { field: 'ville_id' , header: 'Ville', display: 'table-cell' },
      { field: 'nom_agent_commercial_id' , header: 'Agents Commerciaux', display: 'table-cell' },
      { field: 'nom_pos' , header: 'Nom du POS', display: 'table-cell' } ,
      { field: 'nom_gerant' , header: 'Nom du Gérant', display: 'table-cell' },
      { field: 'adresse' , header: 'Adresse', display: 'table-cell' },
      { field: 'state_id' , header: 'Etat', display: 'table-cell' }
      
    ];
    
  }

  ionViewWillEnter(){
    this.dbm.get_res_partner().then( (data : ClientInterface []) => this.data = data) ;
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

  onRowClicked(rowData : ClientInterface){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "id": rowData.id
      }
    };
    this.data_router.storage = rowData.id ;
    this.router.navigate(['detail-fiche-client'], navigationExtras) ;
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
