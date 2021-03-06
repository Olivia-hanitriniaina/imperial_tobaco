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
import { Data } from 'src/app/model/data/data.model';
import { LoadingController, ToastController } from '@ionic/angular';
import { MessageService } from 'primeng/api';
import { i_t_canal } from 'src/app/model/data/i_t_canal.model';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FullScreenImage } from '@ionic-native/full-screen-image/ngx';
import { name_id } from '../new-client/new-client.page';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-detail-fiche-client',
  templateUrl: './detail-fiche-client.page.html',
  styleUrls: ['./detail-fiche-client.page.scss'],
})
export class DetailFicheClientPage implements OnInit {
  ngOnInit(): void {

  }

  itemes: MenuItem[];
  edit : boolean = false ;
  items: { id : number , label: string; } [] ;
  itemsActions: {id : number , label: string; } [] ;
  id : number ;
  client_detail : any = {};
  i_t_activation_autorisee: Array<i_t_activation_autorisee> = [] ;
  i_t_cible_activation: Array<i_t_cible_activation> = [] ;
  i_t_cible_installation_presentoirs: Array<i_t_cible_installation_presentoirs> = [] ;
  i_t_activite_pos: Array<i_t_activite_pos> = [] ;
  i_t_agence:Array<i_t_agence> = [] ;
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
  i_t_source_approvisionnement : Array<i_t_source_approvisionnement>
  res_user : Array<name_id> ;
  res_user_active : Array<name_id> ;
  fiche_client: FormGroup;
  data_cli : any = {} ;
  i_t_agence_filtered : Array<i_t_agence> =  [] ;
  i_t_zone_filtered : Array<i_t_zone> = [] ;
  i_t_secteur_filtered : Array<i_t_secteur> = [] ;
  i_t_canal : Array<i_t_canal> = [] ;
  i_t_canal_filtered : Array<i_t_canal> = [] ;
  canal : string = "" ;
  filePath : String = "";
  window : any = window ;
  resp : any ;
  display : boolean = false ;
  fichier :  File;
 
  valeur :any;
  // By Tolotra
  OnClickInactif : number ;

  constructor(private fullScreenImage: FullScreenImage, private camera : Camera,private messageService : MessageService, private toast : ToastController, private load : LoadingController, private data_router : Data, private geolocation : Geolocation,private storage: Storage, private dbm : Database_manager, private form_builder: FormBuilder, private router : Router, private activatedRoute : ActivatedRoute) { 

  }

