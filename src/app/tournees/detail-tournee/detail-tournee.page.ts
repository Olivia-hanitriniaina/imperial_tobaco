import { Component, OnInit } from '@angular/core';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-tournee',
  templateUrl: './detail-tournee.page.html',
  styleUrls: ['./detail-tournee.page.scss'],
})
export class DetailTourneePage implements OnInit {

  data_pv : Array<any> = [] ;
  data_pvs : Array<any> = [] ;
  cols_pv : { field: string; header: string; display : string} [];
  cols_pvs : { field: string; header: string; display : string} [];
  name : string = "" ;
  items: { id: number; label: string; }[];
  itemsActions: { id: number; label: string; }[];
  display : boolean = false ;
  display2 : boolean = false ;

  constructor(private dbm : Database_manager, private router : ActivatedRoute) { }

  ngOnInit() {
    this.cols_pv = [
      { field: 'id' , header: 'id', display : 'none' },
      { field: 'name' , header: 'Nom' , display: 'table-cell'},
      { field: 'state' , header: 'Etat', display: 'table-cell' },
    ] ;

    this.cols_pvs = [
      { field: 'id' , header: 'id', display : 'none' },
      { field: 'name' , header: 'Nom' , display: 'table-cell'},
      { field: 'state' , header: 'Etat', display: 'table-cell' },
    ]

    this.items = [
      {id : 1 , label:'NOUVEAU'},
      {id : 2 , label:'DEMARRER'},
      {id : 3 , label:'CLOTURER'},
    ];

    this.itemsActions = [
      {id : 1 , label:'DEMARRER LA TOURNEES'},
    ];

  }


  ionViewWillEnter() {
    this.router.queryParams.subscribe(params => {
      this.name = params["name"] ;
      this.dbm.select_basic_data_with_id("i_t_tournee", params["id"]).then(data => {
        this.data_pv.push(data)  ;
        this.data_pvs.push(data) ;
      })
    });
  }

  onRowClicked(rowData){
    this.display = true ;
  }

  itemsActionsChange(event){
    this.display2 = true ;
  }

}
