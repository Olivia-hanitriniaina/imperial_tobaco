import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Database_manager } from '../../model/DAO/database_manager.model';
import { Storage } from '@ionic/storage';
import { i_t_region } from '../../model/data/i_t_region.model';
import { i_t_activation_autorisee } from '../../model/data/i_t_activation_autorisee.model';
import { i_t_cible_activation } from '../../model/data/i_t_cible_activation.model';
import { i_t_cible_installation_presentoirs } from '../../model/data/i_t_cible_installation_presentoirs.model';
import { i_t_activite_pos } from '../../model/data/i_t_activite_pos.model';
import { i_t_agence } from '../../model/data/i_t_agence.model';
import { i_t_classification1 } from '../../model/data/i_t_classification1.model';
import { i_t_classification2 } from '../../model/data/i_t_classification2.model';
import { i_t_contrat } from '../../model/data/i_t_contrat.model';
import { i_t_cooperation_itg } from '../../model/data/i_t_cooperation_itg.model';
import { i_t_couverture_commerciale } from '../../model/data/i_t_couverture_commerciale.model';
import { i_t_emplacement } from   '../../model/data/i_t_emplacement.model';
import { i_t_enseigne_appartenance } from '../../model/data/i_t_enseigne_appartenance.model';
import { i_t_frequence_approvisionnement } from '../../model/data/i_t_frequence_approvisionnement.model';
import { i_t_frequence_visite } from '../../model/data/i_t_frequence_visite.model';
import { i_t_permanent_posm } from '../../model/data/i_t_permanent_posm.model';
import { i_t_preference_animateur } from '../../model/data/it_preference_animateur.model';
import { i_t_proximite } from '../../model/data/i_t_proximite.model';
import { i_t_secteur } from '../../model/data/i_t_secteur.model';
import { i_t_type_client } from '../../model/data/i_t_type_client.model';
import { i_t_type_quartier } from '../../model/data/i_t_type_quartier.model';
import { i_t_ville } from '../../model/data/i_t_ville.model';
import { i_t_zone } from '../../model/data/i_t_zone.model';
import { i_t_fournisseur_secondaire } from '../../model/data/i_t_fournisseur_secondaire.model';
import { i_t_fournisseur_principale } from '../../model/data/i_t_fournisseur_principale.model';
import { i_t_source_approvisionnement } from '../../model/data/i_t_source_approvisionnement.model';
import { res_users } from '../../model/data/res_users.model';
import { stringify } from 'querystring';
import { NEXT } from '@angular/core/src/render3/interfaces/view';
import { i_t_canal } from 'src/app/model/data/i_t_canal.model';
import { FullScreenImage } from '@ionic-native/full-screen-image/ngx';

export interface name_id {
  value : any ;
  display : string ;
}

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})



export class NewClientPage implements OnInit {
  itemes: MenuItem[];
  items : Array<MenuItem> ;
  itemsActions : Array<MenuItem> ;
  home : any ;
  base64Image : any ;
  fiche_client : FormGroup ;
  i_t_activation_autorisee: Array<i_t_activation_autorisee> = [] ;
  i_t_cible_activation: Array<i_t_cible_activation> = [] ;
  i_t_cible_installation_presentoirs: Array<i_t_cible_installation_presentoirs> = [] ;
  i_t_activite_pos: Array<i_t_activite_pos> = [] ;
  i_t_agence:Array<i_t_agence> = [] ;
  i_t_agence_filtered:Array<i_t_agence> = [] ;
  i_t_classification1: Array<i_t_classification1> = [] ;
  i_t_classification2: Array<i_t_classification2> = [] ;
  i_t_contrat: Array<i_t_contrat> = [] ;
  i_t_cooperation_itg: Array<i_t_cooperation_itg> = [] ;
  i_t_couverture_commerciale: Array<i_t_couverture_commerciale> = [] ;
  i_t_emplacement: Array<i_t_emplacement> = [] ;
  i_t_enseigne_appartenance: Array<i_t_enseigne_appartenance> = [] ;
  i_t_frequence_approvisionnement: Array<i_t_frequence_approvisionnement> = [] ;
  i_t_frequence_visite: Array<i_t_frequence_visite> = [] ;
  i_t_permanent_posm: Array<name_id> = [] ;
  i_t_preference_animateur: Array<i_t_preference_animateur> = [] ;
  i_t_proximite: Array<i_t_proximite> = [] ;
  i_t_secteur: Array<i_t_secteur> = [] ;
  i_t_type_client: Array<i_t_type_client> = [] ;
  i_t_type_quartier: Array<i_t_type_quartier> = [] ;
  i_t_ville: Array<i_t_ville> = [] ;
  i_t_zone: Array<i_t_zone> = [] ;
  i_t_fournisseur_secondaire: Array<name_id> = [] ;
  i_t_fournisseur_principale: Array<name_id> = [] ;
  i_t_region: Array<i_t_region> = [] ;
  i_t_source_approvisionnement : Array<i_t_source_approvisionnement> ;
  i_t_zone_filtered : Array<i_t_zone> = [] ;
  i_t_secteur_filtered : Array<i_t_secteur> = [] ;
  i_t_canal : Array<i_t_canal> = [] ;
  i_t_canal_filtered : Array<i_t_canal> = [] ;
  res_user : Array<name_id> ;
  users_same_secteur : Array<name_id> = [] ;

