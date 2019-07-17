import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Database_manager } from '../model/DAO/database_manager.model';
import { i_t_region } from '../model/data/i_t_region.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  root : String ;
  term ;
  menus : {name : string, icone : string} [] ;
  
  constructor(private router : Router, private storage : Storage, private dbm : Database_manager) { 
    
  }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.menus = [
      { name : "Discuter", icone : "assets/image/discuter.png"} ,
      { name : "Fiches client", icone : "assets/image/client.png"} ,
      { name : "Tournées", icone : "assets/image/tournes.png"} ,
      { name : "Paramétrage", icone : "assets/image/parametrage.png"} ,
      //{ name : "Fiche de visite", icone : "assets/image/visite.png"}
    ]
    this.storage.get("last").then(last => {
      this.root = last ;
    });
  }

  open_menu(menu) {
    switch (menu) {
      case "Discuter" : this.open_discussion() ; break ;
      case "Fiches client" : this.open_fiches_client () ; break ;
      case "Tournées" : this.open_tournees() ; break;
      case "Paramétrage" : break;
      case "Fiche de visite" : this.open_fiches_visite() ; break;
      default : break ;
    }
  }

  open_fiches_client(){
    //this.dbm.select_basic_data("i_t_region") ;
    this.router.navigate(['fiches-client']) ;
  }

  open_discussion(){
    this.router.navigate(['discussion']) ;
  }

  open_tournees(){
    this.router.navigate(['liste-tournee']) ;
  }

  open_fiches_visite() {
    this.router.navigate(['fiche-visite']) ;
  }

  navigate_back(){
    if(this.root){
      this.router.navigate([this.root]) ;
    }
  }

}
