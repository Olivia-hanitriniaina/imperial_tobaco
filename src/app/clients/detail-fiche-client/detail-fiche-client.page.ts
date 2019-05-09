import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientInterface } from '../../model/screen/clients.screen';
import { Database_manager } from '../../model/DAO/database_manager.model';
import { ClientDetail } from '../../model/screen/client_detail.screen';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
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
import { i_t_region } from '../../model/data/i_t_region.model';
import { i_t_source_approvisionnement } from '../../model/data/i_t_source_approvisionnement.model';
import { res_partner } from '../../model/data/res_partner.model';
import { res_users } from '../../model/data/res_users.model';
import { Storage } from '@ionic/storage' ;
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-detail-fiche-client',
  templateUrl: './detail-fiche-client.page.html',
  styleUrls: ['./detail-fiche-client.page.scss'],
})
export class DetailFicheClientPage implements OnInit {

  edit : boolean = false ;
  items: { label: string; }[];
  id : number ;
  client_detail : ClientDetail ;
  i_t_activation_autorisee: Array<i_t_activation_autorisee>;
  i_t_cible_activation: Array<i_t_cible_activation>;
  i_t_cible_installation_presentoirs: Array<i_t_cible_installation_presentoirs>;
  i_t_activite_pos: Array<i_t_activite_pos>;
  i_t_agence:Array<i_t_agence>;
  i_t_classification1: Array<i_t_classification1>;
  i_t_classification2: Array<i_t_classification2>;
  i_t_contrat: Array<i_t_contrat>;
  i_t_cooperation_itg: Array<i_t_cooperation_itg>;
  i_t_couverture_commerciale: Array<i_t_couverture_commerciale>;
  i_t_emplacement: Array<i_t_emplacement>;
  i_t_enseigne_appartenance: Array<i_t_enseigne_appartenance>;
  i_t_frequence_approvisionnement: Array<i_t_frequence_approvisionnement>;
  i_t_frequence_visite: Array<i_t_frequence_visite>;
  i_t_permanent_posm: Array<i_t_permanent_posm>;
  i_t_preference_animateur: Array<i_t_preference_animateur>;
  i_t_proximite: Array<i_t_proximite>;
  i_t_secteur: Array<i_t_secteur>;
  i_t_type_client: Array<i_t_type_client>;
  i_t_type_quartier: Array<i_t_type_quartier>;
  i_t_ville: Array<i_t_ville>;
  i_t_zone: Array<i_t_zone>;
  i_t_fournisseur_secondaire: Array<i_t_fournisseur_secondaire>;
  i_t_fournisseur_principale: Array<i_t_fournisseur_principale>;
  i_t_region: Array<i_t_region>;
  i_t_source_approvisionnement : Array<i_t_source_approvisionnement>
  res_user: res_users;
  fiche_client: FormGroup;
  data_cli : res_partner ;

  constructor(private geolocation : Geolocation,private storage: Storage, private dbm : Database_manager, private form_builder: FormBuilder, private router : Router, private activatedRoute : ActivatedRoute) { 
    
  }

  async ngOnInit() {
    this.items = [
      {label:'PROSPECT'},
      {label:'VALIDÉE PAR SUPERVISEUR'},
      {label:'VALIDÉE PAR ADMINISTRATEUR'},
    ];

    this.storage.get("data_for_detail").then(id => {

      this.dbm.get_res_partner_data(id).then( data => {
        this.client_detail = data ;
      }) ;
      
      this.dbm.select_basic_data_with_id("res_partner",id).then(data => {
        this.data_cli = data;
      }) ;

      this.dbm.select_basic_data("i_t_region").then( data => {
        this.i_t_region = data
      }) ;
  
        this.dbm.select_basic_data("i_t_activation_autorisee").then( data => {
        this.i_t_activation_autorisee = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_cible_activation").then( data => {
        this.i_t_cible_activation = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_cible_installation_presentoirs").then( data => {
        this.i_t_cible_installation_presentoirs = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_activite_pos").then( data => {
        this.i_t_activite_pos = data ;
      }) ;
  
  
        this.dbm.select_basic_data("i_t_agence").then( data => {
        this.i_t_agence = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_classification1").then( data => {
        this.i_t_classification1 = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_classification2").then( data => {
        this.i_t_classification2 = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_contrat").then( data => {
        this.i_t_contrat = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_cooperation_itg").then( data => {
        this.i_t_cooperation_itg = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_couverture_commerciale").then( data => {
        this.i_t_couverture_commerciale = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_emplacement").then( data => {
        this.i_t_emplacement = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_enseigne_appartenance").then( data => {
        this.i_t_enseigne_appartenance = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_frequence_approvisionnement").then( data => {
        this.i_t_frequence_approvisionnement = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_frequence_visite").then( data => {
        this.i_t_frequence_visite = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_permanent_posm").then( data => {
        this.i_t_permanent_posm = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_preference_animateur").then( data => {
        this.i_t_preference_animateur = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_proximite").then( data => {
        this.i_t_proximite = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_secteur").then( data => {
        this.i_t_secteur = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_type_client").then( data => {
        this.i_t_type_client = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_type_quartier").then( data => {
        this.i_t_type_quartier = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_ville").then( data => {
        this.i_t_ville = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_zone").then( data => {
        this.i_t_zone = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_fournisseur_secondaire").then( data => {
        this.i_t_fournisseur_secondaire = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_fournisseur_principale").then( data => {
        this.i_t_fournisseur_principale = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_source_approvisionnement").then( data => {
        this.i_t_source_approvisionnement = data ;
      }) ;
  
        this.dbm.select_res_user_active().then( data => {
        this.res_user = data ;
      }) ;

      this.fiche_client = this.form_builder.group({
        region_id : [ '' , Validators.required],
        agence_id : ['' , Validators.required] ,
        zone_id : [ '', Validators.required] ,
        secteur_id : [''] ,
  
        nom_pos : ['', Validators.required] ,
        nom_gerant : ['', Validators.required] ,
        adresse : ['', Validators.required] ,
        repere : ['', Validators.required] ,
        quartier : ['', Validators.required] ,
        ville_id : [, Validators.required] ,
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
  
        cible_installation_presentoirs_id : ['', Validators.required] ,
        permanent_POSM1_id : ['', Validators.required] ,
        permanent_POSM2_id : ['', Validators.required] ,
        permanent_POSM3_id : ['', Validators.required] ,
        permanent_POSM4_id : ['', Validators.required] ,
        permanent_POSM5_id : ['', Validators.required] ,
  
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
  
        commentaire : [''] ,
      })

     
    });
  }

  edit_fiche_client(){
    this.edit = true ;
  }

  create_fiche_client(){
    this.router.navigate(['new-client']) ;
  }

  save_edit(){
    this.storage.get("data_for_detail").then(id => { 
      let q1 = "update res_partner set " ;
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
          q2 += keys[i] + " = " ;
          if(typeof(values[i]) == "string") {
            q2 += "\"" + values[i] + "\" ," ;
          }
          else {
            q2 += "'" + values[i] + "' ," ;
          }
        }
      }
  
      let query = q1 + q2 + keys[keys.length-1] + " = \" " + values[values.length - 1] + " \" where id = " + id ;
      let query2 = "update i_t_contrat set date_debut_contrat = " + + ", date_fin_contrat = " + + " where id = " + this.fiche_client.get('contrat_id').value ;
      console.log('query 1 : \n' + query + ' \n query 2 \n' + query2)
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

  abort_edit(){
    this.edit = false ;
  }

}
