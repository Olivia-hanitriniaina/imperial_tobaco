import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.page.html',
  styleUrls: ['./page-two.page.scss'],
})

export class PageTwoPage implements OnInit {
  items: { id: number; label: string; } [];
  cols: any[];
  data_from_db : any ;
  data_from_route : any ;
  edit : boolean = false ;
  dt : any ;

  constructor(private router : Router, private activatedRoute : ActivatedRoute, private dbm : Database_manager, private storage : Storage) { }

  ionViewWillEnter() {
    
  }

  ngOnInit() {
    
    this.activatedRoute.queryParams.subscribe(data => {
      this.dt = data['data'] ;
      this.data_from_route = JSON.parse(data['data']) ;
      this.dbm.get_stock_visit_sheet_by_id_p2 (this.data_from_route.visit_sheet_id,this.data_from_route.res_partner_id).then(data => {
        console.log("data_farany",JSON.stringify(data));
        this.data_from_db = data ;
      }) ;
    }) ;

	this.items = [
      {id : 1 , label:'NOUVEAU'},
      {id : 2 , label:'OUVERTE'},
      {id : 3 , label:'CLÔTURÉE'},
    ];


    this.cols = [ 
        { field: 'product_id', header: 'product_id' ,display : 'none', text_align : "left"},
        { field: 'manufacturer_name', header: 'Fabricant' ,display : 'table-cell', text_align : "left"},
        { field: 'product_name', header: 'Produit' ,display : 'table-cell', text_align : "left"},
        { field: 'last_four_visit_avg', header: 'Stock initial moyen des 4 dernières visites' ,display : 'table-cell', text_align : "right"},
        { field: 'available_stock', header: 'Relevé stock initial' ,display : 'table-cell', text_align : "right"},
        { field: 'last_visit_stock', header: 'Stock initial dernière visite' ,display : 'table-cell', text_align : "right"},
        { field: 'last_placement', header: 'Placement dernière visite' , display : 'table-cell', text_align : "right"},
        { field: 'placement', header: 'Placement' , display : 'table-cell', text_align : "right"}
    ];
  }

  enable_edit(){
    if(this.edit == false) {
      this.edit = true ;
    }
    else {
      this.edit = false
    }
  }

  page_one(){
    this.router.navigate(['page-one']) ;
  }

  page_three(){
    console.log('data_from_db ==>' , JSON.stringify(this.data_from_db)) ;
    let navigation_extra : NavigationExtras = {
      queryParams : {
        data : this.dt
      }
    }
    this.router.navigate(['page-three'], navigation_extra) ;
  }

  open_menu() {
    this.storage.set("last" , "tournees") ;
    this.router.navigate(['menu']) ;
  }

}
