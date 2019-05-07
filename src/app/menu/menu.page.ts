import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Database_manager } from '../model/DAO/database_manager.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  root : String ;

  constructor(private router : Router, private storage : Storage, private dbm : Database_manager) { 
    
  }

  ngOnInit() {
    //this.dbm.select_basic_data("i_t_region") ;
  }

  ionViewWillEnter(){
    this.storage.get("last").then(last => {
      this.root = last ;
    });
  }


  open_fiches_client(){
    //this.dbm.select_basic_data("i_t_region") ;
    this.router.navigate(['fiches-client']) ;
  }

  open_discussion(){
    this.router.navigate(['discussion']) ;
  }

  open_tournees(){
    this.router.navigate(['tournees']) ;
  }

  navigate_back(){
    if(this.root){
      this.router.navigate([this.root]) ;
    }
  }

}
