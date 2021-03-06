import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-new-fiche-visite',
  templateUrl: './new-fiche-visite.page.html',
  styleUrls: ['./new-fiche-visite.page.scss'],
})
export class NewFicheVisitePage implements OnInit {
  items: { id: number; label: string; } [];
  itemsActions: { id: number; label: string; } [];
  fg : FormGroup ;
  login : string ;
  id : number ;
  partner_id : Array<any> = [] ;
  location : any ;

  constructor(private messageService : MessageService, private geolocation : Geolocation,private router : Router, private fb : FormBuilder, private dbm : Database_manager) { }

  ionViewWillEnter(){
    this.dbm.get_res_partner_data_for_visite().then(async data => {
      this.partner_id = data ;
    }) ;
    this.dbm.select_res_user_active().then(async data => {
      this.login = data.login ;
      this.id = data.id
    }) ;
  }

  ngOnInit() {
    this.items = [
      {id : 1 , label:'NOUVEAU'},
      {id : 2 , label:'OUVERTE'},
      {id : 3 , label:'CLÔTURÉE'},
    ];

    this.itemsActions = [
      {id : 1 , label:''},
    ];
    this.fg = this.fb.group({
      partner_id : ['', Validators.required] ,
      pos_initial : 0 ,
      provider_latitude : 0 ,
      provider_longitude : 0,
      region_id : "" ,
      secteur_id : "" ,
      agence_id : "" ,
      zone_id : ""
    }) ;


  }

  demarrer_visite() {
    if(this.fg.invalid) {
      this.messageService.add({severity:'error', summary: 'Les champs suivants sont incorrects : ', detail : "Point de vente", key:'invalid'});
    }

    else { 
      this.getMyLocation() ;
      console.log('value\n' + JSON.stringify(this.fg.value));
    }
  }

  abort_nouveau_fiche_visite() {
    this.router.navigate(['fiche-visite']) ;
  }

  save_nouveau_fiche_visite() {

  }

  getMyLocation(){
    var options = {
      enableHighAccuracy: true, timeout: 60000, maximumAge: 0
    };
    this.geolocation.getCurrentPosition(options).then((resp) => {

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
 