import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Database_manager } from 'src/app/model/DAO/database_manager.model';
import { Storage } from '@ionic/storage'
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-tournees',
  templateUrl: './tournees.page.html',
  styleUrls: ['./tournees.page.scss'],
})
export class TourneesPage implements OnInit {
  itemes: MenuItem[];
  constructor(private router : Router, private storage : Storage,private dbm : Database_manager) { }

  ngOnInit() {
    this.itemes = [
      {label: 'Déconnecter', icon: 'pi pi-fw pi-plus'}, 
    ];
  }

  open_menu(){
    this.storage.set("last" , "tournees") ;
    this.router.navigate(['menu']) ;
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
