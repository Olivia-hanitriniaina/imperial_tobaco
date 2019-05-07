import { Component, OnInit } from '@angular/core';
import { Database_manager } from '../../model/DAO/database_manager.model';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage'
import { HttpClient } from '@angular/common/http';
import { ClientInterface } from '../../model/screen/clients.screen';

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
  
  cols: { field: string; header: string; display : string}[];
  data : ClientInterface [] ;
  selected : ClientInterface[]

  constructor(private dbm : Database_manager,private router : Router, private storage : Storage, private http : HttpClient) { }

  ngOnInit() {
    this.cols = [
      { field: 'id' , header: 'id', display : 'none' },
      { field: 'name' , header: 'Nom' , display: 'table-cell'},
      { field: 'region_id' , header: 'Region', display: 'table-cell' },
      { field: 'agence_id' , header: 'Agence', display: 'table-cell' },
      { field: 'zone_id' , header: 'Zone', display: 'table-cell' },
      { field: 'secteur_id' , header: 'Secteur', display: 'table-cell' },
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
    this.storage.set("data_for_detail", rowData.id) ;
    this.router.navigate(['detail-fiche-client']) ;
  }
}
