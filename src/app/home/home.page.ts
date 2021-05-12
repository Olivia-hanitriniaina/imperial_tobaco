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
import { Storage } from '@ionic/storage'
export class test {
    db: string;
    name: string;
    password: string;
}

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    providers: [MessageService]
})
export class HomePage implements OnInit {

    userFormGroup: FormGroup;
    msgs: Message[] = [];
    err: boolean;
    region: Array<i_t_region> = [];

    constructor(
        private formbuilder: FormBuilder,
        private messageService: MessageService,
        private router: Router,
        private dbm: Database_manager,
        private toast: ToastController,
        private odooRPC: Ng6OdooRPCService,
        private service: TestService,
		private storage : Storage
    ) {
        this.userFormGroup = this.formbuilder.group({
            "login": ["", Validators.required],
            "password": ["", Validators.required]
        });
    }

    ngOnInit(): void {
        this.dbm.select_basic_data("i_t_region").then ((data) => {
            this.region = data ;
            if(this.region.length == 0) {
                 this.dbm.init_table_data() ;
            }
           })
           .catch(e => console.log("tratrako"));
    }

    onSubmit() {
        try {
            if (this.userFormGroup.get('login').value == "admin" && this.userFormGroup.get('password').value == "Admin123") {
                this.router.navigate(['menu']);
            }
            else {
                this.dbm.checkLogin(this.userFormGroup.get('login').value, this.userFormGroup.get('password').value).then(result => {
                    switch (result) {
                        case 0: {
                            this.makeToast("Mot de passe incorrect !");
                            break;
                        }
                        case 1: {
                            this.dbm.storage_Login(this.userFormGroup.get('login').value, this.userFormGroup.get('password').value).then (data => {
                            this.storage.set('data_p2',JSON.stringify(data)).catch(e => alert("set storage p2 " + e.message));
                            console.log(JSON.stringify(data));
                            this.router.navigate(['menu']) ; 
                         });
                            break;
                        }
                        case -1: {
                            this.makeToast("Login incorrect !");
                            break;
                        }
                    }

                })
            }

        } catch (error) {
            console.log(error.stack);
            console.log(error.message);
        }
    }

    async makeToast(message: string) {
        let x = await this.toast.create({
            message: message,
            duration: 3000
        });
        x.present();
    }

    direct() {
        this.router.navigate(['detail-tournee']);
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
            console.log('login success');
        }).catch(err => {
            console.error('login failed', err);
        });


    }

    test_1_odoo() {
        this.router.navigate(['map']);
    }

}
