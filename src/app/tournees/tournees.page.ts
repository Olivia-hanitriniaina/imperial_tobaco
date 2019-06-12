import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-tournees',
  templateUrl: './tournees.page.html',
  styleUrls: ['./tournees.page.scss'],
})
export class TourneesPage implements OnInit {

  constructor(private router : Router, private storage : Storage) { }

  ngOnInit() {
  }

  open_menu(){
    this.storage.set("last" , "tournees") ;
    this.router.navigate(['menu']) ;
  }

}
