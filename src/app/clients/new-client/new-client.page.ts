import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from 'primeng/api';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Database_manager } from '../../model/DAO/database_manager.model';
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
import { i_t_emplacement } from '../../model/data/i_t_emplacement.model';
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

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.page.html',
  styleUrls: ['./new-client.page.scss'],
})
export class NewClientPage implements OnInit {

  OnClickInactif = false;
  
  items : Array<MenuItem> ;
  home : any ;
  longitude : String = "0.0000000000";
  latitude : String = "0.00000000";
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
  i_t_permanent_posm: Array<i_t_permanent_posm> = [] ;
  i_t_preference_animateur: Array<i_t_preference_animateur> = [] ;
  i_t_proximite: Array<i_t_proximite> = [] ;
  i_t_secteur: Array<i_t_secteur> = [] ;
  i_t_type_client: Array<i_t_type_client> = [] ;
  i_t_type_quartier: Array<i_t_type_quartier> = [] ;
  i_t_ville: Array<i_t_ville> = [] ;
  i_t_zone: Array<i_t_zone> = [] ;
  i_t_fournisseur_secondaire: Array<i_t_fournisseur_secondaire> = [] ;
  i_t_fournisseur_principale: Array<i_t_fournisseur_principale> = [] ;
  i_t_region: Array<i_t_region> = [] ;
  i_t_source_approvisionnement : Array<i_t_source_approvisionnement> ;
  i_t_zone_filtered : Array<i_t_zone> = [] ;
  i_t_secteur_filtered : Array<i_t_secteur> = [] ;
  i_t_canal : Array<i_t_canal> = [] ;
  i_t_canal_filtered : Array<i_t_canal> = [] ;
  signature : string ;
  invalid_fields = [] ;
  canal : string = "" ;
  id_contrat : number = 0 ;
  active_user : res_users ;

  constructor(private messageService : MessageService, private toast : ToastController,private dbm : Database_manager,private form_builder : FormBuilder, private router : Router ,private camera: Camera, private geolocation: Geolocation, private alert : AlertController) { }

  ngOnInit() {

    this.items = [
      {label:'PROSPECT'},
      {label:'VALIDÉE PAR SUPERVISEUR'},
      {label:'VALIDÉE PAR ADMINISTRATEUR'},
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

    this.dbm.select_basic_data("i_t_permanent_posm").then(data => {
      this.i_t_permanent_posm = data ;
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

    this.dbm.select_basic_data("i_t_fournisseur_secondaire").then(data => {
      this.i_t_fournisseur_secondaire = data ;
    }) ;

    this.dbm.select_basic_data("i_t_fournisseur_principale").then(data => {
      this.i_t_fournisseur_principale = data ;
    }) ;

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
      latitude : [''] ,
      longitude : [''] ,

      type_client_id : ['', Validators.required] ,
      activite_pos_id : ['', Validators.required] ,
      enseigne_appartenance_id : ['', Validators.required] ,
      classification1_id : ['', Validators.required] ,
      classification2_id : ['', Validators.required] ,

      couverture_commerciale_id : ['', Validators.required] ,
      frequence_visite_id : [''] ,

      user_id : [''] ,
      canal_id : [''] ,

      cible_installation_presentoirs_id : ['', Validators.required] ,
      permanent_POSM1_id : ['', Validators.required] ,
      permanent_POSM2_id : ['', Validators.required] ,
      permanent_POSM3_id : ['', Validators.required] ,
      permanent_POSM4_id : ['', Validators.required] ,
      permanent_POSM5_id : ['', Validators.required] ,

      contrat_id : [''] ,
      date_debut_contrat : ['', Validators.required] ,
      date_fin_contrat : ['', Validators.required] ,

      cooperation_itg_id : ['', Validators.required] ,
      activation_autorisee_id : ['', Validators.required] , 
      preference_animateur_id : ['', Validators.required] ,

      frequence_approvisionnement_id : ['', Validators.required] ,
      source_approvisionnement_id : ['', Validators.required] ,
      fournisseur_principal_id : ['', Validators.required] ,
      fournisseur_secondaire_id : ['', Validators.required] ,

      commentaire : [''] ,
   }) ;

   this.dbm.select_max_basic_data("i_t_contat").then(data => {
     console.log(data);
      this.fiche_client.controls['contrat_id'].setValue(data.max) ;
    }) ;
  }

  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
     this.make_alert(JSON.stringify(this.base64Image)) ;
    }, (err) => {
     // Handle error
    });
  }

  getMyLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.fiche_client.controls['longitude'].setValue(resp.coords.longitude) ;
      this.fiche_client.controls['latitude'].setValue(resp.coords.latitude) ;

      this.fiche_client.controls['longitude'].disable();
      this.fiche_client.controls['latitude'].disable();

     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      console.log('watch \n' + data.coords) ;
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
    this.fiche_client.controls['user_id'].setValue(this.active_user.id) ;
    this.fiche_client.controls['contrat_id'].setValue(this.i_t_contrat[this.i_t_contrat.length - 1].id + 1) ;
    this.fiche_client.controls['name'].setValue("/") ;
    let q1 = "insert into res_partner " ;
    let q2 = "" ;
    let q3 = "" ;
    let keys = Object.keys(this.fiche_client.value) ;
    let values = Object.values(this.fiche_client.value)
    for(var i = 0 ; i < keys.length - 1 ; i++) {

      if(values[i] == "" || values[i] == null || values[i] == undefined) {
        values[i] = "NULL" ;
      }

      if(keys[i].trim() == "date_debut_contrat" || keys[i].trim() == "date_fin_contrat"){
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
    let query2 = "insert into i_t_contrat (date_debut_contrat, date_fin_contrat) values (" + this.fiche_client.get('date_debut_contrat').value + " ," + this.fiche_client.get('date_debut_contrat').value + " )" ;
    
    console.log('query \n' + query);
    this.dbm.insert_res_data(query).then(() => {
      this.dbm.insert_res_data(query2).then(()=> {
        this.make_toast("Insertion avec succès") ;
        this.router.navigate(['fiches-client']) ;
        }).catch(e => {
          console.log('tsy mety \n ', stringify(e)) ;
      })
    }).catch(e => {
      console.log('tsy mety res \n ', JSON.stringify(e)) }) ;
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

  activite_pos_Change(event){
    this.fiche_client.controls['canal_id'].setValue(event) ;
    this.i_t_canal_filtered = this.i_t_canal.filter(function(canal_filtered) {
      return canal_filtered.id == event;
    });
    this.canal = this.i_t_canal_filtered[0].name 
    
    console.log('1 : ' + JSON.stringify(this.i_t_canal_filtered)) ;
  }

  //this.posts.filter(post => post.nomCategorie === m_categorie) ; (selectionChange)="selectChangeSigle($event)"
	
ConvertStatut(){
    this.OnClickInactif = true;
  }
}