  signature : string ;
  invalid_fields = [] ;
  canal : string = "" ;
  id_contrat : number = 0 ;
  active_user : res_users ;
  active : number = 0 ;
  filePath : string ;
  window : any = window ;
  display : boolean = false ;
  max : number ;

  constructor(private fullScreenImage : FullScreenImage,  private storage : Storage,private messageService : MessageService, private toast : ToastController,private dbm : Database_manager,private form_builder : FormBuilder, private router : Router ,private camera: Camera, private geolocation: Geolocation, private alert : AlertController) { }

  ngOnInit() {

    this.itemes = [
      {label: 'D??connecter', icon: 'pi pi-fw pi-plus'}, 
    ];
    this.items = [
      {label:'PROSPECT'},
      {label:'VALID??E PAR SUPERVISEUR'},
      {label:'VALID??E PAR ADMINISTRATEUR'},
    ];
    this.itemsActions = [
      {label:'VALID??E PAR SUPERVISEUR'},
      {label:'VALID??E PAR ADMINISTRATEUR'},
    ];

    this.dbm.select_basic_data("i_t_region").then(data => {
      this.i_t_region = data
    }) ;

    this.dbm.select_basic_data("i_t_activation_autorisee").then(data => {
      this.i_t_activation_autorisee = data ;
    }) ;

    this.dbm.select_basic_data("i_t_cible_activation").then(data => {
      this.i_t_cible_activation = data ;
    }) ;

    this.dbm.select_basic_data("i_t_cible_installation_presentoirs").then(data => {
      this.i_t_cible_installation_presentoirs = data ;
    }) ;

    this.dbm.select_basic_data("i_t_activite_pos").then(data => {
      this.i_t_activite_pos = data ;
    }) ;

    this.dbm.select_basic_data("i_t_agence").then(data => {
      this.i_t_agence = data ;
    }) ;

    this.dbm.select_basic_data("i_t_classification1").then(data => {
      this.i_t_classification1 = data ;
    }) ;

    this.dbm.select_basic_data("i_t_classification2").then(data => {
      this.i_t_classification2 = data ;
    }) ;

    this.dbm.select_basic_data("i_t_contrat").then(data => {
      this.i_t_contrat = data ;
    }) ;

    this.dbm.select_basic_data("i_t_cooperation_itg").then(data => {
      this.i_t_cooperation_itg = data ;
    }) ;

    this.dbm.select_basic_data("i_t_couverture_commerciale").then(data => {
      this.i_t_couverture_commerciale = data ;
    }) ;

    this.dbm.select_basic_data("i_t_emplacement").then(data => {
      this.i_t_emplacement = data ;
    }) ;

    this.dbm.select_basic_data("i_t_enseigne_appartenance").then(data => {
      this.i_t_enseigne_appartenance = data ;
    }) ;

    this.dbm.select_basic_data("i_t_frequence_approvisionnement").then(data => {
      this.i_t_frequence_approvisionnement = data ;
    }) ;

    this.dbm.select_basic_data("i_t_frequence_visite").then(data => {
      this.i_t_frequence_visite = data ;
    }) ;

    this.dbm.select_data_with_table_name("i_t_permanent_posm").then(data => {
      this.i_t_permanent_posm = data ;
    }) ;

    this.dbm.select_data_res_users("res_users").then(data => {
      this.res_user = data ;
    }) ;

    this.dbm.select_basic_data("i_t_preference_animateur").then(data => {
      this.i_t_preference_animateur = data ;
    }) ;

    this.dbm.select_basic_data("i_t_proximite").then(data => {
      this.i_t_proximite = data ;
    }) ;

    this.dbm.select_basic_data("i_t_secteur").then(data => {
      this.i_t_secteur = data ;
    }) ;

    this.dbm.select_basic_data("i_t_type_client").then(data => {
      this.i_t_type_client = data ;
    }) ;

    this.dbm.select_basic_data("i_t_type_quartier").then(data => {
      this.i_t_type_quartier = data ;
    }) ;

    this.dbm.select_basic_data("i_t_ville").then(data => {
      this.i_t_ville = data ;
    }) ;

    this.dbm.select_basic_data("i_t_zone").then(data => {
      this.i_t_zone = data ;
    }) ;

    this.dbm.select_max_basic_data("res_partner").then(data => {
      this.max = data ;
    }) ;

    this.dbm.get_name_id_data("res_partner").then(data => {
      this.i_t_fournisseur_principale = data ;
      this.i_t_fournisseur_secondaire = data ;
    }) ;

    /*this.dbm.get_name_id_data("i_t_fournisseur_secondaire").then(data => {
      this.i_t_fournisseur_principale = data ;
      this.i_t_fournisseur_secondaire = data ;
    }) ; */

    this.dbm.select_basic_data("i_t_source_approvisionnement").then(data => {
      this.i_t_source_approvisionnement = data ;
    }) ;

    this.dbm.select_basic_data("i_t_canal").then(data => {
      this.i_t_canal = data ;
    }) ;

    

    this.dbm.select_res_user_active().then(data => {
      this.active_user = data ;
      this.signature = data.signature ;
    }) ;

    
   
    this.fiche_client = this.form_builder.group({
      name : [''] ,
      region_id : ['', Validators.required],
      agence_id : ['', Validators.required] ,
      zone_id : ['', Validators.required] ,
      secteur_id : [''] ,

      nom_pos : ['', Validators.required] ,
      nom_gerant : ['', Validators.required] ,
      adresse : ['', Validators.required] ,
      repere : ['', Validators.required] ,
      quartier : ['', Validators.required] ,
      ville_id : ['', Validators.required] ,
      numero_telephone1 : [''] ,
      numero_telephone2 : [''] ,
      numero_telephone3 : [''] ,

      emplacement_id : ['', Validators.required] ,
      proximite_id : ['', Validators.required] ,
      type_quartier_id : ['', Validators.required] ,

      latitude :  ['', Validators.required] ,
      longitude : ['', Validators.required] ,

      type_client_id : ['', Validators.required] ,
      activite_pos_id : ['', Validators.required] ,
      enseigne_appartenance_id : ['', Validators.required] ,
      classification1_id : ['', Validators.required] ,
      classification2_id : ['', Validators.required] ,

      couverture_commerciale_id : ['', Validators.required] ,
      frequence_visite_id : [''] ,

      user_id : ['', Validators.required] ,
      canal_id : ['', Validators.required] ,

      active : [''] ,
      photo : [''] ,

      cible_installation_presentoirs_id : ['', Validators.required] ,
      permanent_POSM_id : ['', Validators.required] ,

      contrat_id : ['', Validators.required] ,
      date_debut_contrat : ['', Validators.required] ,
      date_fin_contrat : ['', Validators.required] ,

      cooperation_itg_id : ['', Validators.required] ,
      activation_autorisee_id : ['', Validators.required] , 
      preference_animateur_id : ['', Validators.required] ,

      frequence_approvisionnement_id : ['', Validators.required] ,
      source_approvisionnement_id : ['', Validators.required] ,
      fournisseur_principal_id : ['', Validators.required] ,
      fournisseur_secondaire_id : ['', Validators.required] ,

      visite : [''] ,

      commentaire : [''] ,
   }) ;

   this.fiche_client.controls['active'].setValue(this.active) ;

  /* this.dbm.select_max_basic_data("i_t_contat").then(data => {
     console.log(data);
      this.fiche_client.controls['contrat_id'].setValue(data.max) ;
    }) ; */
  } 

