import { Component, OnInit } from '@angular/core';
import { visit_sheet } from '../model/data/visit_sheet.model';
import { Database_manager } from '../model/DAO/database_manager.model';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-fiche-visite',
  templateUrl: './fiche-visite.page.html',
  styleUrls: ['./fiche-visite.page.scss'],
})
export class FicheVisitePage implements OnInit {

  data_fv : any = [] ;
  col_fv : { field: string; header: string; display : string} [];
  login : string = "" ;
  id : number = 0

  constructor(private dbm : Database_manager, private router : Router) { }

  ionViewWillEnter() {
    this.dbm.get_all_fiche_visite().then(data => {
      this.data_fv = data ;
    });
  }

  ngOnInit() {
    this.dbm.select_res_user_active().then(async data => {
      this.login = data.login ;
      this.id = data.id
    }) ;

    this.col_fv = [
      { field: 'visit_sheet_id' , header: '', display : 'none' },
      { field: 'user_id' , header: 'Commercial', display : 'table-cell' },
      { field: 'partner_id' , header: 'Point de vente' , display: 'table-cell'},
      { field: 'begin_datetime' , header: 'Debut de visite', display: 'table-cell' },
      { field: 'end_datetime' , header: 'Fin de visite', display : 'table-cell' },
      { field: 'state' , header: 'Statut', display : 'table-cell' },
    ] ;
    
  }

  open_nouveau_fiche_visite() {
    this.router.navigate(['new-fiche-visite']) ;
  }

  onRowClicked(rowData){
    let extra : NavigationExtras = {
      queryParams : {
        visit_sheet_id : rowData.visit_sheet_id ,
        res_partner_name : rowData.partner_id
      }
    }
    this.router.navigate(['page-one'], extra) ;
  }

}
