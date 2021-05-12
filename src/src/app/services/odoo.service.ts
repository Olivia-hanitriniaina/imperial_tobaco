import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Database_manager } from '../model/DAO/database_manager.model';
import { data_for_sync } from '../model/data/data_for_sync.model';
import * as CryptoJs from 'crypto-js' ;
class data_sync {
    user_id : {
        database : String ,
        username : String ,
        password : String
    } 
    data : any ;
    constructor(){}
}

@Injectable({
  providedIn: 'root'
})

export class OdooService {
  

  constructor(private http : HttpClient, private dbm : Database_manager) { 

  }


  synchronise_as_admin(value: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post(value.url + "/sync/firstConnection", value, httpOptions ).subscribe( (data : any) => {
      if(data == "Odoo Server Error") {
        alert ("Login ou mot de passe incorrect.") ;
      }
      else {
        for(var i = 0; i < data.length ; i++) {
          this.dbm.insert_res_users(data[i]) ;
        }
        alert("Synchronisation des utilisateurs avec succès.")
      }
    }) ;
  }


  synchronise (user : any) {
    this.dbm.get_all_table_for_sync().then(table_for_sync => {
      
        let big_data = {
          data : [],
          user_id :{
            database : "",
            username : "",
            password : "",
          } 
        }
        
        let data = new Array() ;
        for(var i = 0; i < table_for_sync.length; i++) {
            this.dbm.get_all_data_for_sync(table_for_sync[i]).then(data_for_sync => {
                data.push(data_for_sync) ;
            })
        }

            big_data.data = data ;
            big_data.user_id.database = user.database ; 
            big_data.user_id.username = user.username ; 
            big_data.user_id.password = user.password ; 

            big_data.user_id.database = "it";
            big_data.user_id.username = "admin";
            big_data.user_id.password = "Admin123";
            big_data.data = [];

            
            const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type': 'application/json',
                })
            };

            this.http.post(user.url + "/sync/data", big_data, httpOptions ).subscribe((data : any) => {
              /*if(data.action_type==1){            
                this.dbm.get_columns(data.table)
                  .then((keys :any )=>{
                    if(keys){
                      this.dbm.updateBatch(data.table,data,keys)
                    } else console.log("mbola tsy misy anaty base le table oe" + data.table);
                  }).catch(e =>alert(e.message));
              }
    
              //insert
              if(data.action_type==0){
                this.dbm.get_columns(data.table)
                  .then((keys : any)=>{
                    if(keys){
                      this.dbm.insertBatch(data.table,data,keys);
                    } else console.log("mbola tsy misy anaty base le table oe" + data.table);
                  }).catch(e => alert(e.message));
              }*/
            }) ;
         

        
    })
    .catch(e=>alert(e.message))
    .then(()=>{
    })
  }

  get_hash(password, salt, rounds) {

    // FIXME: KeyLenBytes is hardcoded
    var h = this.b64trimmed(CryptoJs.PBKDF2(password, salt, {digest : CryptoJs.algo.SHA512, keySize: 512 / 32, iterations : rounds}));
    var joined_hash = ['', 'pbkdf2-sha512', rounds, this.b64trimmed(salt), h].join('$');

    return joined_hash;
  }

  b64trimmed(buf) {
    return buf.toString('base64').replace(/=*$/, '').replace('+', '.');
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

  b64decode(str) {
    // . in Base64?
    str = str.replace('.', '+');
    if (str.length % 4) {
            str += '='.repeat(4 - str.length % 4);
    }
    return new Buffer(str, 'base64');
  }

}
