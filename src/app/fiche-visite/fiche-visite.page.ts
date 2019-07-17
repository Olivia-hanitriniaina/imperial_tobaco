import { Component, OnInit } from '@angular/core';
import { visit_sheet } from '../model/data/visit_sheet.model';
import { Database_manager } from '../model/DAO/database_manager.model';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche-visite',
  templateUrl: './fiche-visite.page.html',
  styleUrls: ['./fiche-visite.page.scss'],
  
})


export class FicheVisitePage implements OnInit {

  data_fv : any = [] ;
  col_fv : { field: string; header: string; display : string} [];

  constructor(private activated_route : ActivatedRoute, private dbm : Database_manager, private router : Router) { }

  ngOnInit() {
    this.col_fv = [
      { field: 'visit_sheet_id' , header: '', display : 'none' },
      { field: 'user_id' , header: 'Commercial', display : 'table-cell' },
      { field: 'partner_id' , header: 'Point de vente' , display: 'table-cell'},
      { field: 'visit_sheet_begin_date_time' , header: '', display: 'none' },
      { field: 'visit_sheet_end_date_time' , header: '', display: 'none' },
      { field: 'tournee_begin' , header: 'Debut de visite', display: 'table-cell' },
      { field: 'tournee_end' , header: 'Fin de visite', display: 'table-cell' },
      { field: 'provider_longitude' , header: 'Longitude', display: 'none' },
      { field: 'provider_latitude' , header: 'Latitude', display: 'none' },
      { field: 'state' , header: 'Statut', display : 'table-cell' },
    ] ;
    this.activated_route.queryParams.subscribe(data => {
      
      if(data['id_tournee'] == undefined) {
        this.dbm.get_all_fiche_visite().then(data => {
          console.log("get_all_fiche_visite => " + data)
          this.data_fv = data ;
        });
      }
      else {
        this.dbm.get_all_fiche_visite_by_id_tournee(data['id_tournee']).then(data => {
          console.log("get_all_fiche_visite_by_id_tournee => " + data)
          this.data_fv = data ;
        });
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
    this.router.navigate(['page-one'], navigation_extra) ;
  }

  open_menu

}