import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';
import { request_res_partner, request_res_users, request_i_t_activation_autorisee, request_i_t_activite_pos, request_i_t_agence, request_i_t_cible_activation, request_i_t_cible_installation_presentoirs, request_i_t_classification1, request_i_t_classification2, request_i_t_contrat, request_i_t_cooperation_itg, request_i_t_couverture_commerciale, request_i_t_emplacement, request_i_t_enseigne_appartenance, request_i_t_client_grossiste, request_i_t_frequence_approvisionnement, request_i_t_frequence_visite, request_i_t_permanent_posm, request_i_t_preference_animateur, request_i_t_proximite, request_i_t_region, request_i_t_secteur, request_i_t_source_approvisionnement, request_i_t_statut_client, request_i_t_type_client, request_i_t_type_quartier, request_i_t_ville, request_i_t_zone, request_i_t_fournisseur_principale, request_i_t_fournisseur_secondaire, request_i_t_canal, request_i_t_tournee, request_visit_sheet, request_stock_line, request_itg_manufacturer, request_itg_product, request_price_line, request_res_currency, request_pos_audit_line, request_pos_audit_answer, request_pos_audit_criteria, request_plv_line, request_i_t_pos_additional, request_i_t_pos_initial, request_itg_product_type } from 'src/environments/environment';
import { base_data } from '../data/base_data.model';
import { HttpClient } from '@angular/common/http';
import { i_t_activation_autorisee } from '../data/i_t_activation_autorisee.model';
import { i_t_cible_activation } from '../data/i_t_cible_activation.model';
import { i_t_cible_installation_presentoirs } from '../data/i_t_cible_installation_presentoirs.model';
import { i_t_activite_pos } from '../data/i_t_activite_pos.model';
import { i_t_agence } from '../data/i_t_agence.model';
import { i_t_classification1 } from '../data/i_t_classification1.model';
import { i_t_classification2 } from '../data/i_t_classification2.model';
import { i_t_contrat } from '../data/i_t_contrat.model';
import { i_t_cooperation_itg } from '../data/i_t_cooperation_itg.model';
import { i_t_couverture_commerciale } from '../data/i_t_couverture_commerciale.model';
import { i_t_emplacement } from '../data/i_t_emplacement.model';
import { i_t_enseigne_appartenance } from '../data/i_t_enseigne_appartenance.model';
import { i_t_frequence_approvisionnement } from '../data/i_t_frequence_approvisionnement.model';
import { i_t_frequence_visite } from '../data/i_t_frequence_visite.model';
import { i_t_permanent_posm } from '../data/i_t_permanent_posm.model';
import { i_t_preference_animateur } from '../data/it_preference_animateur.model';
import { i_t_proximite } from '../data/i_t_proximite.model';
import { i_t_region } from '../data/i_t_region.model';
import { i_t_secteur } from '../data/i_t_secteur.model';
import { i_t_source_approvisionnement } from '../data/i_t_source_approvisionnement.model';
import { i_t_type_client } from '../data/i_t_type_client.model';
import { i_t_type_quartier } from '../data/i_t_type_quartier.model';
import { i_t_ville } from '../data/i_t_ville.model';
import { i_t_zone } from '../data/i_t_zone.model';
import { i_t_fournisseur_secondaire } from '../data/i_t_fournisseur_secondaire.model';
import { i_t_fournisseur_principale } from '../data/i_t_fournisseur_principale.model';
import { res_users } from '../data/res_users.model';
import { stringify } from '@angular/compiler/src/util';
import { res_partner } from '../data/res_partner.model';
import { i_t_canal } from '../data/i_t_canal.model';
import { i_t_tournee } from '../data/i_t_tournee.model';
import { visit_sheet } from '../data/visit_sheet.model';
import { ThrowStmt } from '@angular/compiler';
import { i_t_pos_initial } from '../data/i_t_pos_initial.model';
import { i_t_pos_additional } from '../data/i_t_pos_additional.model';
import { promise } from 'protractor';
import { itg_product_type } from '../data/itg_product_type.model';
import { itg_product } from '../data/itg_product.model';
import { stock_line } from '../data/stock_line.model';
import { price_line } from '../data/price_line.model';
import { itg_manufacturer } from '../data/itg_manufacturer.model';
import { pos_audit_criteria } from '../data/pos_audit_criteria.model';
import { pos_audit_answer } from '../data/pos_audit_answer.model';
import { pos_audit_line } from '../data/pos_audit_line.model';
import { plv_line } from '../data/plv_line.model';

@Injectable()
export class Database_manager {

    constructor( private sqlite : SQLite, private http : HttpClient ) {
        
    }

    public init_database() : Promise<SQLiteObject> {
        return this.sqlite.create({
            name : "imp_tob[1].db" ,
            location : 'default'
        })
    }

