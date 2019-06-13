import { Component, OnInit } from '@angular/core';
import { visit_sheet } from '../model/data/visit_sheet.model';
import { Database_manager } from '../model/DAO/database_manager.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiche-visite',
  templateUrl: './fiche-visite.page.html',
  styleUrls: ['./fiche-visite.page.scss'],
})
export class FicheVisitePage implements OnInit {

  data_fv : any = [] ;
  col_fv : { field: string; header: string; display : string} [];

  constructor(private dbm : Database_manager, private router : Router) { }

  ngOnInit() {
    this.col_fv = [
      { field: 'user_id' , header: 'Commercial', display : 'table-cell' },
      { field: 'partner_id' , header: 'Point de vente' , display: 'table-cell'},
      { field: 'begin_datetime' , header: 'Debut de visite', display: 'table-cell' },
      { field: 'end_datetime' , header: 'Fin de visite', display : 'table-cell' },
      { field: 'state' , header: 'Statut', display : 'table-cell' },
    ] ;
    this.dbm.get_all_fiche_visite().then(data => {
      this.data_fv = data ;
    });
  }

  open_nouveau_fiche_visite() {
    this.router.navigate(['new-fiche-visite']) ;
  }

  onRowClicked(rowData){
    this.router.navigate(['page-one']) ; 
  }

}
