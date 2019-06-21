import { Component, OnInit } from '@angular/core';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { tournees_sc1 } from 'src/app/model/screen/tournnees.screen1';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FormGroup, FormBuilder } from '@angular/forms';

interface safidy {
  name: string;
  code: string;
}

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
  data_pn : Array<tournees_sc1> = [] ;
  cols_p : { field: string; header: string; display : string} [];
  cols_pv : { field: string; header: string; display : string} [];
  cols_pvs : { field: string; header: string; display : string} [];
  cols_pn : { field: string; header: string; display : string} [];
  name : string = "" ;
  items: { id: number; label: string; } [];
  itemsActions: { id: number; label: string; } [];
  display : boolean = false ;
  display2 : boolean = false ;
  display3 : boolean = false ;
  clicked : any ;
  selected : Array<tournees_sc1> = [];
  screen : any = {};
  from_liste : any ;
  edit : boolean = false ;
  display4: boolean = false;
  tournees_fg : FormGroup ;
  visites: safidy[] ;
  id_tournee : number ;

  constructor(private fb : FormBuilder,private geolocation : Geolocation, private dbm : Database_manager, private router : ActivatedRoute, private route : Router) { 

  }

  ngOnInit() {
    this.visites = [
      {name : "oui", code : "oui"} ,
      {name : "non", code : "non"} ,
    ]
    this.cols_pv = [
      { field: 'res_partner_id' , header: 'res_partner_id', display : 'none' },
      { field: 'res_partner_name' , header: 'Nom' , display: 'table-cell'},
      { field: 'visit' , header: 'Visité', display: 'table-cell' },
      { field: 'id' , header: 'id', display : 'none' },
      { field: 'name' , header: 'name', display : 'none' },
      { field: 'start_date' , header: 'start_date', display : 'none' },
      { field: 'end_date' , header: 'end_date', display : 'none' },
      { field: 'sequence' , header: '', display : 'none' }
    ] ;

    this.cols_pvs = [
      { field: 'res_partner_id' , header: 'res_partner_id', display : 'none' },
      { field: 'res_partner_name' , header: 'Nom' , display: 'table-cell'},
      { field: 'visit' , header: 'Visité', display: 'table-cell' },
      { field: 'id' , header: 'id', display : 'none' },
      { field: 'name' , header: 'name', display : 'none' },
      { field: 'start_date' , header: 'start_date', display : 'none' },
      { field: 'end_date' , header: 'end_date', display : 'none' },
      { field: 'sequence' , header: '', display : 'none' }
    ]

    this.cols_p = [
      { field: 'res_partner_id' , header: 'res_partner_id', display : 'none' },
      { field: 'res_partner_name' , header: 'Nom' , display: 'table-cell'},
      { field: 'visit' , header: 'Visité', display: 'table-cell' },
      { field: 'id' , header: 'id', display : 'none' },
      { field: 'name' , header: 'name', display : 'none' },
      { field: 'start_date' , header: 'start_date', display : 'none' },
      { field: 'end_date' , header: 'end_date', display : 'none' },
      { field: 'sequence' , header: '', display : 'none' }
    ]

    this.cols_pn = [
      { field: 'res_partner_id' , header: 'res_partner_id', display : 'none' },
      { field: 'res_partner_name' , header: 'Nom' , display: 'table-cell'},
      { field: 'visit' , header: 'Visité', display: 'none' },
      { field: 'id' , header: 'id', display : 'none' },
      { field: 'name' , header: 'name', display : 'none' },
      { field: 'start_date' , header: 'start_date', display : 'none' },
      { field: 'end_date' , header: 'end_date', display : 'none' },
      { field: 'sequence' , header: '', display : 'none' }
    ] ;

    this.tournees_fg = this.fb.group({
      sequence : [''],
      name : [''],
      visite : ['']
    })
  }

  checkstatus(status : string, k : number) {
      switch (status) {
        case "Nouveau" : {
          this.items = [
            {id : 1 , label:'NOUVEAU'},
            {id : 2 , label:'DÉMARRÉ'},
            {id : 3 , label:'CLÔTURÉ'},
          ];
      
          this.itemsActions = [
            {id : 1 , label:'DÉMARRÉ LA TOURNÉE'},
            {id : 2 , label:'CLÔTURÉ LA TOURNÉE'},
          ];
          break ;
        }
        
        case "Démarré" : {
          this.items = [
            {id : 2 , label:'DÉMARRÉ'},
            {id : 3 , label:'CLÔTURÉ'},
          ];
      
          this.itemsActions = [
            {id : 2 , label:'CLÔTURÉ LA TOURNÉE'},
          ];

          if(k != 0) {
            this.display2 = true ;

          }
          break ;
        }

        case "Clôturé" : {
          this.items = [
            {id : 3 , label:'CLOTURER'},
          ];
      
          this.itemsActions = [
            {id : 0 , label:''},
          ];
          if(k != 0) {
            this.data_pn = this.data_p.filter(function(item){
              return item.visite == "non" ;
            }) ;
            this.display3 = true ;
          }
          break ;
        }
        default : {
        }
      }
  }

  ionViewWillEnter() {

    this.router.queryParams.subscribe(params => {
      
      this.checkstatus(params['status'], 0) ;
      this.from_liste = params ;
      this.name = params["name"] ;
      this.id_tournee = params['id'] ;

      this.dbm.get_tournee_by_user("i_t_pos_additional", this.id_tournee).then( (data : Array<tournees_sc1>) => {
        this.data_pvs = data ;
        this.dbm.get_tournee_by_user("i_t_pos_initial", this.id_tournee).then((data : Array<tournees_sc1>) => {
          this.data_pv = data ;
          this.data_p = this.data_pvs.concat(this.data_pv) ;
        }) ; 
      }); 
    });

  }

  onRowClicked(rowData){
    this.screen = rowData ;

    if(this.edit == false) {
      this.display = true ;
    }
    else {
      this.display4 = true
    }
  }

  itemsActionsChange(event)  {
    let named = event.label.split(' ') ;
    named = named[0].charAt(0).toUpperCase() + named[0].slice(1).toLowerCase() ;
    this.checkstatus(named, 1) ;
  }

  valider_tournee(){
    this.display2 = false ;
    this.router.queryParams.subscribe(params => {
      this.dbm.update_tournee_by_id(params['id'], "Démarré") ;
    });
  }

  abort_tournee() {
    if(this.edit == false) {
      this.route.navigate(['liste-tournee']) ;
    }
    else {
      this.edit = false ;
      this.ionViewWillEnter() ;
    }
  }


  cloturer_tournee(){
    this.display3 = false ;
    this.router.queryParams.subscribe(params => {
      this.dbm.update_tournee_by_id(params['id'], "Clôturé") ;
    }) ;
  }

  getMyLocation(){
    var options = {
      enableHighAccuracy: true, timeout: 60000, maximumAge: 0
    };
    console.log("mande") ;
    this.geolocation.getCurrentPosition(options).then((resp) => {
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  edit_tournee() {
    this.edit = true ;
  }

  save_tournee() {

  }

  visite_change(visite : string){
    for(var i = 0; i < this.data_p.length ; i++ ) {
      if(this.data_p[i].res_partner_name == this.screen.res_partner_name) {
        this.data_p[i].visite = visite ;
        break;
      }
    }
  //  this.screen.visite = visite ;
  }

  go_fiche_visite() {
    let navigation_extra : NavigationExtras = {
      queryParams : {
        id_tournee : this.id_tournee 
      }
    }
    this.route.navigate(['fiche-visite'], navigation_extra) ;
  }

}


      /*var androany = new Date () ;
      var dd = String(androany.getDate()).padStart(2, '0');
      var mm = String(androany.getMonth() + 1).padStart(2, '0');
      var yyyy = androany.getFullYear();
      var hh = androany.getHours() ;
      var MM = androany.getMinutes() ;
      var ss = androany.getSeconds() ;
      var daty_andoany_string = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + MM + ':' + ss; 
  
      androany = new Date (daty_andoany_string); 
      
      this.data_pv = data.filter(function (item) {
        return new Date (item.start_date) <= androany ;
      }) ;
      this.data_pvs = data.filter(function(item){
        return new Date (item.start_date) > androany ;
      }) ;
      this.data_p = data ;
    }); 

    this.router.queryParams.subscribe(params => {
      this.name = params["name"] ;*/

        /*deleteWithButton(rowData) {
    for(var i = 0; i < this.data_p.length ; i++ ) {
      if(this.data_p[i].res_partner_name == rowData.res_partner_name) {
        this.data_p[i].visite = 'non' ;
        this.dbm.update_visite_res_patrner_by_id(rowData.res_partner_id, "non") ;
        break;
      }
    }
    rowData.visite = "non" ;
  }

  addWithButton(rowData) {
    for(var i = 0; i < this.data_p.length ; i++ ) {
      if(this.data_p[i].res_partner_name == rowData.res_partner_name) {
        this.data_p[i].visite = 'oui' ;
        this.dbm.update_visite_res_patrner_by_id(rowData.res_partner_id, "oui") ;
        break;
      }
    }
    rowData.visite = "oui" ;
  }*/