    init_all_table() {
        
       this.init_database().then((db : SQLiteObject) => {
            db.executeSql(request_res_partner, [])
                .then(()=>console.log("tafa le db request_res_partner"))
                .catch(e=> console.log(e)) ;
                
            db.executeSql(request_res_users, [])
            .then(()=>console.log("tafa le db request_res_users"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_activation_autorisee, [])
                .then(()=>console.log("tafa le db request_i_t_activation_autorisee"))
                .catch(e=> console.log(e)) ;
                
            db.executeSql(request_i_t_activite_pos, [])
            .then(()=>console.log("tafa le db request_i_t_activite_pos"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_agence, [])
                .then(()=>console.log("tafa le db request_i_t_agence"))
                .catch(e=> console.log(e)) ;
                
            db.executeSql(request_i_t_cible_activation, [])
            .then(()=>console.log("tafa le db request_i_t_cible_activation"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_cible_installation_presentoirs, [])
                .then(()=>console.log("tafa le db request_i_t_cible_installation_presentoirs"))
                .catch(e=> console.log(e)) ;
                
            db.executeSql(request_i_t_classification1, [])
            .then(()=>console.log("tafa le db request_i_t_classification1"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_classification2, [])
                .then(()=>console.log("tafa le db request_i_t_classification2"))
                .catch(e=> console.log(e)) ;
                
            db.executeSql(request_i_t_contrat, [])
            .then(()=>console.log("tafa le db request_i_t_contrat"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_cooperation_itg, [])
                .then(()=>console.log("tafa le db request_i_t_cooperation_itg"))
                .catch(e=> console.log(e)) ;
                
            db.executeSql(request_i_t_couverture_commerciale, [])
            .then(()=>console.log("tafa le db request_i_t_couverture_commerciale"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_emplacement, [])
                .then(()=>console.log("tafa le db request_i_t_emplacement"))
                .catch(e=> console.log(e)) ;
                
            db.executeSql(request_i_t_enseigne_appartenance, [])
            .then(()=>console.log("tafa le db request_i_t_enseigne_appartenance"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_client_grossiste, [])
                .then(()=>console.log("tafa le db request_i_t_client_grossiste"))
                .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_fournisseur_principale, [])
            .then(()=>console.log("tafa le db request_i_t_fournisseur_principale"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_fournisseur_secondaire, [])
                .then(()=>console.log("tafa le db request_i_t_fournisseur_secondaire"))
                .catch(e=> console.log(e)) ;
                
            db.executeSql(request_i_t_frequence_approvisionnement, [])
            .then(()=>console.log("tafa le db request_i_t_frequence_approvisionnement"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_frequence_visite, [])
                .then(()=>console.log("tafa le db request_i_t_frequence_visite"))
                .catch(e=> console.log(e)) ;
                
            db.executeSql(request_i_t_permanent_posm, [])
            .then(()=>console.log("tafa le db request_i_t_permanent_posm"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_preference_animateur, [])
                .then(()=>console.log("tafa le db request_i_t_preference_animateur"))
                .catch(e=> console.log(e)) ;
                
            db.executeSql(request_i_t_proximite, [])
            .then(()=>console.log("tafa le db request_i_t_proximite"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_region, [])
                .then(()=>console.log("tafa le db request_i_t_region"))
                .catch(e=> console.log(e)) ;
                
            db.executeSql(request_i_t_secteur, [])
            .then(()=>console.log("tafa le db request_i_t_secteur"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_source_approvisionnement, [])
                .then(()=>console.log("tafa le db request_i_t_source_approvisionnement"))
                .catch(e=> console.log(e)) ;
                
            db.executeSql(request_i_t_statut_client, [])
            .then(()=>console.log("tafa le db request_i_t_statut_client"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_type_client, [])
                .then(()=>console.log("tafa le db request_i_t_type_client"))
                .catch(e=> console.log(e)) ;
                
            db.executeSql(request_i_t_type_quartier, [])
            .then(()=>console.log("tafa le db request_i_t_type_quartier"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_ville, [])
                .then(()=>console.log("tafa le db request_i_t_ville"))
                .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_zone, [])
            .then(()=>console.log("tafa le db request_i_t_zone"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_canal, [])
            .then(()=>console.log("tafa le db request_i_t_canal"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_tournee, [])
            .then(()=>console.log("tafa le db request_i_t_tournee"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_pos_additional, [])
            .then(()=>console.log("tafa le db request_i_t_pos_additional"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_i_t_pos_initial, [])
            .then(()=>console.log("tafa le db request_i_t_pos_initial"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_visit_sheet, [])
            .then(()=>console.log("tafa le db request_visit_sheet"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_stock_line, [])
            .then(()=>console.log("tafa le db request_stock_line"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_itg_manufacturer, [])
            .then(()=>console.log("tafa le db request_itg_manufacturer"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_itg_product, [])
            .then(()=>console.log("tafa le db request_itg_product"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_itg_product_type, [])
            .then(()=>console.log("tafa le db request_itg_product_type"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_price_line, [])
            .then(()=>console.log("tafa le db request_price_line"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_res_currency, [])
            .then(()=>console.log("tafa le db request_res_currency"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_pos_audit_line, [])
            .then(()=>console.log("tafa le db request_pos_audit_line"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_pos_audit_answer, [])
            .then(()=>console.log("tafa le db request_pos_audit_answer"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_pos_audit_criteria, [])
            .then(()=>console.log("tafa le db request_pos_audit_criteria"))
            .catch(e=> console.log(e)) ;

            db.executeSql(request_plv_line, [])
            .then(()=>console.log("tafa le db request_plv_line"))
            .catch(e=> console.log(e)) ;

            this.http.get("../../assets/json/res_user.test.json").subscribe((data : Array<res_users>) => {
                let sql_insert : string = "insert into res_users (active, login, password, company_id, partner_id, share, write_uid, create_uid, action_id, signature, password_crypt, alias_id, sale_team_id, target_sales_done, target_sales_won) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) " ;
                for(var i = 0; i<data.length;i++){     
                    db.executeSql (sql_insert, [
                        data[i].active ,
                        data[i].login ,
                        data[i].password ,
                        data[i].company_id ,
                        data[i].partner_id ,
                        data[i].share ,
                        data[i].write_uid ,
                        data[i].create_uid ,
                        data[i].action_id ,
                        data[i].signature ,
                        data[i].password_crypt ,
                        data[i].alias_id ,
                        data[i].sale_team ,
                        data[i].target_sales_done ,
                        data[i].target_sales_won ,
                    ]) . then (() => {
                        console.log ('insert res_user with succes \n') ;
                    })
                    .catch (e => {
                        console.log ('Error on insert res_user \n' + JSON.stringify(e)) ;
                    })
                }
            });

        }) ;
    }

    init_table_data(){
       this.init_database().then( ( db : SQLiteObject ) => {

                this.http.get("../../assets/json/activation_autorisee.test.json").subscribe( (data : Array<i_t_activation_autorisee>) => {
                    for(var i = 0; i<data.length;i++){
                        this.insert_basic_data("i_t_activation_autorisee", data[i]) ;
                    }
                });

                this.http.get("../../assets/json/activite_pos.test.json").subscribe((data : Array<i_t_activite_pos>) => {
                let sql_insert : string = "insert into i_t_activite_pos (create_uid, name, canal_id, write_uid) values (?, ?, ?, ?) " ;
                    for(var i = 0; i<data.length;i++){     
                        db.executeSql (sql_insert, [
                            data[i].create_uid ,
                            data[i].name ,
                            data[i].canal_id,
                            data[i].write_uid ,
                        ]) . then (() => {
                            console.log ('insert i_t_activite_pos with succes \n') ;
                        })
                        .catch (e => {
                            console.log ('Error on insert i_t_activite_pos \n' + JSON.stringify (e) ) ;
                        })    
                        }
                    });
            
                    this.http.get("../../assets/json/agence.test.json").subscribe((data : Array<i_t_agence>) => {
                    let sql_insert : string = "insert into i_t_agence (create_uid, code, name, write_uid, region_id) values (?, ?, ?, ?, ?) " ;
                    for(var i = 0; i<data.length;i++){        
                        db.executeSql (sql_insert, [
                            data[i].create_uid ,
                            data[i].code,
                            data[i].name ,
                            data[i].write_uid ,
                            data[i].region_id,
                        ]) . then (() => {
                            console.log ('insert i_t_agence with succes \n') ;
                        })
                        .catch (e => {
                            console.log ('Error on insert i_t_agence \n' + JSON.stringify (e) ) ;
                        })      
                        }
                    });
            
                    this.http.get("../../assets/json/cible_activation.test.json").subscribe((data : Array<i_t_cible_activation>) => {
                    for(var i = 0; i<data.length;i++){                 
                            this.insert_basic_data("i_t_cible_activation", data[i]) ;           
                        }
                    });
            
                    this.http.get("../../assets/json/cible_installation_presentoire.test.json").subscribe((data : Array<i_t_cible_installation_presentoirs>) => {
                    for(var i = 0; i<data.length;i++){                 
                            this.insert_basic_data("i_t_cible_installation_presentoirs", data[i]) ;       
                        }
                    });
            
                    this.http.get("../../assets/json/classification1.test.json").subscribe((data : Array<i_t_classification1>) => {
                    for(var i = 0; i<data.length;i++){                 
                            this.insert_basic_data("i_t_classification1", data[i]) ;           
                        }
                    });
            
                    this.http.get("../../assets/json/classification2.test.json").subscribe((data : Array<i_t_classification2>) => {
                    for(var i = 0; i<data.length;i++){                 
                            this.insert_basic_data("i_t_classification2", data[i]) ;             
                        }
                    });
            
                    this.http.get("../../assets/json/contrat.test.json").subscribe((data : Array<i_t_contrat>) => {
                    for(var i = 0; i<data.length;i++){                 
                        let sql_insert : string = "insert into i_t_contrat (create_uid, name,write_uid, date_debut_contrat, date_fin_contrat) values (?, ?, ?, ?, ?) " ;
                        for(var i = 0; i<data.length;i++)
                        { 
                            db.executeSql (sql_insert, [
                                data[i].create_uid ,
                                data[i].name,
                                data[i].write_uid ,
                                data[i].date_debut_contrat ,
                                data[i].date_fin_contrat ,
                            ]) . then (() => {
                                console.log ('insert i_t_contrat with succes \n') ;
                            })
                            .catch (e => {
                                console.log ('Error on insert i_t_contrat \n' + JSON.stringify (e) ) ;
                            })
                        }
                        }
                    });
            
                    this.http.get("../../assets/json/cooperation_itg.test.json").subscribe((data : Array<i_t_cooperation_itg>) => {
                    for(var i = 0; i<data.length;i++){                 
                            this.insert_basic_data("i_t_cooperation_itg", data[i]) ;             
                        }
                    });
            
                    this.http.get("../../assets/json/couverture_commerciale.test.json").subscribe((data : Array<i_t_couverture_commerciale>) => {
                    for(var i = 0; i<data.length;i++){                 
                            this.insert_basic_data("i_t_couverture_commerciale", data[i]) ;             
                        }
                    });
            
                    this.http.get("../../assets/json/emplacement.test.json").subscribe((data : Array<i_t_emplacement>) => {
                    for(var i = 0; i<data.length;i++){                
                            this.insert_basic_data("i_t_emplacement", data[i]) ;  
                        }
                    });
            
                    this.http.get("../../assets/json/enseigne_appartenance.test.json").subscribe((data : Array<i_t_enseigne_appartenance>) => {
                    for(var i = 0; i<data.length;i++){                 
                            this.insert_basic_data("i_t_enseigne_appartenance", data[i]) ;           
                        }
                    });
            
                    this.http.get("../../assets/json/fournisseur_principale.test.json").subscribe((data : Array<i_t_fournisseur_principale>) => {
                        for(var i = 0; i<data.length;i++){                 
                            this.insert_basic_data("i_t_fournisseur_principale", data[i]) ;           
                        }
                    });
            
                    this.http.get("../../assets/json/fournisseur_secondaire.test.json").subscribe((data : Array<i_t_fournisseur_secondaire>) => {
                    for(var i = 0; i<data.length;i++){                 
                            this.insert_basic_data("i_t_fournisseur_secondaire", data[i]) ;           
                        }
                    });
            
                    this.http.get("../../assets/json/frequence_approvisionnement.test.json").subscribe((data : Array<i_t_frequence_approvisionnement>) => {
                    for(var i = 0; i<data.length;i++){                 
                            this.insert_basic_data("i_t_frequence_approvisionnement", data[i]) ;          
                        }
                    });
            
                    this.http.get("../../assets/json/frequence_visite.test.json").subscribe((data : Array<i_t_frequence_visite>) => {
                    for(var i = 0; i<data.length;i++){                 
                            this.insert_basic_data("i_t_frequence_visite", data[i]) ;          
                        }
                    });
            
                    this.http.get("../../assets/json/permanent_posm.test.json").subscribe((data : Array<i_t_permanent_posm>) => {
                    for(var i = 0; i<data.length;i++){                 
                            this.insert_basic_data("i_t_permanent_posm", data[i]) ;             
                        }
                    });
            
                    this.http.get("../../assets/json/preference_animateur.test.json").subscribe((data : Array<i_t_preference_animateur>) => {
                    for(var i = 0; i<data.length;i++){                 
                            this.insert_basic_data("i_t_preference_animateur", data[i]) ;            
                        }
                    });
            
                    this.http.get("../../assets/json/proximite.test.json").subscribe((data : Array<i_t_proximite>) => {
                    for(var i = 0; i<data.length;i++){                 
                            this.insert_basic_data("i_t_proximite", data[i]) ;             
                        }
                    });

                    this.http.get("../../assets/json/canal.test.json").subscribe((data : Array<i_t_canal>) => {
                        for(var i = 0; i<data.length;i++){                 
                                this.insert_basic_data("i_t_canal", data[i]) ;             
                            }
                    });


                    //MANDE
                this.http.get("../../assets/json/region.test.json").subscribe((data : Array<i_t_region>) => { 
                    let sql_insert : string = "insert into i_t_region (create_uid, code, name, write_uid) values (?, ?, ?, ?) " ;
                    for(var i = 0; i<data.length;i++)
                    { 
                        db.executeSql (sql_insert, [
                            data[i].create_uid ,
                            data[i].code,
                            data[i].name ,
                            data[i].write_uid ,
                        ]) . then (() => {
                            console.log ('insert i_t_region with succes \n') ;
                        })
                        .catch (e => {
                            console.log ('Error on insert i_t_region \n' + JSON.stringify (e) ) ;
                        })
                    }
                    
                });
                //MANDE
                    
                    
                this.http.get("../../assets/json/itg_product_type.test.json").subscribe((data : Array<itg_product_type>) => {
                    let sql_insert : string = "insert into i_t_secteur (create_uid, name, write_uid, code) values (?, ?, ?, ?) " ;
                    for(var i = 0; i<data.length;i++){   
                        db.executeSql (sql_insert, [
                            data[i].create_uid ,
                            data[i].name ,
                            data[i].write_uid ,
                            data[i].code
                        ]) . then (() => {
                            console.log ('insert i_t_secteur with succes \n') ;
                        }).catch (e => {
                            console.log ('Error on insert itg_product_type \n' + JSON.stringify (e) ) ;
                        }) 
                    }
                });

                this.http.get("../../assets/json/itg_product.test.json").subscribe((data : Array<itg_product>) => {
                    let sql_insert : string = "insert into itg_product (id, create_uid, name, write_uid, begin_date, end_date, retailer_unit_sale_price, retailer_pqt_sale_price, grs_cost_price, tax_status_id, dmg_sale_price, brand_id, dmg_cost_price, active, grs_sale_price, manufacturer_id, ref, product_type_code, product_type) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) " ;
                    for(var i = 0; i<data.length;i++){   
                        db.executeSql (sql_insert, [
                            data[i].id,
                            data[i].create_uid ,
                            data[i].name ,
                            data[i].write_uid ,
                            data[i].begin_date,
                            data[i].end_date ,
                            data[i].retailer_unit_sale_price ,
                            data[i].retailer_pqt_sale_price ,
                            data[i].grs_cost_price,
                            data[i].tax_status_id ,
                            data[i].dmg_sale_price ,
                            data[i].brand_id,
                            data[i].dmg_cost_price ,
                            data[i].active ,
                            data[i].grs_sale_price ,
                            data[i].manufacturer_id,
                            data[i].ref ,
                            data[i].product_type_code ,
                            data[i].product_type
                        ]) . then (() => {
                            console.log ('insert itg_product with succes \n') ;
                        }).catch (e => {
                            console.log ('Error on insert itg_product \n' + JSON.stringify (e) ) ;
                        }) 
                    }
                });


        this.http.get("../../assets/json/secteur.test.json").subscribe((data : Array<i_t_secteur>) => {
            let sql_insert : string = "insert into i_t_secteur (create_uid, name, write_uid, zone_id) values (?, ?, ?, ?) " ;
            for(var i = 0; i<data.length;i++){   
                db.executeSql (sql_insert, [
                    data[i].create_uid ,
                    data[i].name ,
                    data[i].write_uid ,
                    data[i].zone_id
                ]) . then (() => {
                    console.log ('insert i_t_secteur with succes \n') ;
                }).catch (e => {
                    console.log ('Error on insert i_t_secteur \n' + JSON.stringify (e) ) ;
                }) 
            }
        });

        this.http.get("../../assets/json/source_approvisionnement.test.json").subscribe((data : Array<i_t_source_approvisionnement>) => {
            for(var i = 0; i<data.length;i++){                 
                this.insert_basic_data("i_t_source_approvisionnement", data[i]) ;             
            }
        });

        this.http.get("../../assets/json/type_client.test.json").subscribe((data : Array<i_t_type_client>) => {
        let sql_insert : string = "insert into i_t_type_client (create_uid, name, write_uid, code) values (?, ?, ?, ?) " ;
            for(var i = 0; i<data.length;i++){                   
                db.executeSql (sql_insert, [
                    data[i].create_uid ,
                    data[i].name ,
                    data[i].write_uid ,
                    data[i].code
                ])  . then (() => { console.log ('insert i_t_type_client with succes \n') ; })
                    .catch (e => { console.log ('Error on insert i_t_type_client \n' + JSON.stringify (e) ) ; })
            }
        });

        this.http.get("../../assets/json/type_quartier.test.json").subscribe((data : Array<i_t_type_quartier>) => {
            for(var i = 0; i<data.length;i++){                 
                this.insert_basic_data("i_t_type_quartier", data[i]) ;             
            }
        });

        this.http.get("../../assets/json/ville.test.json").subscribe((data : Array<i_t_ville>) => {
            for(var i = 0; i<data.length;i++){                 
                this.insert_basic_data("i_t_ville", data[i]) ;             
            }
        });

        this.http.get("../../assets/json/zone.test.json").subscribe((data : Array<i_t_zone>) => {
            let sql_insert : string = "insert into i_t_zone (create_uid, name, write_uid, agence_id) values (?, ?, ?, ?) " ;
            for(var i = 0; i<data.length;i++){     
                db.executeSql (sql_insert, [
                    data[i].create_uid ,
                    data[i].name ,
                    data[i].write_uid ,
                    data[i].agence_id
                ]) . then (() => {
                    console.log ('insert i_t_zone with succes \n') ;
                })
                .catch (e => {
                    console.log ('Error on insert i_t_zone \n' + JSON.stringify(e)) ;
                })
            }
        });

        this.http.get("../../assets/json/tournee.test.json").subscribe((data : Array<i_t_tournee>) => {
            let sql_insert : string = "insert into i_t_tournee (id, create_uid, name, write_uid, commercial_id, start_date, end_date, date, state) values (?, ?, ?, ?, ?, ?, ?, ?, ?) " ;
            for(var i = 0; i<data.length;i++){     
                db.executeSql (sql_insert, [
                    data[i].id,
                    data[i].create_uid ,
                    data[i].name ,
                    data[i].write_uid ,
                    data[i].commercial_id ,
                    data[i].start_date,
                    data[i].end_date,
                    data[i].date,
                    data[i].state
                ]) . then (() => {
                    console.log ('insert i_t_zone with succes \n') ;
                })
                .catch (e => {
                    console.log ('Error on insert i_t_zone \n' + JSON.stringify(e)) ;
                })
            }
        });

        this.http.get("../../assets/json/pos_initial.test.json").subscribe((data : Array<i_t_pos_initial>) => {
            let sql_insert : string = "insert into i_t_pos_initial (id, create_uid, name, write_uid, sequence, visite, tour_id, partner_id) values (?, ?, ?, ?, ?, ?, ?, ?) " ;
            for(var i = 0; i<data.length;i++){     
                db.executeSql (sql_insert, [
                    data[i].id,
                    data[i].create_uid ,
                    data[i].name ,
                    data[i].write_uid ,
                    data[i].sequence ,
                    data[i].visite,
                    data[i].tour_id,
                    data[i].partner_id
                ]) . then (() => {
                    console.log ('insert i_t_pos_initial with succes \n') ;
                })
                .catch (e => {
                    console.log ('Error on insert i_t_pos_initial \n' + JSON.stringify(e)) ;
                })
            }
        });


        this.http.get("../../assets/json/pos_additional.test.json").subscribe((data : Array<i_t_pos_additional>) => {
            let sql_insert : string = "insert into i_t_pos_additional (id, create_uid, name, write_uid, sequence, visite, tour_id, partner_id) values (?, ?, ?, ?, ?, ?, ?, ?) " ;
            for(var i = 0; i<data.length;i++){     
                db.executeSql (sql_insert, [
                    data[i].id,
                    data[i].create_uid ,
                    data[i].name ,
                    data[i].write_uid ,
                    data[i].sequence ,
                    data[i].visite,
                    data[i].tour_id,
                    data[i].partner_id
                ]) . then (() => {
                    console.log ('insert i_t_pos_additional with succes \n') ;
                })
                .catch (e => {
                    console.log ('Error on insert i_t_pos_additional \n' + JSON.stringify(e)) ;
                })
            }
        });


        
        this.http.get("../../assets/json/res_partner.test.json").subscribe((data : Array<res_partner>) => {
            let sql_insert : string = "insert into res_partner (id, canal_id, name , company_id , comment , website , color , active 	, street , supplier 	, city , display_name , zip ,title , country_id , commercial_company_name , parent_id , company_name , employee 	, ref , email , is_company 	, function , lang , fax , street2 , barcode , phone , daty, tz , write_uid , customer , create_uid , credit_limit , user_id , mobile , type , partner_share , vat , state_id , commercial_partner_id , date_localization, partner_latitude,partner_longitude, notify_email  , message_last_post  , opt_out 	, message_bounce ,signup_type , signup_expiration  , signup_token , team_id , calendar_last_notif_ack  , type_quartier_id , source_approvisionnement_id , cible_installation_presentoirs_id , numero_telephone2 , numero_telephone3 ,numero_telephone1 ,couverture_commerciale_id , classification2_id , nom_gerant , frequence_approvisionnement_id , enseigne_appartenance_id ,agence_id , activite_pos_id , fournisseur_principal_id , contrat_id , fournisseur_secondaire_id ,  nom_agent_commercial_id , cible_activation_id , state , statut_client_id , permanent_POSM5_id , point_de_vente 	, repere , emplacement_id , cooperation_itg_id ,  proximite_id , frequence_visite_id , permanent_POSM3_id , permanent_POSM1_id , adresse , preference_animateur_id , provider_latitude, zone_id , latitude  , commentaire , longitude , message_warning , permanent_POSM4_id , region_id , nom_pos ,   quartier ,  ville_id , type_client_id , utilisateur_associe_id , permanent_POSM2_id ,   secteur_id , provider_longitude,     code_client , activation_autorisee_id , is_today 	,         classification1_id ,     a_visiter_moved0 ,  visite ,    a_visite 	, a_visiter) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) " ;
            for(var i = 0; i<data.length;i++){
                db.executeSql (sql_insert, [
                    data[i].id,
                    data[i].canal_id,
                    data[i].name  ,
                    data[i].company_id  ,
                    data[i].comment ,
                    data[i].website ,
                    data[i].color  ,
                    data[i].active  ,
                    data[i].street  ,
                    data[i].supplier  ,
                    data[i].city  ,
                    data[i].display_name  ,
                    data[i].zip ,
                    data[i].title  ,
                    data[i].country_id  ,
                    data[i].commercial_company_name  ,
                    data[i].parent_id  ,
                    data[i].company_name  ,
                    data[i].employee  ,
                    data[i].ref  ,
                    data[i].email  ,
                    data[i].is_company  ,
                    data[i].fonction  ,
                    data[i].lang  ,
                    data[i].fax  ,
                    data[i].street2  ,
                    data[i].barcode  ,
                    data[i].phone  ,
                    data[i].daty  ,
                    data[i].tz  ,
                    data[i].write_uid  ,
                    data[i].customer  ,
                    data[i].create_uid  ,
                    data[i].credit_limit  ,
                    data[i].user_id  ,
                    data[i].mobile  ,
                    data[i].type ,
                    data[i].partner_share  ,
                    data[i].vat  ,
                    data[i].state_id  ,
                    data[i].commercial_partner_id  ,
                    data[i].Date_localization  ,
                    data[i].partner_latitude ,
                    data[i].partner_longitude  ,
                    data[i].notify_email  ,
                    data[i].message_last_post  ,
                    data[i].opt_out  ,
                    data[i].message_bounce ,
                    data[i].signup_type  ,
                    data[i].signup_expiration  ,
                    data[i].signup_token  ,
                    data[i].team_id  ,
                    data[i].calendar_last_notif_ack  ,
                    data[i].type_quartier_id  ,
                    data[i].source_approvisionnement_id  ,
                    data[i].cible_installation_presentoirs_id,
                    data[i].numero_telephone2  ,
                    data[i].numero_telephone3 ,
                    data[i].numero_telephone1 ,
                    data[i].couverture_commerciale_id  ,
                    data[i].classification2_id  ,
                    data[i].nom_gerant  ,
                    data[i].frequence_approvisionnement_id,
                    data[i].enseigne_appartenance_id ,
                    data[i].agence_id  ,
                    data[i].activite_pos_id  ,
                    data[i].fournisseur_principal_id  ,
                    data[i].contrat_id  ,
                    data[i].fournisseur_secondaire_id   ,
                    data[i].nom_agent_commercial_id  ,
                    data[i].cible_activation_id  ,
                    data[i].state ,
                    data[i].statut_client_id  ,
                    data[i].permanent_POSM5_id  ,
                    data[i].point_de_vente  ,
                    data[i].repere  ,
                    data[i].emplacement_id ,
                    data[i].cooperation_itg_id   ,
                    data[i].proximite_id  ,
                    data[i].frequence_visite_id  ,
                    data[i].permanent_POSM3_id  ,
                    data[i].permanent_POSM1_id  ,
                    data[i].adresse  ,
                    data[i].preference_animateur_id  ,
                    data[i].provider_latitude  ,
                    data[i].zone_id  ,
                    data[i].latitude  ,
                    data[i].commentaire ,
                    data[i].longitude,
                    data[i].message_warning  ,
                    data[i].permanent_POSM4_id  ,
                    data[i].region_id  ,
                    data[i].nom_pos    ,
                    data[i].quartier   ,
                    data[i].ville_id  ,
                    data[i].type_client_id  ,
                    data[i].utilisateur_associe_id  ,
                    data[i].permanent_POSM2_id    ,
                    data[i].secteur_id  ,
                    data[i].provider_longitude      ,
                    data[i].code_client  ,
                    data[i].activation_autorisee_id  ,
                    data[i].is_today ,
                    data[i].classification1_id      ,
                    data[i].a_visiter_moved0   ,
                    data[i].visite     ,
                    data[i].a_visite ,
                    data[i].a_visiter
                ]) . then (() => {
                    console.log ('insert res_partner with succes \n') ;
                })
                .catch (e => {
                    console.log ('Error on insert res_partner \n' + JSON.stringify(e)) ;
                })
            }

            

            this.http.get("../../assets/json/stock_line.test.json").subscribe((data : Array<stock_line>) => {
                let sql_insert : string = "insert into stock_line (id, create_uid, write_uid, placement, product_id, visit_sheet_id, available_stock, manufacturer_id, last_visit_stock) values (?, ?, ?, ?, ?, ?, ?, ?, ?) " ;
                for(var i = 0; i<data.length;i++){     
                    db.executeSql (sql_insert, [
                    data[i].id,
                    data[i].create_uid ,
                    data[i].write_uid ,
                    data[i].placement ,
                    data[i].product_id,
                    data[i].visit_sheet_id,
                    data[i].available_stock,
                    data[i].manufacturer_id,
                    data[i].last_visit_stock
                    ]) . then (() => {
                        console.log ('insert stock_line with succes \n') ;
                    })
                    .catch (e => {
                        console.log ('Error on insert stock_line \n' + JSON.stringify(e)) ;
                    })
                }
            });

            this.http.get("../../assets/json/itg_manufacturer.test.json").subscribe((data : Array<itg_manufacturer>) => {
                let sql_insert : string = "insert into itg_manufacturer (id, create_uid, name, write_uid, sequence) values (?, ?, ?, ?, ?)" ;
                for(var i = 0; i<data.length;i++){     
                    db.executeSql (sql_insert, [
                    data[i].id,
                    data[i].create_uid ,
                    data[i].name ,
                    data[i].write_uid ,
                    data[i].sequence
                    ]) . then (() => {
                        console.log ('insert itg_manufacturer with succes \n') ;
                    })
                    .catch (e => {
                        console.log ('Error on insert itg_manufacturer \n' + JSON.stringify(e)) ;
                    })
                }
            });

            this.http.get("../../assets/json/price_line.test.json").subscribe((data : Array<price_line>) => {
                let sql_insert : string = "insert into price_line (id, create_uid, name, write_uid, product_id, current_price, visit_sheet_id, manufacturer_id) values (?, ?, ?, ?, ?, ?, ?, ?) " ;
                for(var i = 0; i<data.length;i++){     
                    db.executeSql (sql_insert, [
                    data[i].id,
                    data[i].create_uid ,
                    data[i].name ,
                    data[i].write_uid ,
                    data[i].product_id ,
                    data[i].current_price,
                    data[i].visit_sheet_id,
                    data[i].manufacturer_id
                    ]) . then (() => {
                        console.log ('insert price_line with succes \n') ;
                    })
                    .catch (e => {
                        console.log ('Error on insert price_line \n' + JSON.stringify(e)) ;
                    })
                }
            });

            this.http.get("../../assets/json/visit_sheet.test.json").subscribe((data : Array<visit_sheet>) => {
                let sql_insert : string = "insert into visit_sheet (id, create_uid, name, write_uid, page_number_total, show_btn_end_visit, visit_duration, partner_id, user_id, state, provider_longitude, begin_datetime, next_visit_goal, provider_latitude, end_datetime, hide_btn_next_next_page, tour_id, visit_duration_str, pos_initial, region_id, secteur_id, agence_id, zone_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) " ;
                for(var i = 0; i<data.length;i++){     
                    db.executeSql (sql_insert, [
                        data[i].id,
                        data[i].create_uid ,
                        data[i].name,
                        data[i].write_uid ,
                        data[i].page_number_total ,
                        data[i].show_btn_end_visit ,
                        data[i].visit_duration ,
                        data[i].partner_id ,
                        data[i].user_id ,
                        data[i].state ,
                        data[i].provider_longitude ,
                        data[i].begin_datetime ,
                        data[i].next_visit_goal ,
                        data[i].provider_latitude ,
                        data[i].end_datetime ,
                        data[i].hide_btn_next_next_page ,
                        data[i].tour_id ,
                        data[i].visit_duration_str ,
                        data[i].pos_initial ,
                        data[i].region_id ,
                        data[i].secteur_id ,
                        data[i].agence_id ,
                        data[i].zone_id ,
                    ]) . then (() => {
                        console.log ('insert visit_sheet with succes \n') ;
                    })
                    .catch (e => {
                        console.log ('Error on insert visit_sheet \n' + JSON.stringify(e)) ;
                    })
                }
            });

            this.http.get("../../assets/json/pos_audit_criteria.test.json").subscribe((data : Array<pos_audit_criteria>) => {
                let sql_insert : string = "insert into pos_audit_criteria (id, create_uid, name, write_uid, create_date, write_date, active) values (?, ?, ?, ?, ?, ?, ?) " ;
                for(var i = 0; i<data.length;i++){     
                    db.executeSql (sql_insert, [
                        data[i].id,
                        data[i].create_uid ,
                        data[i].name,
                        data[i].write_uid ,
                        data[i].create_date ,
                        data[i].write_date ,
                        data[i].active ,
                    ]) . then (() => {
                        console.log ('insert pos_audit_criteria with succes \n') ;
                    })
                    .catch (e => {
                        console.log ('Error on insert pos_audit_criteria \n' + JSON.stringify(e)) ;
                    })
                }
            });

            this.http.get("../../assets/json/pos_audit_answer.test.json").subscribe((data : Array<pos_audit_answer>) => {
                let sql_insert : string = "insert into pos_audit_answer (id, create_uid, name, write_uid, create_date, write_date, criteria_id) values (?, ?, ?, ?, ?, ?, ?) " ;
                for(var i = 0; i<data.length;i++){     
                    db.executeSql (sql_insert, [
                        data[i].id,
                        data[i].create_uid ,
                        data[i].name,
                        data[i].write_uid ,
                        data[i].create_date ,
                        data[i].write_date ,
                        data[i].criteria_id ,
                    ]) . then (() => {
                        console.log ('insert pos_audit_answer with succes \n') ;
                    })
                    .catch (e => {
                        console.log ('Error on insert pos_audit_answer \n' + JSON.stringify(e)) ;
                    })
                }
            });

            this.http.get("../../assets/json/pos_audit_line.test.json").subscribe((data : Array<pos_audit_line>) => {
                let sql_insert : string = "insert into pos_audit_line (id, create_uid, name, write_uid, create_date, write_date, visit_begin_moved0, audit_criteria_id, note, visit_sheet_id, visit_end_moved0, visit_begin, visit_end) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) " ;
                for(var i = 0; i<data.length;i++){     
                    db.executeSql (sql_insert, [
                        data[i].id,
                        data[i].create_uid ,
                        data[i].name,
                        data[i].write_uid ,
                        data[i].create_date ,
                        data[i].write_date ,
                        data[i].visit_begin_moved0,
                        data[i].audit_criteria_id ,
                        data[i].note,
                        data[i].visit_sheet_id ,
                        data[i].visit_end_moved0 ,
                        data[i].visit_begin ,
                        data[i].visit_end ,
                    ]) . then (() => {
                        console.log ('insert pos_audit_line with succes \n') ;
                    })
                    .catch (e => {
                        console.log ('Error on insert pos_audit_line \n' + JSON.stringify(e)) ;
                    })
                }
            });

            this.http.get("../../assets/json/plv_line.test.json").subscribe((data : Array<plv_line>) => {
                let sql_insert : string = "insert into plv_line (id, create_uid, product_id, visit_sheet_id, manufacturer_id, quantity, create_date, name, write_uid, write_date) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) " ;
                    for(var i = 0; i<data.length;i++){     
                        db.executeSql (sql_insert, [
                            data[i].id ,
                            data[i].create_uid ,
                            data[i].product_id,
                            data[i].visit_sheet_id ,
                            data[i].manufacturer_id ,
                            data[i].quantity ,
                            data[i].create_date,
                            data[i].name ,
                            data[i].write_uid ,
                            data[i].write_date,
                        ]) . then (() => {
                            console.log ('insert plv_line with succes \n') ;
                        })
                        .catch (e => {
                            console.log ('Error on insert plv_line \n' + JSON.stringify (e) ) ;
                        })    
                        }
                    });
       
            
        });
            
       })
    }

    insert_basic_data (nom_table : string, data : base_data) {
        let sql_insert : string = "insert into "+ nom_table +" (create_uid, name, write_uid) values (?, ?, ?) " ;
        this.init_database().then( (db : SQLiteObject) => {
            db.executeSql (sql_insert, [
                data.create_uid ,
                data.name ,
                data.write_uid ,
            ])
        }) . then (() => {
            console.log ('insert '+nom_table+' with succes \n') ;
        })
        .catch (e => {
            console.log ('Error on insert '+nom_table+' \n' + JSON.stringify (e) ) ;
        }) . catch (e => {
            console.log('Error on connexion '+nom_table+' \n' + JSON.stringify (e) ) ;
        })
    }

    insert_res_data (sql : string) : Promise<any> {

        return this.init_database().then( (db : SQLiteObject) => {
            return db.executeSql (sql, [])
        }) . then (() => {
            console.log ('insert res with succes \n') ;
        }) .catch (e => {
            console.log ('Error on insert res \n' + JSON.stringify(e)) ;
        }) . catch (e => {
            console.log('Error on connexion res \n' + JSON.stringify(e)) ;
        })
    }

    update_res_data (sql : string) : Promise<any> {

        return this.init_database().then( (db : SQLiteObject) => {
            return db.executeSql (sql, [])
        }) . then (() => {
            console.log ('update res with succes \n') ;
        }) .catch (e => {
            console.log ('Error on update res \n' + JSON.stringify(e)) ;
        }) . catch (e => {
            console.log('Error on connexion res \n' + JSON.stringify(e)) ;
        }) ;
    }

    get_res_partner() {
        return this.init_database().then((db : SQLiteObject) => {
            let sql_select = "select res_partner.id, res_partner.name as name, i_t_region.name as region_id, i_t_agence.name as agence_id, i_t_zone.name as zone_id, i_t_secteur.name as secteur_id, res_users.signature as nom_agent_commercial_id, res_partner.nom_pos as nom_pos, res_partner.nom_gerant as nom_gerant, res_partner.adresse as adresse, res_partner.state_id as state_id from res_partner left join i_t_region on res_partner.region_id = i_t_region.id left join i_t_agence on res_partner.agence_id = i_t_agence.id left join i_t_zone on res_partner.zone_id = i_t_zone.id left join i_t_secteur on res_partner.secteur_id = i_t_secteur.id left join res_users on res_partner.user_id = res_users.id" ;
            let sql2 = "select res_partner.id, res_partner.name as name, i_t_region.name as region_id, i_t_agence.name as agence_id, i_t_zone.name as zone_id, i_t_secteur.name as secteur_id, i_t_ville.name as ville_id, res_users.signature as nom_agent_commercial_id, res_partner.nom_pos as nom_pos, res_partner.nom_gerant as nom_gerant, res_partner.adresse as adresse, res_partner.state_id as state_id from res_partner left join i_t_ville on res_partner.ville_id = i_t_ville.id left join i_t_region on res_partner.region_id = i_t_region.id left join i_t_agence on res_partner.agence_id = i_t_agence.id left join i_t_zone on res_partner.zone_id = i_t_zone.id left join i_t_secteur on res_partner.secteur_id = i_t_secteur.id left join res_users on res_partner.user_id = res_users.id" ;
            let data_return = [] ;
            return db.executeSql(sql2, [])
                .then (data => {
                    console.log(data) ;
                    if(data.rows.length > 0) {
                        for(var i = 0; i<data.rows.length; i++) {
                            data_return.push(data.rows.item(i)) ;
                        }
                        console.log(JSON.stringify(data_return)) ;
                        return data_return ;
                    }
                    
                })
                .catch(e => {
                    console.log('Error on select \n' + JSON.stringify(e)) ;
                })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e)) ;
        });
    }



    select_basic_data (nom_table : string) : Promise<any> {
        
        return this.init_database().then ( (db : SQLiteObject) => {
            let sql_select : string = "select * from " + nom_table + " " ;
            let data_return = [] ;
            return db.executeSql (sql_select, []).then((data) => {
                if(data.rows.length > 0) {
                    for(var i = 0; i<data.rows.length; i++) {
                        data_return.push(data.rows.item(i)) ;
                    }
                }
                return data_return ;
            }).catch(e => {
                console.log('Error on select \n' + JSON.stringify (e)) ;
            })
        }).catch (e => {
            console.log('Error on connexion \n' + JSON.stringify (e)) ;
        })
    }

     select_max_basic_data (nom_table : string) : Promise<any> {
        
        return this.init_database().then ( (db : SQLiteObject) => {
            let sql_select : string = "select MAX(id) + 1 as max from " + nom_table + " " ;
            return db.executeSql (sql_select, []).then((data) => {
                if(data.rows.length > 0) {
                  return data.rows.item(0) ;
                }
            }).catch(e => {
                console.log('Error on select \n' + JSON.stringify (e)) ;
            }) ;
        }).catch (e => {
            console.log('Error on connexion \n' + JSON.stringify (e)) ;
        }) ;
    }

    checkLogin(log : string, pass : string) : Promise<any> {
        return this.init_database().then ( (db : SQLiteObject) => {
            let sql_select : string = "select * from res_users where login = ? ";
            return db.executeSql (sql_select, [log]).then((data) => {
                console.log(data) ;
                if(data.rows.length > 0) {
                    if (data.rows.item(0).password == pass) {
                        return db.executeSql("update res_users set active = 1 where login = ? ", [log]).then (() => {
                            return 1 ;
                        }).catch (e => {
                            console.log('Error on update \n' + stringify(e)) ;
                        })
                    }
                    else return 0 ;
                }
                else return -1 ; 
            }).catch(e => {
                console.log('Error on select \n' + stringify(e)) ;
            })
        }).catch (e => {
            console.log('Error on connexion \n' + stringify(e)) ;
        })
    }

    select_res_user_active() : Promise <any> {
        return this.init_database().then ( (db : SQLiteObject) => {
            let sql_select : string = "select * from res_users where active = 1 " ;
            let data_return : res_users  ;
            return db.executeSql (sql_select, []).then((data) => {
                if(data.rows.length > 0) {
                    data_return = data.rows.item(0) ;
                  return  data_return ;
                }
            }).catch(e => {
                console.log('Error on select \n' + JSON.stringify (e)) ;
            })
        }).catch (e => {
            console.log('Error on connexion \n' + JSON.stringify (e)) ;
        })
    }

    get_res_partner_data(id : number) : Promise<any> {
        console.log("1") ;
        return this.init_database().then ( (db : SQLiteObject) => {
            console.log("2") ;
            let sql_select : string = "select res_partner.photo, res_partner.name, i_t_region.name as region, i_t_agence.name as agence, i_t_zone.name as zone, res_users.signature as signature, i_t_secteur.name as secteur, res_partner.nom_pos, res_partner.nom_gerant, res_partner.adresse, res_partner.repere, res_partner.quartier, i_t_ville.name as ville, res_partner.numero_telephone1, res_partner.numero_telephone2, res_partner.numero_telephone3, i_t_emplacement.name as emplacement, i_t_proximite.name as proximite, i_t_type_quartier.name as type_quartier, res_partner.latitude, res_partner.longitude, i_t_type_client.name as type_client, i_t_activite_pos.name as activite_pos, i_t_enseigne_appartenance.name as enseigne_appartenance, i_t_classification1.name as classification1, i_t_classification2.name as classification2, i_t_couverture_commerciale.name as couverture_commerciale , i_t_frequence_visite.name as frequence_visite, i_t_cible_installation_presentoirs.name as cible_installation_presentoirs, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM1_id) as permanent_POSM1_id, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM2_id) as permanent_POSM2_id, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM3_id) as permanent_POSM3_id, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM4_id) as permanent_POSM4_id, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM5_id) as permanent_POSM5_id, i_t_contrat.name as contrat, i_t_contrat.date_debut_contrat as date_debut_contrat , i_t_contrat.date_fin_contrat as date_fin_contrat, i_t_cooperation_itg.name as cooperation_itg, i_t_activation_autorisee.name as activation_autorisee, i_t_preference_animateur.name as preference_animateur, i_t_canal.name as canal_id ,i_t_frequence_approvisionnement.name as frequence_approvisionnement, i_t_source_approvisionnement.name as source_approvisionnement, i_t_fournisseur_principale.name as fournisseur_principale, i_t_fournisseur_secondaire.name as fournisseur_secondaire, res_partner.commentaire from res_partner  left join i_t_region on res_partner.region_id = i_t_region.id left join i_t_agence on res_partner.agence_id = i_t_agence.id left join i_t_zone on res_partner.zone_id = i_t_zone.id left join i_t_secteur on res_partner.secteur_id = i_t_secteur.id left join i_t_ville on res_partner.ville_id = i_t_ville.id left join i_t_emplacement on res_partner.emplacement_id = i_t_emplacement.id left join i_t_proximite on res_partner.proximite_id = i_t_proximite.id left join i_t_type_quartier on res_partner.type_quartier_id = i_t_type_quartier.id left join i_t_type_client on res_partner.type_client_id = i_t_type_client.id left join i_t_activite_pos on res_partner.activite_pos_id = i_t_activite_pos.id left join i_t_enseigne_appartenance on res_partner.enseigne_appartenance_id = i_t_enseigne_appartenance.id left join i_t_classification1 on res_partner.classification1_id = i_t_classification1.id left join i_t_classification2 on res_partner.classification2_id = i_t_classification2.id left join i_t_couverture_commerciale on res_partner.couverture_commerciale_id = i_t_couverture_commerciale.id left join i_t_frequence_visite on res_partner.frequence_visite_id = i_t_frequence_visite.id left join i_t_cible_installation_presentoirs on res_partner.cible_installation_presentoirs_id = i_t_cible_installation_presentoirs.id left join i_t_permanent_posm on res_partner.permanent_POSM1_id = i_t_permanent_posm.id left join i_t_contrat on res_partner.contrat_id = i_t_contrat.id left join i_t_cooperation_itg on res_partner.cooperation_itg_id = i_t_cooperation_itg.id left join i_t_activation_autorisee on res_partner.activation_autorisee_id = i_t_activation_autorisee.id left join i_t_preference_animateur on res_partner.preference_animateur_id = i_t_preference_animateur.id left join i_t_frequence_approvisionnement on res_partner.frequence_approvisionnement_id = i_t_frequence_approvisionnement.id left join i_t_source_approvisionnement on res_partner.source_approvisionnement_id = i_t_source_approvisionnement.id left join i_t_fournisseur_principale on res_partner.fournisseur_principal_id = i_t_fournisseur_principale.id left join i_t_fournisseur_secondaire on res_partner.fournisseur_secondaire_id = i_t_fournisseur_secondaire.id left join res_users on res_partner.user_id = res_users.id left join i_t_canal on res_partner.canal_id = i_t_canal.id where res_partner.id = " + id ;
            let data_return : any ;
            return db.executeSql (sql_select, []).then((data) => {
                console.log("3") ;
                if(data.rows.length > 0) {
                    console.log("4") ;
                   data_return = data.rows.item(0) ;
                   console.log('data : \n' + JSON.stringify( data_return))
                   return data_return ;
                }
                else {
                    console.log("5") ;
                }
            }).catch(e => {
                console.log('Error on select \n' + JSON.stringify(e)) ;
            })
        }).catch (e => {
            console.log('Error on connexion \n' + JSON.stringify (e)) ;
        })
    }

    get_all_tournee(state : string) : Promise<any> {
        return this.init_database().then ( (db : SQLiteObject) => {

            let sql_select : string = "select * from i_t_tournee where state != ? " ;
            let data_return = [] ;
            return db.executeSql (sql_select, [state]).then((data) => {
                
                if(data.rows.length > 0) {
                    for(var i = 0; i<data.rows.length; i++) {
                        data_return.push(data.rows.item(i)) ;
                    }
                    return data_return ;
                }
                else {
                    console.log("5") ;
                }
            }).catch(e => {
                console.log('Error on select \n' + JSON.stringify(e)) ;
            })
        }).catch (e => {
            console.log('Error on connexion \n' + JSON.stringify (e)) ;
        })
    }

    get_res_partner_data_for_visite() : Promise<any> {
        return this.init_database().then ( (db : SQLiteObject) => {

            let sql_select : string = "select res_partner.id, res_partner.name, res_partner.region_id, res_partner.secteur_id, res_partner.agence_id, res_partner.zone_id from res_partner" ;
            let data_return = [] ;
            return db.executeSql (sql_select, []).then((data) => {
                
                if(data.rows.length > 0) {
                    for(var i = 0; i<data.rows.length; i++) {
                        data_return.push(data.rows.item(i)) ;
                    }
                    return data_return ;
                }
                else {
                    console.log("5") ;
                }
            }).catch(e => {
                console.log('Error on select \n' + JSON.stringify(e)) ;
            })
        }).catch (e => {
            console.log('Error on connexion \n' + JSON.stringify (e)) ;
        })
    }


    select_basic_data_with_id(nom_table : string, id : number) : Promise<any> {
        return this.init_database().then ( (db : SQLiteObject) => {
            let sql_select : string = "select * from " + nom_table + " where id = ?" ;
            return db.executeSql (sql_select, [id]).then((data) => {
                if(data.rows.length > 0) {
                    return data.rows.item(0) ;
                }
            }).catch(e => {
                console.log('Error on select \n' + JSON.stringify (e) ) ;
            })
        }).catch (e => {
            console.log('Error on connexion \n' + JSON.stringify (e) ) ;
        })
    }

    update_status_res_partner(id : number, status : number) : Promise<any> {
        return this.init_database().then ( (db : SQLiteObject) => {
            let sql_select : string = "update res_partner set active = ? where id = ?" ;
            return db.executeSql (sql_select, [status, id]).then((data) => {
                if(data.rows.length > 0) {
                    return data.rows.item(0) ;
                }
            }).catch(e => {
                console.log('Error on update \n' + JSON.stringify (e) ) ;
            })
        }).catch (e => {
            console.log('Error on connexion \n' +  JSON.stringify (e) ) ;
        })
    }

    //TOURNEES

    get_tournee_by_user(table : string, tour_id : number) : Promise<any> {
        return this.init_database().then((db : SQLiteObject) => {
            let query = "select res_partner.id as res_partner_id, res_partner.name as res_partner_name, " + table + ".visite, " + table + ".sequence , i_t_tournee.id, i_t_tournee.name, i_t_tournee.start_date, i_t_tournee.end_date from " + table + " left join res_partner on " + table + ".partner_id = res_partner.id left join i_t_tournee on " + table + ".tour_id = i_t_tournee.id where i_t_tournee.id = ?"
            let data_return = [] ;
            return db.executeSql(query, [tour_id])
                .then (data => {
                    console.log(data) ;
                    if(data.rows.length > 0) {
                        for(var i = 0; i<data.rows.length; i++) {
                            data_return.push(data.rows.item(i)) ;
                        }
                        console.log(JSON.stringify(data_return)) ;
                        return data_return ;
                    }
                   
                })
                .catch(e => {
                    console.log('Error on select \n' + JSON.stringify(e)) ;
                })
        }) ;
    }

    update_tournee_by_id (id : number, status : string) {
        return this.init_database().then((db : SQLiteObject) => {
            let query = "update i_t_tournee set state = ? where id = ?" ;
             return db.executeSql(query, [status,id]).then(data => {
                if(data.rows.length > 0) {
                    return data.rows.item(0) ;
                }
             }).catch(e => {
                console.log('Error on update \n' + JSON.stringify (e) ) ;
            })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify (e) ) ;
        });
    }

    update_visite_res_patrner_by_id(id : number, etat : string) {
        return this.init_database().then((db : SQLiteObject) => {
            let query = "update res_partner set visite = ? where id = ?" ;
             return db.executeSql(query, [etat, id]).then(data => {
                if(data.rows.length > 0) {
                    return data.rows.item(0) ;
                }
             }).catch(e => {
                console.log('Error on update \n' + JSON.stringify (e) ) ;
            })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify (e) ) ;
        });
    }

    get_active_user(){
        return this.init_database().then((db : SQLiteObject) => {
            let sql_select : string = "select res_users.login, res_users.id from res_users where res_users.active = 1" ;
            let data_return = [] ;
            return db.executeSql(sql_select, [])
                .then (data => {
                    console.log(data) ;
                    if(data.rows.length > 0) {
                        for(var i = 0; i<data.rows.length; i++) {
                            data_return.push(data.rows.item(i)) ;
                        }
                        return data_return ;
                    }
                   
                })
                .catch(e => {
                    console.log('Error on select get_all_fiche_visite \n' + JSON.stringify(e)) ;
                })
        }) ;
    }

    get_all_fiche_visite() {
        return this.init_database().then((db : SQLiteObject) => {
            let sql_select : string = "select id as visit_sheet_id, provider_latitude, provider_longitude, (select res_users.login from res_users where res_users.active = 1) as user_id, (select res_partner.name from res_partner where visit_sheet.partner_id = res_partner.id) as partner_id, visit_sheet.begin_datetime, visit_sheet.end_datetime, visit_sheet.state from visit_sheet" ;
            let sql : string = "select visit_sheet.id as visit_sheet_id, (select res_users.login from res_users where res_users.active = 1) as user_id, res_partner.id as res_partner_id, res_partner.name as partner_id, i_t_tournee.start_date as tournee_begin, i_t_tournee.end_date as tournee_end, visit_sheet.begin_datetime as visit_sheet_date_begin, visit_sheet.end_datetime as visit_sheet_date_end, visit_sheet.state , visit_sheet.provider_latitude, visit_sheet.provider_longitude from visit_sheet left join res_partner on visit_sheet.partner_id = res_partner.id left join i_t_tournee on visit_sheet.tour_id = i_t_tournee.id where i_t_tournee.state != 'Clôturé' and visit_sheet.state != 'Clôturé'" ;
            let data_return = [] ;
            return db.executeSql(sql, [])
                .then (data => {
                    console.log(data) ;
                    if(data.rows.length > 0) {
                        for(var i = 0; i<data.rows.length; i++) {
                            data_return.push(data.rows.item(i)) ;
                        }
                        return data_return ;
                    }
                   
                })
                .catch(e => {
                    console.log('Error on select get_all_fiche_visite \n' + JSON.stringify(e)) ;
                })
        }) ;
    }

    get_all_fiche_visite_by_id_tournee(id_tournee : number) {
        return this.init_database().then((db : SQLiteObject) => {
            let sql_select : string = "select id as visit_sheet_id, provider_latitude, provider_longitude, (select res_users.login from res_users where res_users.active = 1) as user_id, (select res_partner.name from res_partner where visit_sheet.partner_id = res_partner.id) as partner_id, visit_sheet.begin_datetime, visit_sheet.end_datetime, visit_sheet.state from visit_sheet" ;
            let sql : string = "select visit_sheet.id as visit_sheet_id, visit_sheet.provider_latitude, visit_sheet.provider_longitude, (select res_users.login from res_users where res_users.active = 1) as user_id, res_partner.id as res_partner_id, res_partner.name as partner_id, i_t_tournee.start_date as tournee_begin, i_t_tournee.end_date as tournee_end, visit_sheet.begin_datetime as visit_sheet_date_begin, visit_sheet.end_datetime as visit_sheet_date_end, visit_sheet.state from visit_sheet left join res_partner on visit_sheet.partner_id = res_partner.id left join i_t_tournee on visit_sheet.tour_id = i_t_tournee.id where i_t_tournee.state != 'Clôturé' and visit_sheet.state != 'Clôturé' and i_t_tournee.id = ? " ;
            let data_return = [] ;
            return db.executeSql(sql, [id_tournee])
                .then (data => {
                    console.log(data) ;
                    if(data.rows.length > 0) {
                        for(var i = 0; i<data.rows.length; i++) {
                            data_return.push(data.rows.item(i)) ;
                        }
                        return data_return ;
                    }
                   
                })
                .catch(e => {
                    console.log('Error on select get_all_fiche_visite \n' + JSON.stringify(e)) ;
                })
        }) ;
    }

    save_position(id : number, position : any) {
        return this.init_database().then((db : SQLiteObject) => {
            let query = "update visit_sheet set provider_latitude = ?, provider_longitude where id = ?" ;
            return db.executeSql(query, [position.latitude, position.longitude, id]).then(()=> {
                
                console.log ('update res with succes \n') ;
            }) .catch (e => {
                console.log ('Error on update res \n' + JSON.stringify(e)) ;
            });
        });
    }

    insert_data_visit_sheet(data, etat : string) {
        return this.init_database().then((db : SQLiteObject) => {
            let query = "insert into visit_sheet (partner_id, pos_initial, provider_latitude, provider_longitude, region_id, secteur_id, agence_id, zone_id, state) values (?, ?, ?, ?, ?, ?, ?, ?, ?) " ;
            return db.executeSql(query, [
                data.partner_id  ,
                data.pos_initial  ,
                data.provider_latitude  ,
                data.provider_longitude  ,
                data.region_id  ,
                data.secteur_id  ,
                data.agence_id  ,
                data.zone_id  ,
                etat ,
            ]).then(()=> {
                console.log ('insert res with succes \n') ;
            }) .catch (e => {
                console.log ('Error on update res \n' + JSON.stringify(e)) ;
            });
        });
    }

    get_res_partner_pos_init_supp() {
        return this.init_database().then((db : SQLiteObject) => {
            let sql_select : string = "select id as visit_sheet_id, (select res_users.login from res_users where res_users.active = 1) as user_id, (select res_partner.name from res_partner where visit_sheet.partner_id = res_partner.id) as partner_id, visit_sheet.begin_datetime, visit_sheet.end_datetime, visit_sheet.state from visit_sheet" ;
            let data_return = [] ;
            return db.executeSql(sql_select, [])
                .then (data => {
                    console.log(data) ;
                    if(data.rows.length > 0) {
                        for(var i = 0; i<data.rows.length; i++) {
                            data_return.push(data.rows.item(i)) ;
                        }
                        return data_return ;
                    }
                   
                })
                .catch(e => {
                    console.log('Error on select get_all_fiche_visite \n' + JSON.stringify(e)) ;
                })
        }) ;
    }   

    get_stock_visit_sheet_by_id_p2(visit_sheet_id : number, partner_id : number) {
        return this.init_database().then((db : SQLiteObject) => {
            let sql_select : string = " select t2.product_id,itg_product.name as product_name,itg_manufacturer.name as manufacturer_name,ifnull(sum(available_stock),0) as available_stock,ifnull(sum(last_visit_stock),0) as last_visit_stock,ifnull(sum(placement),0) as placement, (select sum(placement) from stock_line as t1 where t1.product_id = t2.product_id and visit_sheet_id in(select id from visit_sheet where id in (select id from visit_sheet where partner_id = " + partner_id +" and id < "+ visit_sheet_id+ " order by id desc limit 1 ) and partner_id = "+ partner_id +" )) as last_placement , (select avg(last_visit_stock) as last_visit_stock_avg from stock_line as t3 where t3.product_id=t2.product_id and visit_sheet_id in (select id from visit_sheet where partner_id = "+ partner_id +" order by id Desc limit 4) group by t3.product_id,t3.manufacturer_id) as last_visit_stock_avg from stock_line as t2 join itg_product on itg_product.id= t2.product_id join itg_manufacturer on t2.manufacturer_id = itg_manufacturer.id where visit_sheet_id = "+ visit_sheet_id +" group by t2.product_id,t2.manufacturer_id" ;
            let data_return = [] ;
            console.log("sql_select==>" + sql_select)
            return db.executeSql(sql_select, [])
                .then (data => {
                    console.log('get_stock_visit_sheet_by_id_p2 ==> ' + JSON.stringify(data)) ;
                    if(data.rows.length > 0) {
                        for(var i = 0; i<data.rows.length; i++) {
                            data_return.push(data.rows.item(i)) ;
                        }
                        console.log("valiny"+ data_return);
                        return data_return ;
                    }
                   
                })
                .catch(e => {
                    console.log('Error on select get_stock_visit_sheet_by_id_p2 \n' + JSON.stringify(e)) ;
                }) ;
        }) ;
    }

    get_audit_data_p4() : Promise<any> {
        return this.init_database().then((db : SQLiteObject) => {
            let sql_select : string = "select pos_audit_criteria.id, pos_audit_criteria.name, GROUP_CONCAT(pos_audit_answer.id, '|') as answer_id, pos_audit_criteria.active, GROUP_CONCAT(pos_audit_answer.name, '|') as answer_name from pos_audit_criteria inner join pos_audit_answer on pos_audit_criteria.id = pos_audit_answer.criteria_id group by pos_audit_criteria.name order by pos_audit_criteria.id" ;
            let data_return = [] ;
            console.log("sql_select==>" + sql_select)
            return db.executeSql(sql_select, [])
                .then (data => {
                    console.log('get_n_latest_visit_sheet_id ==> ' + JSON.stringify(data)) ;
                    if(data.rows.length > 0) {
                        for(var i = 0; i<data.rows.length; i++) {
                            data_return.push(data.rows.item(i)) ;
                        }
                        return data_return ;
                    }
                   
                })
                .catch(e => {
                    console.log('Error on select get_n_latest_visit_sheet_id \n' + JSON.stringify(e)) ;
                })
        }) ;
    }

    get_n_last_partner_visit_sheet_id(partner_id : number, visit_sheet_id : number, n : number) {
        return this.init_database().then((db : SQLiteObject) => {
            let sql_select : string = "select visit_sheet.id from visit_sheet where visit_sheet.partner_id = ? and visit_sheet.id != ? order by visit_sheet.id DESC limit ? " ;
            let data_return = [partner_id, visit_sheet_id, n] ;
            console.log("sql_select==>" + sql_select)
            return db.executeSql(sql_select, [])
                .then (data => {
                    console.log('get_n_latest_visit_sheet_id ==> ' + JSON.stringify(data)) ;
                    if(data.rows.length > 0) {
                        for(var i = 0; i<data.rows.length; i++) {
                            data_return.push(data.rows.item(i)) ;
                        }
                        return data_return ;
                    }
                   
                })
                .catch(e => {
                    console.log('Error on select get_n_latest_visit_sheet_id \n' + JSON.stringify(e)) ;
                })
        }) ;
    }

    get_data_for_p5(visit_sheet_id : number){
        return this.init_database().then((db : SQLiteObject) => {
            let sql_select : string =  "SELECT plv_line.manufacturer_id as id_manufacturer, plv_line.product_id as id_product, itg_product.name as name_product ,IFNULL(plv_line.quantity , 0) as quantity  FROM plv_line LEFT JOIN itg_product ON plv_line.product_id = itg_product.id WHERE plv_line.visit_sheet_id = "+ visit_sheet_id +"";
            let data_return = [] ;
            console.log("sql_select==>" + sql_select) ;
            return db.executeSql(sql_select, [])
                .then (data => {
                    console.log('get_data_for_p5 ==> ' + JSON.stringify(data)) ;
                    if(data.rows.length > 0) {
                        for(var i = 0; i<data.rows.length; i++) {
                            data_return.push(data.rows.item(i)) ;
                        }
                        return data_return ;
                    }
                   
                })
                .catch(e => {
                    console.log('Error on select get_data_for_p5 \n' + JSON.stringify(e)) ;
                })
        }) ;
    }
    get_data_for_p6(){
        return this.init_database().then((db : SQLiteObject) => {
            let sql_select : string = "";
            let data_return = [] ;
            console.log("sql_select==>" + sql_select) ;
            return db.executeSql(sql_select, [])
                .then (data => {
                    console.log("get_data_for_p6 ==>" + JSON.stringify(data));
                    if(data.rows.length > 0){
                        for(var i = 0; i<data.rows.length; i++){
                            data_return.push(data.rows.item(i)) ;
                        }
                    }
                    return data_return ; 
                })
                .catch(e => {
                    console.log('Error on select get_data_for_p6 \n' + JSON.stringify(e));
                })
        });
    }
}