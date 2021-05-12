import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OdooService } from '../services/odoo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-synchro',
  templateUrl: './synchro.page.html',
  styleUrls: ['./synchro.page.scss'],
})
export class SynchroPage implements OnInit {

  sync : FormGroup ;
  

  constructor(private fb : FormBuilder, private service : OdooService,private router : Router) { }

  ngOnInit() {
    this.sync = this.fb.group({
      "url" : ["" ,Validators.required] ,
      "database" : ["" ,Validators.required] ,
      "username" : ["" ,Validators.required] ,
      "password" :  ["", Validators.required]
    }) ;
  }

  

  synchroniser() {
    if(this.sync.get(['username']).value == "admin"){
      this.service.synchronise_as_admin(this.sync.value) ;
    }
    else {
      this.service.synchronise(this.sync.value) ;
    }
    
  }

  home_page(){
    this.router.navigate['home']
  }

  

}
