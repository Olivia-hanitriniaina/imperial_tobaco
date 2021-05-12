import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';
import { Router } from '@angular/router';
import { base_data } from '../model/data/base_data.model';
import { i_t_region } from '../model/data/i_t_region.model';
import { Database_manager } from '../model/DAO/database_manager.model';
import { ToastController } from '@ionic/angular';
import { Ng6OdooRPCService } from 'angular6-odoo-jsonrpc';
import { HttpHeaders } from '@angular/common/http';
import { TestService } from '../model/service/test.service';

export class test {
    db: string;
    name: string;
    password: string;
  }

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
        private toast : ToastController,
        private odooRPC: Ng6OdooRPCService,
        private service : TestService
        ) {
        this.userFormGroup = this.formbuilder.group ({
            "login" : ["" ,Validators.required] ,
            "password" :  ["", Validators.required]
        }) ;
    }

    ngOnInit(): void { 

    }

    onSubmit(){
        if(this.userFormGroup.get('login').value == "admin" && this.userFormGroup.get('password').value == "Admin123") {
            this.router.navigate(['menu']) ; 
        }
        else {
            this.dbm.checkLogin(this.userFormGroup.get('login').value, this.userFormGroup.get('password').value).then (result => {
                console.log(result);
                switch(result) {
                    case 0 : {
                                this.makeToast("Mot de passe incorrect !") ;
                                break;
                            }
                    case -1 : {
                               this.makeToast("Login incorrect !") ;
                                break ;
                            }
                    case 1 : {
                                this.router.navigate(['menu']) ;
                                 break ;
                             }
                }
            }) ;
        }
        
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

    test_odoo() {
        this.odooRPC.init({
            odoo_server: 'https://imperial-tobacco.ingenosya.eu',
            http_auth: "admin:Admin123",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              }
            
        });
        
        this.odooRPC.login('it', 'admin', 'Admin123').then(res => {
            console.log('login success');}).catch( err => {
            console.error('login failed', err);
        }); 

    }

    test_1_odoo() {
       this.router.navigate(['map']) ;
    }

    
   /*
    var crypto = require('crypto');
    var pbkdf2_sha512 = require('pbkdf2-sha512'); 

    b64trimmed(buf) {
        return buf.toString('base64').replace(/=*$/, '').replace('+', '.');
    }

    b64decode(str) {
            // . in Base64?
            str = str.replace('.', '+');
            if (str.length % 4) {
                    str += '='.repeat(4 - str.length % 4);
            }
            return new Buffer(str, 'base64');
    }

    /*get_hmac(secret, password) {
        var hmac = CryptoJs.createHmac('sha512', secret).update(password).digest('base64');

            return hmac;
    } 

    get_hash(password, salt, rounds) {

            // FIXME: KeyLenBytes is hardcoded
            var h = this.b64trimmed(pbkdf2_sha512(password, salt, rounds, 64));
            var joined_hash = ['', 'pbkdf2-sha512', rounds, this.b64trimmed(salt), h].join('$');
            return joined_hash;
    }

    verify_hash(password, stored_hash) {
            var scheme = stored_hash.split('$')[1];
            var rounds = stored_hash.split('$')[2];
            var salt = stored_hash.split('$')[3];

            // FIXME: Maybe throw an exception
            if (scheme !== 'pbkdf2-sha512') {
                    return false;
            }

            var h = this.get_hash(password, this.b64decode(salt), rounds);

            return h === stored_hash;
    }

    new_hash(password, rounds) {

            // FIXME: Salt size is hardcoded
            var salt = crypto.randomBytes(16);

            return this.get_hash(password, salt, rounds);
    }

    var password = 'admin';

    var h = get_hash(password, '4321', 25000) ;
    console.log(h)

    // Usage:
    var h = new_hash(password, 25000);
    console.log('HASH ' + h);
    console.log('VERIFY ' + verify_hash(password, h));

    // Usage for passwords generated with flask_security:

    // SECURITY_PASSWORD_SALT is set in config.py and used by flask-security
   /* var SECURITY_PASSWORD_SALT = '4321';

    var password_hmac = get_hmac(SECURITY_PASSWORD_SALT, password);
    var h = new_hash(password_hmac, 25000);
    console.log('HASH ' + h);
    console.log('VERIFY ' + verify_hash(password_hmac, h)); 
   */

  
}
