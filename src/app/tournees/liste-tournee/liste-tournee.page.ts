import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { i_t_tournee } from 'src/app/model/data/i_t_tournee.model';
import { Storage } from '@ionic/storage' ;
@Component({
  selector: 'app-liste-tournee',
  templateUrl: './liste-tournee.page.html',
  styleUrls: ['./liste-tournee.page.scss'],
  styles: [`
        
    `
    ]
})
export class ListeTourneePage implements OnInit {

  cols: { field: string; header: string; display : string}[];
  data : i_t_tournee [] ;
  selected : any[]

  constructor( private dbm : Database_manager, private router : Router, private storage : Storage) { }

  ngOnInit() {
    this.cols = [
      { field: 'id' , header: 'id', display : 'none' },
      { field: 'name' , header: 'Nom' , display: 'table-cell'},
      { field: 'state' , header: 'Etat', display: 'table-cell' },
      { field: 'start_date' , header: 'start_date' , display: 'none'},
      { field: 'end_date' , header: 'start_date', display: 'none' },
    ];
  }

  ionViewWillEnter(){
    this.dbm.select_basic_data("i_t_tournee").then( (data) => this.data = data) ;
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

}
