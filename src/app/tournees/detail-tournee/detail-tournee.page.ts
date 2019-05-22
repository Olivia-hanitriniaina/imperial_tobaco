import { Component, OnInit } from '@angular/core';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { ActivatedRoute } from '@angular/router';
import { tournees_sc1 } from 'src/app/model/screen/tournnees.screen1';
import { DialogService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-detail-tournee',
  templateUrl: './detail-tournee.page.html',
  styleUrls: ['./detail-tournee.page.scss'],
  styles : 
  [ `
      .id : {
        display : none ;
      };
      .res_partner_id : {
        display : none ;
      };
  `]
})
export class DetailTourneePage implements OnInit {

  data_pv : Array<tournees_sc1> = [] ;
  data_pvs : Array<tournees_sc1> = [] ;
  data_p : Array<tournees_sc1> = [] ;
  cols_p : { field: string; header: string; display : string} [];
  cols_pv : { field: string; header: string; display : string} [];
  cols_pvs : { field: string; header: string; display : string} [];
  name : string = "" ;
  items: { id: number; label: string; } [];
  itemsActions: { id: number; label: string; } [];
  display : boolean = false ;
  display2 : boolean = false ;
  clicked : any ;
  selected : Array<tournees_sc1> = [];

  constructor(private dbm : Database_manager, private router : ActivatedRoute) { 

  }

  ngOnInit() {
    this.cols_pv = [
      { field: 'res_partner_id' , header: 'res_partner_id', display : 'none' },
      { field: 'res_partner_name' , header: 'Nom' , display: 'table-cell'},
      { field: 'visite' , header: 'Visité', display: 'table-cell' },
      { field: 'id' , header: 'id', display : 'none' },
      { field: 'name' , header: 'name', display : 'none' },
      { field: 'start_date' , header: 'start_date', display : 'none' },
      { field: 'end_date' , header: 'end_date', display : 'none' }
    ] ;

    this.cols_pvs = [
     
      { field: 'res_partner_id' , header: 'res_partner_id', display : 'none' },
      { field: 'res_partner_name' , header: 'Nom' , display: 'table-cell'},
      { field: 'visite' , header: 'Visité', display: 'table-cell' },
      { field: 'id' , header: 'id', display : 'none' },
      { field: 'name' , header: 'name', display : 'none' },
      { field: 'start_date' , header: 'start_date', display : 'none' },
      { field: 'end_date' , header: 'end_date', display : 'none' }
    ]

    this.cols_p = [
     
      { field: 'res_partner_id' , header: 'res_partner_id', display : 'none' },
      { field: 'res_partner_name' , header: 'Nom' , display: 'table-cell'},
      { field: 'visite' , header: 'Visité', display: 'table-cell' },
      { field: 'id' , header: 'id', display : 'none' },
      { field: 'name' , header: 'name', display : 'none' },
      { field: 'start_date' , header: 'start_date', display : 'none' },
      { field: 'end_date' , header: 'end_date', display : 'none' }
    ]

    this.items = [
      {id : 1 , label:'NOUVEAU'},
      {id : 2 , label:'DEMARRER'},
      {id : 3 , label:'CLOTURER'},
    ];

    this.itemsActions = [
      {id : 1 , label:'DEMARRER LA TOURNÉE'},
      {id : 2 , label:'CLOTURER LA TOURNÉE'},
    ];

  }

  ionViewWillEnter() {
    this.dbm.get_tournee_by_user().then(data => {
      this.data_pv = data ;
      this.data_pvs = data ;
      this.data_p = data ;
      console.log('this.data_pv \n' + JSON.stringify(this.data_pv) ) ;
    });

    this.router.queryParams.subscribe(params => {
      this.name = params["name"] ;
    });
  }

  onRowClicked(rowData){
    this.display = true ;
  }

  itemsActionsChange(event)  {
    this.display2 = true ;
  
  }

  onRowSelect(event) {
    console.log(JSON.stringify(this.selected))
  }

  onRowUnselect(event) {
    console.log(JSON.stringify(this.selected))
  }

  demarrer_tournee () {
    /*this.itemsActionsChange().then(data => {
      console.log(data) ;
      this.items = this.items.filter(function (item) {
        return item.id > data.id ;
      }) ;
    this.display2 = false ;
    }) */
   
  }

  valider_tournee(){
    console.log(this.selected) ;
    this.display2 = false ;
  }

  deleteWithButton(rowData) {
    this.selected = this.selected.filter(function (item) {
      return item.res_partner_name != rowData.res_partner_name ;
    }) ;
  }

  addWithButton(rowData) {
    this.selected.push(rowData) ;
  }

}
