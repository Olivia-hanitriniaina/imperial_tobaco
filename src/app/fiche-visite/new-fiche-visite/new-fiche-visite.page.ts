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
  commercial : any ;
  partner_id : Array<any> = [] ;

  constructor(private messageService : MessageService, private geolocation : Geolocation,private router : Router, private fb : FormBuilder, private dbm : Database_manager) { }

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
      pos_initial : ['']
    }) ;

    this.dbm.get_res_partner_data_for_visite().then(data => {
      this.partner_id = data ;
    }) ;

    this.dbm.select_res_user_active().then(data => {
      this.commercial = data ;
    }) ;
  }

  demarrer_visite() {
    if(this.fg.invalid) {
      this.messageService.add({severity:'error', summary: 'Les champs suivants sont incorrects : ', detail : "Point de vente", key:'invalid'});
    }

    else { 
      console.log("mande");
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
    console.log("mande") ;
    this.geolocation.getCurrentPosition(options).then((resp) => {

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
