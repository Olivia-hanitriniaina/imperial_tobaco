import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';
import { Router } from '@angular/router';
import { base_data } from '../model/data/base_data.model';
import { i_t_region } from '../model/data/i_t_region.model';
import { Database_manager } from '../model/DAO/database_manager.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers : [MessageService]
})
export class HomePage implements OnInit{    

    userFormGroup : FormGroup ;
    msgs : Message[] = [];
    err: boolean;
    region : Array<i_t_region> = [] ;

    constructor(
        private formbuilder : FormBuilder, 
        private messageService: MessageService,
        private router : Router ,
        private dbm : Database_manager,
        private toast : ToastController
        ) {
        this.userFormGroup = this.formbuilder.group ({
            "login" : ["" ,Validators.required] ,
            "password" :  ["", Validators.required]
        }) ;
    }

    ngOnInit(): void { 
        this.dbm.select_basic_data("i_t_region").then ((data) => {
           
           this.region = data ;
           if(this.region.length == 0) {
            this.dbm.init_table_data() ;
           }
               
          });
    }

    onSubmit(){
        this.dbm.checkLogin(this.userFormGroup.get('login').value, this.userFormGroup.get('password').value).then (result => {
            console.log(result);
            switch(result) {
                case 0 : {
                            this.makeToast("Mot de passe incorrect !") ;
                            break;
                        }
                case 1 : {
                            this.router.navigate(['menu']) ; 
                            break; 
                        }
                case -1 : {
                           this.makeToast("Login incorrect !") ;
                            break ;
                        }
            }
        })
    }

    async makeToast(message : string) {
        let x = await this.toast.create({
            message : message ,
            duration : 3000
        }) ;
        x.present() ;
    }

    direct(){
        this.router.navigate(['detail-tournee']) ; 
    }

  
}