  ionViewWillEnter() {
    this.items = [
      {id : 1 , label:'PROSPECT'},
      {id : 2 , label:'VALID??E PAR SUPERVISEUR'},
      {id : 3 , label:'VALID??E PAR ADMINISTRATEUR'},
    ];

    this.itemsActions = [
      {id : 1 , label:'PROSPECT'},
      {id : 2 , label:'VALID??E PAR SUPERVISEUR'},
      {id : 3 , label:'VALID??E PAR ADMINISTRATEUR'},
    ];

      this.itemes = [
        {label: 'D??connecter', icon: 'pi pi-fw pi-plus'}, 
    ];
   this.activatedRoute.queryParams.subscribe( async params =>{

    this.dbm.get_res_partner_data(params["id"]).then( data => {
     
      console.log("res_partner_data " + JSON.stringify(data));
      let md = { value: Number, label: String  } ;
      let md2 = { value: Number, label: String  } ;
      var md_data2 = new Array () ;
      var md_data = new Array() ;

        if(data.cnc_posm != null) {
          if(data.cnc_posm.includes('|') == true) {
            var cnc_posm = data.cnc_posm.split('|') ;
            var cnc_posm_id =  data.cnc_posm_id.split('|') ;
            for (var i = 0; i < cnc_posm_id.length ; i++) {
              try {
                md = { value : cnc_posm_id[i], label : cnc_posm[i] } ;
                console.log(md) ;
                md_data.push(md) ;
              }
              catch(e) {
                console.log("data.cnc_posm ==> ", e) ;
              }
            } data.cnc_posm = md_data ;
            console.log("login"+data.cnc_posm);
          }
          else {
            try {
              md = { value : data.cnc_posm_id, label : cnc_posm}
              md_data.push(md) ;
            }
            catch(e) {
              console.log("else n??1 data.cnc_posm ==> ", e) ;
            }
          }
        }
        else {
          try {
            md = { value : null, label : null}
            md_data.push(md) ;
          }
          catch(e) {
            console.log("else n??2 data.cnc_posm ==> ", e) ;
          }
            
        }
          
        if(data.cnc_login != null) {
          
          if(data.cnc_login.includes('|') == true) {
            var cnc_login = data.cnc_login.split('|') ;
            var cnc_usr_id =  data.cnc_usr_id.split('|') ;
            for (var i = 0; i < cnc_usr_id.length ; i++) {
              try {
                md2 = { value : cnc_usr_id[i], label : cnc_login[i] }
                md_data2.push(md2) ;
              }
              catch(e) {
                console.log("data.cnc_login ==> ", e) ;
              }
            }
          }
          else {
            try {
              md2 = { value : data.cnc_usr_id, label : data.cnc_login}
              md_data2.push(md2) ;
            }
            catch(e) {
              console.log("else n??1 data.cnc_login ==> ", e) ;
            }
          }
         
          data.cnc_login = md_data2 ;
          console.log("login"+data.cnc_login);
        }
        else {
          try {
            md2 = { value : null, label : null}
            md_data2.push(md2) ;
          }
          catch(e) {
            console.log("else n??2 data.cnc_login ==> ", e) ;
        }
      }
      data.cnc_login = md_data2 ;
      data.cnc_posm = md_data ;
      this.client_detail = data ;
      console.log("clientttttttttttt"+JSON.stringify(this.client_detail));
    
  }) ;
    
    this.dbm.select_basic_data_with_id("res_partner",params["id"]).then(data_res_partner => {
        this.data_cli = data_res_partner;
        console.log("update"+JSON.stringify( this.data_cli));
    }) ;

    this.dbm.select_basic_data("i_t_region").then( data => {
      this.i_t_region = data ;
    }) ;

    this.dbm.select_data_with_table_name("i_t_permanent_posm").then(data => {
      this.i_t_permanent_posm = data ;
    }) ;
    
    this.dbm.select_data_res_users("res_users").then(data => {
       this.res_user = data ;
       console.log("1"+JSON.stringify(this.res_user));
    }) ;

    this.dbm.select_res_user_active().then( data => {
      this.res_user_active = data ;
      console.log("2"+JSON.stringify(this.res_user));
    }) ;

    this.dbm.select_basic_data("i_t_agence").then( data => {
      this.i_t_agence = data ;
    }) ;

     this.dbm.select_basic_data("i_t_zone").then( data => {
      this.i_t_zone = data ;
    }) ;

      this.dbm.select_basic_data("i_t_activite_pos").then( data => {
        this.i_t_activite_pos = data ;
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
  
      
  
      this.dbm.get_name_id_data("res_partner").then(data => {
        this.i_t_fournisseur_principale = data ;
        this.i_t_fournisseur_secondaire = data ;
      }) ;
  
        this.dbm.select_basic_data("i_t_source_approvisionnement").then( data => {
        this.i_t_source_approvisionnement = data ;
      }) ;

      this.dbm.select_basic_data("i_t_canal").then( data => {
        this.i_t_canal = data ;
        this.canal = this.i_t_canal[0].name 
      }) ;
  
        
      this.fiche_client = this.form_builder.group({
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

        user_id : ['', Validators.required] ,
        canal_id : ['', Validators.required] ,

        active : [''] ,

        cible_installation_presentoirs_id : ['', Validators.required] ,
        permanent_POSM_id : ['', Validators.required] ,

        contrat_id : ['', Validators.required] ,
        date_debut_contrat : [this.client_detail.date_debut_contrat, Validators.required] ,
        date_fin_contrat : [this.client_detail.date_fin_contrat, Validators.required] ,

        cooperation_itg_id : ['', Validators.required] ,
        activation_autorisee_id : ['', Validators.required] , 
        preference_animateur_id : ['', Validators.required] ,

        frequence_approvisionnement_id : ['', Validators.required] ,
        source_approvisionnement_id : ['', Validators.required] ,
        fournisseur_principal_id : ['', Validators.required] ,
        fournisseur_secondaire_id : ['', Validators.required] ,

        photo : [''] ,

        commentaire : [''] ,
      }) ;

      //this.fiche_client.controls['contrat_id'].setValue(this.data_cli.contrat_id) ;
      this.fiche_client.controls['date_debut_contrat'].patchValue(this.client_detail.date_debut_contrat) ;
      this.fiche_client.controls['date_fin_contrat'].patchValue(this.client_detail.date_fin_contrat) ; 
      this.fiche_client.controls['canal_id'].disable() ; 
   }) ;
  
  }

  edit_fiche_client(){
    this.regionChange(this.data_cli.region_id);
    this.agenceChange(this.data_cli.agence_id) ;
    this.zoneChange(this.data_cli.zone_id) ;
    
    this.activite_pos_Change(this.data_cli.canal_id) ;
    this.edit = true ;
  }

  create_fiche_client(){
    this.router.navigate(['new-client']) ;
  }

  save_edit(){
    this.activatedRoute.queryParams.subscribe(params => {

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
      if(this.filePath != "") this.fiche_client.controls['photo'].setValue(this.filePath) ;
      if(this.resp != undefined || this.resp != null) {
        this.fiche_client.controls['latitude'].setValue(this.resp.latitude) ;
        this.fiche_client.controls['longitude'].setValue(this.resp.longitude) ;
      } 
      if(this.fiche_client.get('active').value == null ) {
        this.fiche_client.controls['active'].setValue(this.data_cli.active) ;
      } 
      console.log(this.resp) ;
      let q1 = "update res_partner set " ;
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
          q2 += keys[i] + " = " ;
          if(typeof(values[i]) == "string") {
            q2 += "\"" + values[i] + "\" ," ;
          }
          else {
            q2 += "'" + values[i] + "' ," ;
          }
        }
      }
  
      let query = q1 + q2 + keys[keys.length-1] + " = \" " + values[values.length - 1] + " \" where id = " + params["id"] ;
      let query2 = "update i_t_contrat set date_debut_contrat = '" + this.fiche_client.get('date_debut_contrat').value + "' , date_fin_contrat = '" + this.fiche_client.get('date_debut_contrat').value + "' where id = " + this.data_cli.contrat_id ;
      
      let query5 = "delete from res_users_res_partner_rel where partner_id = " + params["id"] ;
      let query6   = "delete from i_t_permanent_posm_res_partner_rel where partner_id = " + params["id"] ;

      this.dbm.insert_res_data(query5).then(() => {
        console.log("delete success i_t_permanent_posm_res_partner_rel") ;
      }).catch(e => {
        console.log("error delete i_t_permanent_posm_res_partner_rel" + e ) ;
      }) ; 

      this.dbm.insert_res_data(query6).then(() => {
        console.log("delete success i_t_permanent_posm_res_partner_rel") ;
      }).catch(e => {
        console.log("error delete i_t_permanent_posm_res_partner_rel" + e ) ;
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

      this.dbm.update_res_data(query).then(() => {
        this.dbm.update_res_data(query2).then(() => {
          this.make_toast("Mise ?? jour avec succ??s...") ;
          this.edit = false ;
          this.ionViewWillEnter() ;
        }) ;
      }) ;
    }
  }) ;
}

open_fiche_client(){
  this.router.navigate(['fiches-client']) ;
}



async getMyLocation(){

  var options = {
    enableHighAccuracy: true, 
    timeout: 60000, 
    maximumAge: 0
  };

    let loading = await this.load.create({
      duration : 6000
    }) ;
    loading.present() ;

    this.geolocation.getCurrentPosition(options).then((resp) => {
      this.resp = resp.coords ;
      this.fiche_client.controls['longitude'].setValue(resp.coords.longitude) ;
      this.fiche_client.controls['latitude'].setValue(resp.coords.latitude) ;
      loading.dismiss() ;
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  abort_edit_client(){
    this.edit = false ;
  }

  ConvertStatut(status : number){
    this.activatedRoute.queryParams.subscribe(params => {
      this.dbm.update_status_res_partner(params["id"], status).then(() => {
        this.data_cli.active = status ;
        if(status == 0) {
          this.make_toast("Client activ??...") ;
        }
        else {
          this.make_toast("Client inactiv??...") ;
        }
      }) ;
    });
    
  }

  async make_toast(message){
    let x = await this.toast.create({
      message : message ,
      duration : 3000
    }) ;
    x.present() ;
  }

  cancel(champ : string) {
    this.fiche_client.controls[champ].setValue(null) ;
    //console.log(this.fiche_client.get('champ').value) ;
  }
 
  async regionChange(event) {
    this.i_t_agence_filtered = await this.i_t_agence.filter(function(agence_filtered) {
      return agence_filtered.region_id == event;
    });
    console.log('regionChange : ' + JSON.stringify(this.i_t_agence_filtered)) ;
  }

  async agenceChange(event) {
    this.i_t_zone_filtered = await this.i_t_zone.filter(function(zone_filtered) {
      return zone_filtered.agence_id == event;
    });
    console.log('agenceChange : ' + JSON.stringify(this.i_t_zone_filtered)) ;
  }

  async zoneChange(event) {
     this.i_t_secteur_filtered = await this.i_t_secteur.filter(function(secteur_filtered) {
      return secteur_filtered.zone_id == event;
    });
    console.log('zoneChange : ' + JSON.stringify(this.i_t_secteur_filtered)) ;
  }

  async activite_pos_Change(event){
    this.fiche_client.controls['canal_id'].setValue(event) ;
    this.i_t_canal_filtered = await this.i_t_canal.filter(function(canal_filtered) {
      return canal_filtered.id == event;
    });
    console.log('activite_pos_Change : ' + JSON.stringify(this.i_t_canal_filtered)) ;
    if(this.i_t_canal_filtered.length > 0 ) {
      this.canal = this.i_t_canal_filtered[0].name 
    }
    else {
      this.canal = "" ;
    }
    
  }
  async takePicture(){
    let cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE ,
    };
    const imagePath : string = await this.camera.getPicture(cameraOptions);
    return this.window.Ionic.WebView.convertFileSrc(imagePath);
  }

  async showImageFromCamera() {
    try {
     
     
      this.filePath = await this.takePicture();

      this.fiche_client.controls['photo'].setValue(this.filePath);
     
      console.log("showImageFromCamera : " +  this.fiche_client.get('photo').value) ;
     
    } catch(error) {
      console.log(error);
    }
  }

  removeImage() {
      this.fiche_client.controls['photo'].setValue(null) ;
      console.log("remove_image : " +  this.fiche_client.get('photo').value) ;
  }

  itemsActionsChange(idaction) {
    console.log(idaction) ;
    this.items = this.itemsActions.filter(function(item) {
      return item.id > idaction;
    });
    console.log(this.items)
  }

  open_full_screen(){
    this.display = true ;
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


}