  async takePicture(){
    let cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight : 70 ,
      targetWidth : 100
    };
    const imagePath : string = await this.camera.getPicture(cameraOptions);
    console.log(imagePath); //this.win.Ionic.WebView.convertFileSrc(imageSrc);
    return this.window.Ionic.WebView.convertFileSrc(imagePath);
  }

  async showImageFromCamera() {
    try {
      this.filePath = await this.takePicture();
    } catch(error) {
      console.log(error);
    }
  }

  getMyLocation(){
    var options = {
      enableHighAccuracy: true, timeout: 60000, maximumAge: 0
    };
    
    this.geolocation.getCurrentPosition(options).then((resp) => {

      this.fiche_client.get('longitude').setValue(resp.coords.longitude) ;
      this.fiche_client.get('latitude').setValue(resp.coords.latitude) ;

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  open_fiche_client(){
    this.router.navigate(['fiches-client']) ;
  }

  async make_alert(message){
    let x = await this.alert.create({
      message : message ,
      header : "test",
    }) ;
    x.present() ;
  }

  async make_toast(message){
    let x = await this.toast.create({
      message : message ,
      duration : 3000
    }) ;
    x.present() ;
  }

  save_new_client(){
    this.fiche_client.controls['contrat_id'].setValue(this.i_t_contrat[this.i_t_contrat.length - 1].id + 1) ;
    this.fiche_client.controls['user_id'].setValue(this.active_user.id) ;
    if(this.fiche_client.invalid) {
      let invalid = '' ;
      for (const name in this.fiche_client.controls) {
        if (this.fiche_client.controls[name].invalid) {
            let named = name.charAt(0).toUpperCase() + name.slice(1) ;
            named = named.replace(/_|(id)/gi, function( a ){ return ' '; }) ;
            invalid = '\n' + invalid + ' - ' + named + '\n' ;
        }
      }
      this.messageService.add({severity:'error', summary: 'Les champs suivants sont incorrects : ', detail : invalid, key:'invalid'});
    }
    

    else {
   
    this.fiche_client.controls['photo'].setValue(this.filePath) ;
    this.fiche_client.controls['name'].setValue("/") ;
    this.fiche_client.controls['visite'].setValue("Non") ;
    let q1 = "insert into res_partner " ;
    let q2 = "" ;
    let q3 = "" ;
    let keys = Object.keys(this.fiche_client.value) ;
    let values = Object.values(this.fiche_client.value)
    for(var i = 0 ; i < keys.length - 1 ; i++) {

      if(values[i] == "" || values[i] == null || values[i] == undefined) {
        values[i] = "NULL" ;
      }

      if(keys[i].trim() == "date_debut_contrat" || keys[i].trim() == "date_fin_contrat" || keys[i].trim() == "user_id" || keys[i].trim() == "permanent_POSM_id"){
        i++ ;
      }
      else{
        q2 += keys[i] + " ," ;
        if(typeof(values[i]) == "string") {
          q3 += "\"" + values[i] + "\" ," ;
        }
        else {
          q3 += "'" + values[i] + "' ," ;
        }
      }
    }

    let query = q1 + " ( "+ q2 + keys[keys.length - 1] + " ) values (" + q3 + " \" "+ values[values.length - 1] + " \" )";
    let query2 = "insert into i_t_contrat (date_debut_contrat, date_fin_contrat) values ('" + this.fiche_client.get('date_debut_contrat').value + "' ,'" + this.fiche_client.get('date_debut_contrat').value + "' )" ;
    let query5 = "insert into data_for_sync (table_name, is_synced, table_id, action_type, type) values (\"res_partner\", 0, (select max (id) + 1 from res_partner ), 0,\"insert\")" ;
    
    this.dbm.insert_res_data(query5).then(() => {
      console.log("success data_for_sync") ;
    }).catch(e => {
      console.log("error data_for_sync" + e ) ;
    }) ;

    for(var i = 0 ; i < this.fiche_client.get('user_id').value.length ; i++) {
      // insert into res_users_res_partner_rel (res_partner_id, res_users_id) values ( (select max (id) + 1 from res_partner ) , '"+ this.fiche_client.get('date_debut_contrat').value[i] +"' )
      let query3 = "insert into res_users_res_partner_rel (partner_id, res_users_id) values ( (select max (id) + 1 from res_partner ) , '"+ this.fiche_client.get('date_debut_contrat').value[i].value +"' )" ;
      this.dbm.insert_res_data(query3).then(() => {
        console.log("success res_users_res_partner_rel") ;
      }).catch(e => {
        console.log("error res_users_res_partner_rel" + e ) ;
      }) ;
    }
    
    for(var i = 0 ; i < this.fiche_client.get('permanent_POSM_id').value.length ; i++) {
      //insert into i_t_permanent_posm_res_partner_rel (res_partner_id, res_users_id) values ( (select max (id) + 1 from res_partner ) , '"+ this.fiche_client.get('permanent_POSM_id').value[i] +"' )
      let query4 = "insert into i_t_permanent_posm_res_partner_rel (partner_id, i_t_permanent_posm_id) values ( (select max (id) + 1 from res_partner ) , '"+ this.fiche_client.get('permanent_POSM_id').value[i].value +"' )" ;
      this.dbm.insert_res_data(query4).then(() => {
        console.log("success i_t_permanent_posm_res_partner_rel") ;
      }).catch(e => {
        console.log("error res_users_res_partner_rel" + e ) ;
      }) ; 
    }
      this.dbm.insert_res_data(query).then(() => {
      this.dbm.insert_res_data(query2).then(()=> {
        this.make_toast("Insertion avec succ??s") ;
        this.router.navigate(['fiches-client']) ;
        
        }).catch(e => {
          console.log('tsy mety \n ', stringify(e)) ;
      })
    }).catch(e => {
      console.log('tsy mety res \n ', JSON.stringify(e)) 
    })  ;
    } 
  }

  abort_new_client() {
    
  }

  edit_image(){

  }

  delete_image() {
    
  }

  regionChange(event) {
    this.i_t_agence_filtered = this.i_t_agence.filter(function(agence_filtered) {
      return agence_filtered.region_id == event;
    });
    console.log('1 : ' + JSON.stringify(this.i_t_agence)) ;
  }

  agenceChange(event) {
    this.i_t_zone_filtered = this.i_t_zone.filter(function(zone_filtered) {
      return zone_filtered.agence_id == event;
    });
    console.log('1 : ' + JSON.stringify(this.i_t_agence)) ;
  }

  zoneChange(event) {
    this.i_t_secteur_filtered = this.i_t_secteur.filter(function(secteur_filtered) {
      return secteur_filtered.zone_id == event;
    });
    console.log('1 : ' + JSON.stringify(this.i_t_agence)) ;
  }

  secteurChange(event){
    let secteur_id = event ;
    this.dbm.get_user_by_secteur(secteur_id)
      .then((data : any ) => {
        if(data){
          this.users_same_secteur = data ;
          console.log(JSON.stringify(this.users_same_secteur))
        }
      },)
      .catch(error => alert(error.message))
      
  }

  activite_pos_Change(event){
    this.fiche_client.controls['canal_id'].setValue(event) ;
    this.i_t_canal_filtered = this.i_t_canal.filter(function(canal_filtered) {
      return canal_filtered.id == event;
    });
    this.canal = this.i_t_canal_filtered[0].name 
    console.log('1 : ' + JSON.stringify(this.i_t_canal_filtered)) ;
  }

  ConvertStatut(status : number){
    this.active = status ;
    this.fiche_client.controls['active'].setValue(status) ;
      if(status == 0) {
        this.make_toast("Client active...") ;
      }
      else {
        this.make_toast("Client inactive...") ;
      }
  }

  open_menu() {
    this.router.navigate(['fiches-client'])
  }
  data_cmp  : any;
  Deconnexion(){
    this.storage.get('data_p2')
    .then((data2:any)=>{
      this.data_cmp = JSON.parse(data2);
      this.dbm.Updata_active_Login(this.data_cmp.id);
      this.storage.clear();
    })
    this.router.navigate(['home']);
  }
  //this.posts.filter(post => post.nomCategorie === m_categorie) ; (selectionChange)="selectChangeSigle($event)"

}
