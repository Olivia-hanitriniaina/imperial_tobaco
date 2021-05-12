import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Database_manager } from '../model/DAO/database_manager.model';
import { LoadingController } from '@ionic/angular';

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
  

  constructor(private loader : LoadingController, private http : HttpClient, private dbm : Database_manager) { 

  }

  test_sync() { 
    this.http.get('../../assets/data.test.json').subscribe((data: any) => {

      let size = data.to_offline.length;

      for (var i = 0; i < size; i++) {
        if (data.to_offline[i].action_type == 1) {

          this.dbm.get_columns(data.to_offline[i])
        }

        //insert
        if (data.to_offline[i].action_type == 0) {
          this.dbm.get_columns(data.to_offline[i]);
        }
      }
    });
  }


  async synchronise_as_admin(value: any) {
    const loading = await this.loader.create({
      spinner: null,
      duration: 6000,
      message: 'Synchronisation ...',
      translucent: true,
    }) ;
    loading.present() ; 
    
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
          console.log(data);
          
          //select where login io 
          this.dbm.verify_login(data[i])
            .then(()=>{})
            .catch(e=>alert(e.message));
        }
        loading.dismiss() ;
        alert("Synchronisation des utilisateurs avec succès.");
      }
    }) ;
  }


  synchronise (user : any) {
    this.test_sync();
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
    
            const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type': 'application/json',
                })
            };

          /*  this.http.post(user.url + "/sync/data", big_data, httpOptions ).subscribe((data : any) => {
              if(data.action_type==1){            
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
              }
            }) ;*/
         

        
    })
    .catch(e=>alert(e.message))
    .then(()=>{
    })
  }

  

}
