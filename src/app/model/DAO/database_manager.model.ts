import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';
import { request_res_partner, request_data_for_sync, request_res_users, request_i_t_activation_autorisee, request_i_t_activite_pos, request_i_t_agence, request_i_t_cible_activation, request_i_t_cible_installation_presentoirs, request_i_t_classification1, request_i_t_classification2, request_i_t_contrat, request_i_t_cooperation_itg, request_i_t_couverture_commerciale, request_i_t_emplacement, request_i_t_enseigne_appartenance, request_i_t_client_grossiste, request_i_t_frequence_approvisionnement, request_i_t_frequence_visite, request_i_t_permanent_posm, request_i_t_preference_animateur, request_i_t_proximite, request_i_t_region, request_i_t_secteur, request_i_t_source_approvisionnement, request_i_t_statut_client, request_i_t_type_client, request_i_t_type_quartier, request_i_t_ville, request_i_t_zone, request_i_t_fournisseur_principale, request_i_t_fournisseur_secondaire, request_i_t_canal, request_i_t_tournee, request_visit_sheet, request_stock_line, request_itg_manufacturer, request_itg_product, request_price_line, request_res_currency, request_pos_audit_line, request_pos_audit_answer, request_pos_audit_criteria, request_plv_line, request_i_t_pos_additional, request_i_t_pos_initial, request_itg_product_type, request_itg_survey, request_itg_survey_label, request_itg_survey_question, four_last_view, request_permanent_posm_res_partner_rel, request_res_users_res_partner_rel, request_visit_survey } from 'src/environments/environment';
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
import { itg_survey } from '../data/itg_survey.model';
import { itg_survey_question } from '../data/itg_survey_questions.model';
import { itg_survey_label } from '../data/itg_survey_label.model';
import {    visit_survey} from '../data/visit_survey.model';
//import * as pbkdf2_sha512 from 'pbkdf2-sha512';
import { Storage } from '@ionic/storage';

import { permanent_posm_res_partner_rel } from '../data/permanent_posm_res_partner_rel.model';
import { res_users_res_partner_rel } from '../data/res_users_res_partner_rel.model';
import { data_for_sync } from '../data/data_for_sync.model';
import { res_partner_source } from '../data/res_partner_source';
import { i_t_statut_client } from '../data/i_t_statut_client.model';
import { i_t_client_grossiste } from '../data/i_t_client_grossiste.model';



@Injectable()
export class Database_manager {

    constructor(private sqlite: SQLite, private storage: Storage, private http: HttpClient) {

    }

    public init_database(): Promise<SQLiteObject> {
        return this.sqlite.create({
            name: "imp_tob.db",
            location: 'default'
        })
    }

    init_all_table(): Promise<any> {

        return this.init_database().then((db: SQLiteObject) => {
            db.executeSql(request_res_partner, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_res_users, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_activation_autorisee, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_activite_pos, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_agence, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_cible_activation, [])
                .then(() => { })
                .catch(e => console.log(e));
            db.executeSql(request_data_for_sync, [])
                .then(() => { })
                .catch(e => console.log(e));
            db.executeSql(request_i_t_cible_installation_presentoirs, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_classification1, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_classification2, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_contrat, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_cooperation_itg, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_couverture_commerciale, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_emplacement, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_enseigne_appartenance, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_client_grossiste, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(four_last_view, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_fournisseur_principale, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_fournisseur_secondaire, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_frequence_approvisionnement, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_frequence_visite, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_permanent_posm, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_preference_animateur, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_proximite, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_region, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_secteur, [])
                .then(() => { })
                .catch(e => alert(e.message));

            db.executeSql(request_i_t_source_approvisionnement, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_statut_client, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_type_client, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_type_quartier, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_ville, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_zone, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_canal, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_tournee, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_pos_additional, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_i_t_pos_initial, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_visit_sheet, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_stock_line, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_itg_manufacturer, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_itg_product, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_itg_product_type, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_price_line, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_res_currency, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_pos_audit_line, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_pos_audit_answer, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_pos_audit_criteria, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_plv_line, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_itg_survey, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_itg_survey_question, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_itg_survey_label, [])
                .then(() => { })
                .catch(e => console.log(e));

            db.executeSql(request_permanent_posm_res_partner_rel, [])
                .then(() => console.log("tafa le db request_permanent_posm_res_partner_rel"))
                .catch(e => console.log(e));

            db.executeSql(request_res_users_res_partner_rel, [])
                .then(() => console.log("tafa le db request_res_users_res_partner_rel"))
                .catch(e => console.log(e));
            db.executeSql(request_visit_survey, [])
            .then(() => console.log("tafa le db request_visit_survey"))
            .catch(e => console.log(e));



            this.http.get("../../assets/json/res_user.test.json").subscribe((data: Array<res_users>) => {
                let sql_insert: string = "insert into res_users (id,name,login,password_crypt) values ( ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].id,
                        data[i].name,
                        data[i].login,
                        data[i].password_crypt,
                    ]).then(() => {
                        console.log(JSON.stringify(data));

                    })
                        .catch(e => {
                            console.log('Error on insert res_user \n' + JSON.stringify(e));
                        })
                }
            });

        });

    }

    init_table_data() {
        this.init_database().then((db: SQLiteObject) => {

            this.http.get("../../assets/json/activation_autorisee.test.json").subscribe((data: Array<i_t_activation_autorisee>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_activation_autorisee", data[i]);
                }
            });

            this.http.get("../../assets/json/data_for_sync.test.json").subscribe((data: Array<data_for_sync>) => {
                let sql_insert: string = "insert into data_for_sync (id, table_name, table_id, type, action_type, is_synced, x_odoo_id) values (?, ?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].id,
                        data[i].table_name,
                        data[i].table_id,
                        data[i].type,
                        data[i].action_type,
                        data[i].is_synced,
                        data[i].x_odoo_id
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert data_for_sync \n' + JSON.stringify(e));
                        })
                }
            });

            this.http.get("../../assets/json/activite_pos.test.json").subscribe((data: Array<i_t_activite_pos>) => {
                let sql_insert: string = "insert into i_t_activite_pos (create_uid, name, canal_id, write_uid) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].name,
                        data[i].canal_id,
                        data[i].write_uid,
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert i_t_activite_pos \n' + JSON.stringify(e));
                        })
                }
            });

            this.http.get("../../assets/json/agence.test.json").subscribe((data: Array<i_t_agence>) => {
                let sql_insert: string = "insert into i_t_agence (create_uid, code, name, write_uid, region_id) values (?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].code,
                        data[i].name,
                        data[i].write_uid,
                        data[i].region_id,
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert i_t_agence \n' + JSON.stringify(e));
                        })
                }
            });

            this.http.get("../../assets/json/cible_activation.test.json").subscribe((data: Array<i_t_cible_activation>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_cible_activation", data[i]);
                }
            });

            this.http.get("../../assets/json/cible_installation_presentoire.test.json").subscribe((data: Array<i_t_cible_installation_presentoirs>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_cible_installation_presentoirs", data[i]);
                }
            });

            this.http.get("../../assets/json/classification1.test.json").subscribe((data: Array<i_t_classification1>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_classification1", data[i]);
                }
            });

            this.http.get("../../assets/json/classification2.test.json").subscribe((data: Array<i_t_classification2>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_classification2", data[i]);
                }
            });

            this.http.get("../../assets/json/contrat.test.json").subscribe((data: Array<i_t_contrat>) => {
                for (var i = 0; i < data.length; i++) {
                    let sql_insert: string = "insert into i_t_contrat (create_uid, name,write_uid, date_debut_contrat, date_fin_contrat) values (?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].date_debut_contrat,
                            data[i].date_fin_contrat,
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert i_t_contrat \n' + JSON.stringify(e));
                            })
                    }
                }
            });

            this.http.get("../../assets/json/cooperation_itg.test.json").subscribe((data: Array<i_t_cooperation_itg>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_cooperation_itg", data[i]);
                }
            });

            this.http.get("../../assets/json/couverture_commerciale.test.json").subscribe((data: Array<i_t_couverture_commerciale>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_couverture_commerciale", data[i]);
                }
            });

            this.http.get("../../assets/json/emplacement.test.json").subscribe((data: Array<i_t_emplacement>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_emplacement", data[i]);
                }
            });

            this.http.get("../../assets/json/enseigne_appartenance.test.json").subscribe((data: Array<i_t_enseigne_appartenance>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_enseigne_appartenance", data[i]);
                }
            });

            this.http.get("../../assets/json/fournisseur_principale.test.json").subscribe((data: Array<i_t_fournisseur_principale>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_fournisseur_principale", data[i]);
                }
            });

            this.http.get("../../assets/json/fournisseur_secondaire.test.json").subscribe((data: Array<i_t_fournisseur_secondaire>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_fournisseur_secondaire", data[i]);
                }
            });

            this.http.get("../../assets/json/frequence_approvisionnement.test.json").subscribe((data: Array<i_t_frequence_approvisionnement>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_frequence_approvisionnement", data[i]);
                }
            });

            this.http.get("../../assets/json/frequence_visite.test.json").subscribe((data: Array<i_t_frequence_visite>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_frequence_visite", data[i]);
                }
            });

            this.http.get("../../assets/json/permanent_posm.test.json").subscribe((data: Array<i_t_permanent_posm>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_permanent_posm", data[i]);
                }
            });

            this.http.get("../../assets/json/preference_animateur.test.json").subscribe((data: Array<i_t_preference_animateur>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_preference_animateur", data[i]);
                }
            });

            this.http.get("../../assets/json/proximite.test.json").subscribe((data: Array<i_t_proximite>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_proximite", data[i]);
                }
            });

            this.http.get("../../assets/json/canal.test.json").subscribe((data: Array<i_t_canal>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_canal", data[i]);
                }
            });


            //MANDE
            this.http.get("../../assets/json/region.test.json").subscribe((data: Array<i_t_region>) => {
                let sql_insert: string = "insert into i_t_region (create_uid, code, name, write_uid) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].code,
                        data[i].name,
                        data[i].write_uid,
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert i_t_region \n' + JSON.stringify(e));
                        })
                }

            });
            //MANDE


            this.http.get("../../assets/json/itg_product_type.test.json").subscribe((data: Array<itg_product_type>) => {
                let sql_insert: string = "insert into itg_product_type (create_uid, name, write_uid, code) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].code,
                    ]).then(() => {

                    }).catch(e => {
                        console.log('Error on insert itg_product_type \n' + JSON.stringify(e));
                    })
                }
            });

            this.http.get("../../assets/json/itg_product.test.json").subscribe((data: Array<itg_product>) => {
                let sql_insert: string = "insert into itg_product (id, create_uid, name, write_uid, begin_date, end_date, retailer_unit_sale_price, retailer_pqt_sale_price, grs_cost_price, tax_status_id, dmg_sale_price, brand_id, dmg_cost_price, active, grs_sale_price, manufacturer_id, ref, product_type_code, product_type) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].id,
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].begin_date,
                        data[i].end_date,
                        data[i].retailer_unit_sale_price,
                        data[i].retailer_pqt_sale_price,
                        data[i].grs_cost_price,
                        data[i].tax_status_id,
                        data[i].dmg_sale_price,
                        data[i].brand_id,
                        data[i].dmg_cost_price,
                        data[i].active,
                        data[i].grs_sale_price,
                        data[i].manufacturer_id,
                        data[i].ref,
                        data[i].product_type_code,
                        data[i].product_type
                    ]).then(() => {

                    }).catch(e => {
                        console.log('Error on insert itg_product \n' + JSON.stringify(e));
                    })
                }
            });


            this.http.get("../../assets/json/secteur.test.json").subscribe((data: Array<i_t_secteur>) => {
                let sql_insert: string = "insert into i_t_secteur (create_uid, name, write_uid, zone_id, seller_id, promoteur_id) values (?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    let params = [
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].zone_id,
                        data[i].seller_id,
                        data[i].promoteur_id
                    ]
                    db.executeSql(sql_insert, params).then(() => {
                    }).catch(e => {
                        alert(e.message)
                    })
                }
            });

            this.http.get("../../assets/json/source_approvisionnement.test.json").subscribe((data: Array<i_t_source_approvisionnement>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_source_approvisionnement", data[i]);
                }
            });

            this.http.get("../../assets/json/type_client.test.json").subscribe((data: Array<i_t_type_client>) => {
                let sql_insert: string = "insert into i_t_type_client (create_uid, name, write_uid, code) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].code
                    ]).then(() => { console.log('insert i_t_type_client with succes \n'); })
                        .catch(e => { console.log('Error on insert i_t_type_client \n' + JSON.stringify(e)); })
                }
            });

            this.http.get("../../assets/json/type_quartier.test.json").subscribe((data: Array<i_t_type_quartier>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_type_quartier", data[i]);
                }
            });

            this.http.get("../../assets/json/ville.test.json").subscribe((data: Array<i_t_ville>) => {
                for (var i = 0; i < data.length; i++) {
                    this.insert_basic_data("i_t_ville", data[i]);
                }
            });

            this.http.get("../../assets/json/zone.test.json").subscribe((data: Array<i_t_zone>) => {
                let sql_insert: string = "insert into i_t_zone (create_uid, name, write_uid, agence_id) values (?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].agence_id
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert i_t_zone \n' + JSON.stringify(e));
                        })
                }
            });

            this.http.get("../../assets/json/tournee.test.json").subscribe((data: Array<i_t_tournee>) => {
                let sql_insert: string = "insert into i_t_tournee (id, create_uid, name, write_uid, commercial_id, start_date, end_date, date, state) values (?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].id,
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].commercial_id,
                        data[i].start_date,
                        data[i].end_date,
                        data[i].date,
                        data[i].state
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert i_t_zone \n' + JSON.stringify(e));
                        })
                }
            });

            this.http.get("../../assets/json/pos_initial.test.json").subscribe((data: Array<i_t_pos_initial>) => {
                let sql_insert: string = "insert into i_t_pos_initial (id, create_uid, name, write_uid, sequence, visite, tour_id, partner_id) values (?, ?, ?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].id,
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].sequence,
                        data[i].visite,
                        data[i].tour_id,
                        data[i].partner_id
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert i_t_pos_initial \n' + JSON.stringify(e));
                        })
                }
            });


            this.http.get("../../assets/json/pos_additional.test.json").subscribe((data: Array<i_t_pos_additional>) => {
                let sql_insert: string = "insert into i_t_pos_additional (id, create_uid, name, write_uid, sequence, visite, tour_id, partner_id) values (?, ?, ?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].id,
                        data[i].create_uid,
                        data[i].name,
                        data[i].write_uid,
                        data[i].sequence,
                        data[i].visite,
                        data[i].tour_id,
                        data[i].partner_id
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert i_t_pos_additional \n' + JSON.stringify(e));
                        })
                }
            });

            this.http.get("../../assets/json/permanent_posm_res_partner_rel.test.json").subscribe((data: Array<permanent_posm_res_partner_rel>) => {
                let sql_insert: string = "insert into i_t_permanent_posm_res_partner_rel (partner_id, i_t_permanent_posm_id) values (?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].partner_id,
                        data[i].i_t_permanent_posm_id,
                    ]).then(() => {
                        console.log('insert permanent_posm_res_partner_rel with succes \n');
                    })
                        .catch(e => {
                            console.log('Error on insert permanent_posm_res_partner_rel \n' + JSON.stringify(e));
                        })
                }
            });

            this.http.get("../../assets/json/res_users_res_partner_rel.test.json").subscribe((data: Array<res_users_res_partner_rel>) => {
                let sql_insert: string = "insert into res_users_res_partner_rel (partner_id, res_users_id) values (?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].partner_id,
                        data[i].res_users_id,
                    ]).then(() => {
                        console.log('insert permanent_posm_res_partner_rel with succes \n');
                    })
                        .catch(e => {
                            console.log('Error on insert permanent_posm_res_partner_rel \n' + JSON.stringify(e));
                        })
                }
            });



            this.http.get("../../assets/json/res_partner.test.json").subscribe((data: Array<res_partner>) => {
                let sql_insert: string = "insert into res_partner (id, canal_id, name , company_id , comment , website , color , active 	, street , supplier 	, city , display_name , zip ,title , country_id , commercial_company_name , parent_id , company_name , employee 	, ref , email , is_company 	, function , lang , fax , street2 , barcode , phone , daty, tz , write_uid , customer , create_uid , credit_limit , user_id , mobile , type , partner_share , vat , state_id , commercial_partner_id , date_localization, partner_latitude,partner_longitude, notify_email  , message_last_post  , opt_out 	, message_bounce ,signup_type , signup_expiration  , signup_token , team_id , calendar_last_notif_ack  , type_quartier_id , source_approvisionnement_id , cible_installation_presentoirs_id , numero_telephone2 , numero_telephone3 ,numero_telephone1 ,couverture_commerciale_id , classification2_id , nom_gerant , frequence_approvisionnement_id , enseigne_appartenance_id ,agence_id , activite_pos_id , fournisseur_principal_id , contrat_id , fournisseur_secondaire_id ,  nom_agent_commercial_id , cible_activation_id , state , statut_client_id , permanent_POSM5_id , point_de_vente 	, repere , emplacement_id , cooperation_itg_id ,  proximite_id , frequence_visite_id , permanent_POSM3_id , permanent_POSM1_id , adresse , preference_animateur_id , provider_latitude, zone_id , latitude  , commentaire , longitude , message_warning , permanent_POSM4_id , region_id , nom_pos ,   quartier ,  ville_id , type_client_id , utilisateur_associe_id , permanent_POSM2_id ,   secteur_id , provider_longitude,     code_client , activation_autorisee_id , is_today 	,         classification1_id ,     a_visiter_moved0 ,  visite ,    a_visite 	, a_visiter) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                for (var i = 0; i < data.length; i++) {
                    db.executeSql(sql_insert, [
                        data[i].id,
                        data[i].canal_id,
                        data[i].name,
                        data[i].company_id,
                        data[i].comment,
                        data[i].website,
                        data[i].color,
                        data[i].active,
                        data[i].street,
                        data[i].supplier,
                        data[i].city,
                        data[i].display_name,
                        data[i].zip,
                        data[i].title,
                        data[i].country_id,
                        data[i].commercial_company_name,
                        data[i].parent_id,
                        data[i].company_name,
                        data[i].employee,
                        data[i].ref,
                        data[i].email,
                        data[i].is_company,
                        data[i].fonction,
                        data[i].lang,
                        data[i].fax,
                        data[i].street2,
                        data[i].barcode,
                        data[i].phone,
                        data[i].daty,
                        data[i].tz,
                        data[i].write_uid,
                        data[i].customer,
                        data[i].create_uid,
                        data[i].credit_limit,
                        data[i].user_id,
                        data[i].mobile,
                        data[i].type,
                        data[i].partner_share,
                        data[i].vat,
                        data[i].state_id,
                        data[i].commercial_partner_id,
                        data[i].Date_localization,
                        data[i].partner_latitude,
                        data[i].partner_longitude,
                        data[i].notify_email,
                        data[i].message_last_post,
                        data[i].opt_out,
                        data[i].message_bounce,
                        data[i].signup_type,
                        data[i].signup_expiration,
                        data[i].signup_token,
                        data[i].team_id,
                        data[i].calendar_last_notif_ack,
                        data[i].type_quartier_id,
                        data[i].source_approvisionnement_id,
                        data[i].cible_installation_presentoirs_id,
                        data[i].numero_telephone2,
                        data[i].numero_telephone3,
                        data[i].numero_telephone1,
                        data[i].couverture_commerciale_id,
                        data[i].classification2_id,
                        data[i].nom_gerant,
                        data[i].frequence_approvisionnement_id,
                        data[i].enseigne_appartenance_id,
                        data[i].agence_id,
                        data[i].activite_pos_id,
                        data[i].fournisseur_principal_id,
                        data[i].contrat_id,
                        data[i].fournisseur_secondaire_id,
                        data[i].nom_agent_commercial_id,
                        data[i].cible_activation_id,
                        data[i].state,
                        data[i].statut_client_id,
                        data[i].permanent_POSM5_id,
                        data[i].point_de_vente,
                        data[i].repere,
                        data[i].emplacement_id,
                        data[i].cooperation_itg_id,
                        data[i].proximite_id,
                        data[i].frequence_visite_id,
                        data[i].permanent_POSM3_id,
                        data[i].permanent_POSM1_id,
                        data[i].adresse,
                        data[i].preference_animateur_id,
                        data[i].provider_latitude,
                        data[i].zone_id,
                        data[i].latitude,
                        data[i].commentaire,
                        data[i].longitude,
                        data[i].message_warning,
                        data[i].permanent_POSM4_id,
                        data[i].region_id,
                        data[i].nom_pos,
                        data[i].quartier,
                        data[i].ville_id,
                        data[i].type_client_id,
                        data[i].utilisateur_associe_id,
                        data[i].permanent_POSM2_id,
                        data[i].secteur_id,
                        data[i].provider_longitude,
                        data[i].code_client,
                        data[i].activation_autorisee_id,
                        data[i].is_today,
                        data[i].classification1_id,
                        data[i].a_visiter_moved0,
                        data[i].visite,
                        data[i].a_visite,
                        data[i].a_visiter
                    ]).then(() => {

                    })
                        .catch(e => {
                            console.log('Error on insert res_partner \n' + JSON.stringify(e));
                        })
                }



                this.http.get("../../assets/json/stock_line.test.json").subscribe((data: Array<stock_line>) => {
                    let sql_insert: string = "insert into stock_line (id, create_uid, write_uid, placement, product_id, visit_sheet_id, available_stock, manufacturer_id, last_visit_stock) values (?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].write_uid,
                            data[i].placement,
                            data[i].product_id,
                            data[i].visit_sheet_id,
                            data[i].available_stock,
                            data[i].manufacturer_id,
                            data[i].last_visit_stock
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert stock_line \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/itg_manufacturer.test.json").subscribe((data: Array<itg_manufacturer>) => {
                    let sql_insert: string = "insert into itg_manufacturer (id, create_uid, name, write_uid, sequence) values (?, ?, ?, ?, ?)";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].sequence
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert itg_manufacturer \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/price_line.test.json").subscribe((data: Array<price_line>) => {
                    let sql_insert: string = "insert into price_line (id, create_uid, name, write_uid, product_id, current_price, visit_sheet_id, manufacturer_id) values (?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].product_id,
                            data[i].current_price,
                            data[i].visit_sheet_id,
                            data[i].manufacturer_id
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert price_line \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/visit_sheet.test.json").subscribe((data: Array<visit_sheet>) => {
                    let sql_insert: string = "insert into visit_sheet (id, create_uid, name, write_uid, page_number_total, show_btn_end_visit, visit_duration, partner_id, user_id, state, provider_longitude, begin_datetime, next_visit_goal, provider_latitude, end_datetime, hide_btn_next_next_page, tour_id, visit_duration_str, pos_initial, region_id, secteur_id, agence_id, zone_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].page_number_total,
                            data[i].show_btn_end_visit,
                            data[i].visit_duration,
                            data[i].partner_id,
                            data[i].user_id,
                            data[i].state,
                            data[i].provider_longitude,
                            data[i].begin_datetime,
                            data[i].next_visit_goal,
                            data[i].provider_latitude,
                            data[i].end_datetime,
                            data[i].hide_btn_next_next_page,
                            data[i].tour_id,
                            data[i].visit_duration_str,
                            data[i].pos_initial,
                            data[i].region_id,
                            data[i].secteur_id,
                            data[i].agence_id,
                            data[i].zone_id,
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert visit_sheet \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/pos_audit_criteria.test.json").subscribe((data: Array<pos_audit_criteria>) => {
                    let sql_insert: string = "insert into pos_audit_criteria (id, create_uid, name, write_uid, create_date, write_date, active) values (?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].create_date,
                            data[i].write_date,
                            data[i].active,
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert pos_audit_criteria \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/pos_audit_answer.test.json").subscribe((data: Array<pos_audit_answer>) => {
                    let sql_insert: string = "insert into pos_audit_answer (id, create_uid, name, write_uid, create_date, write_date, criteria_id) values (?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].create_date,
                            data[i].write_date,
                            data[i].criteria_id,
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert pos_audit_answer \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/pos_audit_line.test.json").subscribe((data: Array<pos_audit_line>) => {
                    let sql_insert: string = "insert into pos_audit_line (id, create_uid, name, write_uid, create_date, write_date, visit_begin_moved0, audit_criteria_id, note, visit_sheet_id, visit_end_moved0, visit_begin, visit_end) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].create_date,
                            data[i].write_date,
                            data[i].visit_begin_moved0,
                            data[i].audit_criteria_id,
                            data[i].note,
                            data[i].visit_sheet_id,
                            data[i].visit_end_moved0,
                            data[i].visit_begin,
                            data[i].visit_end,
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert pos_audit_line \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/plv_line.test.json").subscribe((data: Array<plv_line>) => {
                    let sql_insert: string = "insert into plv_line (id, create_uid, product_id, visit_sheet_id, manufacturer_id, quantity, create_date, name, write_uid, write_date) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].product_id,
                            data[i].visit_sheet_id,
                            data[i].manufacturer_id,
                            data[i].quantity,
                            data[i].create_date,
                            data[i].name,
                            data[i].write_uid,
                            data[i].write_date,
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert plv_line \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/itg_survey.test.json").subscribe((data: Array<itg_survey>) => {
                    let sql_insert: string = "insert into itg_survey (id, create_uid, name, write_uid, write_date, create_date, view_id, state, field_default_value) values (?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].write_uid,
                            data[i].write_date,
                            data[i].create_date,
                            data[i].view_id,
                            data[i].state,
                            data[i].field_default_value
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert itg_survey \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/itg_survey_question.test.json").subscribe((data: Array<itg_survey_question>) => {
                    let sql_insert: string = "insert into itg_survey_question (id, create_uid, name, type, write_uid, write_date, create_date, page_id, mandatory, sequence, survey_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].type,
                            data[i].write_uid,
                            data[i].write_date,
                            data[i].create_date,
                            data[i].page_id,
                            data[i].mandatory,
                            data[i].sequence,
                            data[i].survey_id,
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert itg_survey_question \n' + JSON.stringify(e));
                            })
                    }
                });

                this.http.get("../../assets/json/itg_survey_label.test.json").subscribe((data: Array<itg_survey_label>) => {
                    let sql_insert: string = "insert into itg_survey_label (id, create_uid, name, quizz_mark, write_uid, write_date, create_date, question_id) values (?, ?, ?, ?, ?, ?, ?, ?) ";
                    for (var i = 0; i < data.length; i++) {
                        db.executeSql(sql_insert, [
                            data[i].id,
                            data[i].create_uid,
                            data[i].name,
                            data[i].quizz_mark,
                            data[i].write_uid,
                            data[i].write_date,
                            data[i].create_date,
                            data[i].question_id,
                        ]).then(() => {

                        })
                            .catch(e => {
                                console.log('Error on insert itg_survey_label \n' + JSON.stringify(e));
                            })
                    }
                });


            });

        })
    }

    insert_basic_data(nom_table: string, data: base_data) {
        let sql_insert: string = "insert into " + nom_table + " (create_uid, name, write_uid) values (?, ?, ?) ";
        this.init_database().then((db: SQLiteObject) => {
            db.executeSql(sql_insert, [
                data.create_uid,
                data.name,
                data.write_uid,
            ])
        }).then(() => {

        })
            .catch(e => {
                console.log('Error on insert ' + nom_table + ' \n' + JSON.stringify(e));
            }).catch(e => {
                console.log('Error on connexion ' + nom_table + ' \n' + JSON.stringify(e));
            })
    }

    insert_res_data(sql: string): Promise<any> {

        return this.init_database().then((db: SQLiteObject) => {
            return db.executeSql(sql, [])
        }).then(() => {

        }).catch(e => {
            console.log('Error on insert res \n' + JSON.stringify(e));
        }).catch(e => {
            console.log('Error on connexion res \n' + JSON.stringify(e));
        })
    }



    update_res_data(sql: string): Promise<any> {

        return this.init_database().then((db: SQLiteObject) => {
            return db.executeSql(sql, [])
        }).then(() => {
            console.log('update res with succes \n');
        }).catch(e => {
            console.log('Error on update res \n' + JSON.stringify(e));
        }).catch(e => {
            console.log('Error on connexion res \n' + JSON.stringify(e));
        });
    }

    get_res_partner() {
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select = "select res_partner.id, res_partner.name as name, i_t_region.name as region_id, i_t_agence.name as agence_id, i_t_zone.name as zone_id, i_t_secteur.name as secteur_id, res_users.signature as nom_agent_commercial_id, res_partner.nom_pos as nom_pos, res_partner.nom_gerant as nom_gerant, res_partner.adresse as adresse, res_partner.state_id as state_id from res_partner left join i_t_region on res_partner.region_id = i_t_region.id left join i_t_agence on res_partner.agence_id = i_t_agence.id left join i_t_zone on res_partner.zone_id = i_t_zone.id left join i_t_secteur on res_partner.secteur_id = i_t_secteur.id left join res_users on res_partner.user_id = res_users.id";
            let sql2 = "select res_partner.id, res_partner.name as name, i_t_region.name as region_id, i_t_agence.name as agence_id, i_t_zone.name as zone_id, i_t_secteur.name as secteur_id, i_t_ville.name as ville_id, res_users.signature as nom_agent_commercial_id, res_partner.nom_pos as nom_pos, res_partner.nom_gerant as nom_gerant, res_partner.adresse as adresse, res_partner.state_id as state_id from res_partner left join i_t_ville on res_partner.ville_id = i_t_ville.id left join i_t_region on res_partner.region_id = i_t_region.id left join i_t_agence on res_partner.agence_id = i_t_agence.id left join i_t_zone on res_partner.zone_id = i_t_zone.id left join i_t_secteur on res_partner.secteur_id = i_t_secteur.id left join res_users on res_partner.user_id = res_users.id";
            let data_return = [];
            return db.executeSql(sql2, [])
                .then(data => {
                    console.log(data);
                    if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {
                            data_return.push(data.rows.item(i));
                        }
                        console.log(JSON.stringify(data_return));
                        return data_return;
                    }

                })
                .catch(e => {
                    console.log('Error on select \n' + JSON.stringify(e));
                })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e));
        });
    }

    get_name_id_data(table: string): Promise<any> {
        return this.init_database().then((db: SQLiteObject) => {
            let sql2 = "select " + table + " .id, " + table + ".name as name from " + table + " ;";
            let data_return = [];
            return db.executeSql(sql2, [])
                .then(data => {
                    if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {
                            data_return.push(data.rows.item(i));
                        }
                        console.log(JSON.stringify(data_return));
                        return data_return;
                    }

                })
                .catch(e => {
                    console.log('Error on get_name_id_data \n' + JSON.stringify(e));
                })
        }).catch(e => {
            console.log('Error on connexion get_name_id_data \n' + JSON.stringify(e));
        });
    }


    select_basic_data(nom_table: string): Promise<any> {

        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "select * from " + nom_table + " ";
            let data_return = [];
            return db.executeSql(sql_select, []).then((data) => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                }
                return data_return;
            }).catch(e => {
                console.log('Error on select \n' + JSON.stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e));
        })
    }

    select_max_basic_data(nom_table: string): Promise<any> {

        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "select MAX(id) + 1 as max from " + nom_table + " ";
            return db.executeSql(sql_select, []).then((data) => {
                if (data.rows.length > 0) {
                    return data.rows.item(0);
                }
            }).catch(e => {
                console.log('Error on select \n' + JSON.stringify(e));
            });
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e));
        });
    }

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

    verify_hash(password, stored_hash) {
        var scheme = stored_hash.split('$')[1];

        var rounds = stored_hash.split('$')[2];
        var salt = stored_hash.split('$')[3];

        // FIXME: Maybe throw an exception
        if (scheme !== 'pbkdf2-sha512') {
            return false;
        }

        var h = this.get_hash(password, this.b64decode(salt), rounds);
        console.log("hashage anle omenle client : " + h)
        return h === stored_hash;
    }
    get_hash(password, salt, rounds) {

        // FIXME: KeyLenBytes is hardcoded
       /* var h = this.b64trimmed(pbkdf2_sha512(password, salt, rounds, 64));
        var joined_hash = ['', 'pbkdf2-sha512', rounds, this.b64trimmed(salt), h].join('$');*/

        //eturn joined_hash;
    }
    //5.189.167.183:3010
    checkLogin(log: string, pass: string): Promise<any> {
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "select * from res_users  where login = ? ";
            return db.executeSql(sql_select, [log]).then((data) => {
                if (data.rows.length > 0) {
                    if (pass == data.rows.item(0).password) {
                        return db.executeSql("update res_users set active = 1 where login = ? ", [log]).then(() => {
                            return 1;
                        }).catch(e => {
                            console.log('Error on update \n' + stringify(e));
                        })
                    }
                    else return 0;
                }
                else return -1;
            }).catch(e => {
                console.log('Error on select \n' + stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + stringify(e));
        })
    }

    getDatetimeNow() {
        var today = new Date();

        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date + ' ' + time;
    }
    insert_res_users(data: any) {
        this.init_database().then((db: SQLiteObject) => {
            let sql_insert: string = "insert into res_users (id, login, signature, password_crypt, password) values (?, ?, ?, ?, ?) ";
            db.executeSql(sql_insert, [
                data.id,
                data.name,
                data.name,
                data.password_crypt,
                data.password_copy
            ]).then(() => {
                console.log("tafa eh")
            })
                .catch(e => {
                    console.log('Error on insert res_user \n' + JSON.stringify(e));
                })


        })
        //insert into res_users (active, login, password, company_id, partner_id, share, write_uid, create_uid, action_id, signature, password_crypt, alias_id, sale_team_id, target_sales_done, target_sales_won) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

    }

    update_coordinates_res_partner(location: any, res_partner_id: number) {
        return this.init_database()
            .then((db: SQLiteObject) => {
                let query = " update res_partner set date_localization = ? ,partner_latitude = ? , partner_longitude = ? where id = ? ";
                db.executeSql(query, [this.getDatetimeNow(), location.latitude, location.longitude, res_partner_id])
                    .then(() => alert('data updated'))
                    .catch((e) => alert(e.message))
            })
    }


    verify_login(user: any) {
        return this.init_database()
            .then((db: SQLiteObject) => {
                let query = "select * from res_users where id = ? ";
                return db.executeSql(query, [user.id])
                    .then((data: any) => {
                        if (data.rows.length > 0) {
                            this.update_res_user(user);
                        }
                        else {
                            this.insert_res_users(user);
                        }
                    }).catch(e => alert(e.message));

            }).catch(e => alert(e.message));
    }
    update_res_user(user: any) {
        return this.init_database()
            .then((db: SQLiteObject) => {
                let query = " update res_users  set login = ? , password_crypt = ? , password = ? where id = ? ";
                return db.executeSql(query, [user.login, user.password_crypt, user.password_copy, user.id])
                    .then(() => console.log("data updated"))
                    .catch(e => alert(e.message));
            }).catch(e => alert(e.message));
    }
    select_res_user_active(): Promise<any> {
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "select * from res_users where active = 1 ";
            let data_return: res_users;
            return db.executeSql(sql_select, []).then((data) => {
                if (data.rows.length > 0) {
                    data_return = data.rows.item(0);
                    return data_return;
                }
            }).catch(e => {
                console.log('Error on select \n' + JSON.stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e));
        })
    }

    select_data_with_table_name(nom_table: string): Promise<any> {

        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "select id as value, name as display from " + nom_table + " ";
            let data_return = [];
            return db.executeSql(sql_select, []).then((data) => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                }
                return data_return;
            }).catch(e => {
                console.log('Error on select_data_with_table_name \n' + JSON.stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e));
        })
    }

    select_data_res_users(nom_table: string): Promise<any> {

        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "select id as value, login as display from " + nom_table + " ";
            let data_return = [];
            return db.executeSql(sql_select, []).then((data) => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                }
                return data_return;
            }).catch(e => {
                console.log('Error on select_data_with_table_name \n' + JSON.stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e));
        })
    }


    get_res_partner_data(id: number): Promise<any> {
        console.log("1");
        return this.init_database().then((db: SQLiteObject) => {
            console.log("2");
            let sql_select: string = "select res_partner.photo, res_partner.name, i_t_region.name as region, i_t_agence.name as agence, i_t_zone.name as zone, res_users.signature as signature, i_t_secteur.name as secteur, res_partner.nom_pos, res_partner.nom_gerant, res_partner.adresse, res_partner.repere, res_partner.quartier, i_t_ville.name as ville, res_partner.numero_telephone1, res_partner.numero_telephone2, res_partner.numero_telephone3, i_t_emplacement.name as emplacement, i_t_proximite.name as proximite, i_t_type_quartier.name as type_quartier, res_partner.latitude, res_partner.longitude, i_t_type_client.name as type_client, i_t_activite_pos.name as activite_pos, i_t_enseigne_appartenance.name as enseigne_appartenance, i_t_classification1.name as classification1, i_t_classification2.name as classification2, i_t_couverture_commerciale.name as couverture_commerciale , i_t_frequence_visite.name as frequence_visite, i_t_cible_installation_presentoirs.name as cible_installation_presentoirs,(select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM1_id) as permanent_POSM1_id, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM2_id) as permanent_POSM2_id, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM3_id) as permanent_POSM3_id, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM4_id) as permanent_POSM4_id, (select i_t_permanent_posm.name from i_t_permanent_posm where i_t_permanent_posm.id = res_partner.permanent_POSM5_id) as permanent_POSM5_id, i_t_contrat.name as contrat, i_t_contrat.date_debut_contrat as date_debut_contrat , i_t_contrat.date_fin_contrat as date_fin_contrat, i_t_cooperation_itg.name as cooperation_itg, i_t_activation_autorisee.name as activation_autorisee, i_t_preference_animateur.name as preference_animateur, i_t_canal.name as canal_id , i_t_frequence_approvisionnement.name as frequence_approvisionnement, i_t_source_approvisionnement.name as source_approvisionnement, x.name as fournisseur_principale, y.name as fournisseur_secondaire, res_partner.commentaire from res_partner left join i_t_region on res_partner.region_id = i_t_region.id left join i_t_agence on res_partner.agence_id = i_t_agence.id left join i_t_zone on res_partner.zone_id = i_t_zone.id left join i_t_secteur on res_partner.secteur_id = i_t_secteur.id left join i_t_ville on res_partner.ville_id = i_t_ville.id left join i_t_emplacement on res_partner.emplacement_id = i_t_emplacement.id left join i_t_proximite on res_partner.proximite_id = i_t_proximite.id left join i_t_type_quartier on res_partner.type_quartier_id = i_t_type_quartier.id left join i_t_type_client on res_partner.type_client_id = i_t_type_client.id left join i_t_activite_pos on res_partner.activite_pos_id = i_t_activite_pos.id left join i_t_enseigne_appartenance on res_partner.enseigne_appartenance_id = i_t_enseigne_appartenance.id left join i_t_classification1 on res_partner.classification1_id = i_t_classification1.id left join i_t_classification2 on res_partner.classification2_id = i_t_classification2.id left join i_t_couverture_commerciale on res_partner.couverture_commerciale_id = i_t_couverture_commerciale.id left join i_t_frequence_visite on res_partner.frequence_visite_id = i_t_frequence_visite.id left join i_t_cible_installation_presentoirs on res_partner.cible_installation_presentoirs_id = i_t_cible_installation_presentoirs.id left join i_t_permanent_posm on res_partner.permanent_POSM1_id = i_t_permanent_posm.id left join i_t_contrat on res_partner.contrat_id = i_t_contrat.id left join i_t_cooperation_itg on res_partner.cooperation_itg_id = i_t_cooperation_itg.id left join i_t_activation_autorisee on res_partner.activation_autorisee_id = i_t_activation_autorisee.id left join i_t_preference_animateur on res_partner.preference_animateur_id = i_t_preference_animateur.id left join i_t_frequence_approvisionnement on res_partner.frequence_approvisionnement_id = i_t_frequence_approvisionnement.id left join i_t_source_approvisionnement on res_partner.source_approvisionnement_id = i_t_source_approvisionnement.id left join i_t_fournisseur_principale on res_partner.fournisseur_principal_id = i_t_fournisseur_principale.id left join i_t_fournisseur_secondaire on res_partner.fournisseur_secondaire_id = i_t_fournisseur_secondaire.id left join res_users on res_partner.user_id = res_users.id left join i_t_canal on res_partner.canal_id = i_t_canal.id left join res_partner as x on res_partner.fournisseur_principal_id = x.id left join res_partner as y on res_partner.fournisseur_secondaire_id = y.id where res_partner.id = " + id;
            let data_return: any;
            return db.executeSql(sql_select, []).then((data) => {
                console.log("3");
                if (data.rows.length > 0) {
                    console.log("4");
                    data_return = data.rows.item(0);
                    console.log('data : \n' + JSON.stringify(data_return))
                    return data_return;
                }
                else {
                    console.log("5");
                }
            }).catch(e => {
                console.log('Error on select \n' + JSON.stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e));
        })
    }

    get_all_tournee(state: string): Promise<any> {
        return this.init_database().then((db: SQLiteObject) => {

            let sql_select: string = "select * from i_t_tournee where state != ? ";
            let data_return = [];
            return db.executeSql(sql_select, [state]).then((data) => {

                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
                else {
                    console.log("5");
                }
            }).catch(e => {
                console.log('Error on select \n' + JSON.stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e));
        })
    }

    get_res_partner_data_for_visite(): Promise<any> {
        return this.init_database().then((db: SQLiteObject) => {

            let sql_select: string = "select res_partner.id, res_partner.name, res_partner.region_id, res_partner.secteur_id, res_partner.agence_id, res_partner.zone_id from res_partner";
            let data_return = [];
            return db.executeSql(sql_select, []).then((data) => {

                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
                else {
                    console.log("5");
                }
            }).catch(e => {
                console.log('Error on select \n' + JSON.stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e));
        })
    }


    select_basic_data_with_id(nom_table: string, id: number): Promise<any> {
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "select * from " + nom_table + " where id = ?";
            return db.executeSql(sql_select, [id]).then((data) => {
                if (data.rows.length > 0) {
                    return data.rows.item(0);
                }
            }).catch(e => {
                console.log('Error on select \n' + JSON.stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e));
        })
    }

    update_status_res_partner(id: number, status: number): Promise<any> {
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "update res_partner set active = ? where id = ?";
            return db.executeSql(sql_select, [status, id]).then((data) => {
                if (data.rows.length > 0) {
                    return data.rows.item(0);
                }
            }).catch(e => {
                console.log('Error on update \n' + JSON.stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e));
        })
    }

    //TOURNEES

    get_tournee_by_user(table: string, tour_id: number): Promise<any> {
        return this.init_database().then((db: SQLiteObject) => {
            let query = "select res_partner.id as res_partner_id, res_partner.name as res_partner_name, " + table + ".visite, " + table + ".sequence , i_t_tournee.id, i_t_tournee.name, i_t_tournee.start_date, i_t_tournee.end_date from " + table + " left join res_partner on " + table + ".partner_id = res_partner.id left join i_t_tournee on " + table + ".tour_id = i_t_tournee.id where i_t_tournee.id = ?"
            //let sql_select : string = "select res_partner.id as res_partner_id, res_partner.name as res_partner_name, res_partner.visite, i_t_tournee.id, i_t_tournee.name, i_t_tournee.start_date, i_t_tournee.end_date from res_partner left join i_t_tournee on res_partner.user_id = i_t_tournee.commercial_id "
            let data_return = [];
            return db.executeSql(query, [tour_id])
                .then(data => {
                    console.log(data);
                    if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {
                            data_return.push(data.rows.item(i));
                        }
                        console.log(JSON.stringify(data_return));
                        return data_return;
                    }

                })
                .catch(e => {
                    console.log('Error on select \n' + JSON.stringify(e));
                })
        });
    }

    update_tournee_by_id(id: number, status: string) {
        return this.init_database().then((db: SQLiteObject) => {
            let query = "update i_t_tournee set state = ? where id = ?";
            return db.executeSql(query, [status, id]).then(data => {
                if (data.rows.length > 0) {
                    return data.rows.item(0);
                }
            }).catch(e => {
                console.log('Error on update \n' + JSON.stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e));
        });
    }

    update_visite_res_patrner_by_id(id: number, etat: string) {
        return this.init_database().then((db: SQLiteObject) => {
            let query = "update res_partner set visite = ? where id = ?";
            return db.executeSql(query, [etat, id]).then(data => {
                if (data.rows.length > 0) {
                    return data.rows.item(0);
                }
            }).catch(e => {
                console.log('Error on update \n' + JSON.stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e));
        });
    }

    get_active_user() {
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "select res_users.login, res_users.id from res_users where res_users.active = 1";
            let data_return = [];
            return db.executeSql(sql_select, [])
                .then(data => {
                    console.log(data);
                    if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {
                            data_return.push(data.rows.item(i));
                        }
                        return data_return;
                    }

                })
                .catch(e => {
                    console.log('Error on select get_all_fiche_visite \n' + JSON.stringify(e));
                })
        });
    }

    get_all_fiche_visite() {
        return this.init_database().then((db: SQLiteObject) => {
            //let sql_select : string = "select id as visit_sheet_id, provider_latitude, provider_longitude, (select res_users.login from res_users where res_users.active = 1) as user_id, (select res_partner.name from res_partner where visit_sheet.partner_id = res_partner.id) as partner_id, visit_sheet.begin_datetime, visit_sheet.end_datetime, visit_sheet.state from visit_sheet" ;
            let sql: string = "select visit_sheet.id as visit_sheet_id, (select res_users.login from res_users where res_users.active = 1) as user_id, res_partner.id as res_partner_id, res_partner.name as partner_id, i_t_tournee.start_date as tournee_begin, i_t_tournee.end_date as tournee_end, visit_sheet.begin_datetime as visit_sheet_date_begin, visit_sheet.end_datetime as visit_sheet_date_end, visit_sheet.state , visit_sheet.provider_latitude, visit_sheet.provider_longitude from visit_sheet left join res_partner on visit_sheet.partner_id = res_partner.id left join i_t_tournee on visit_sheet.tour_id = i_t_tournee.id where i_t_tournee.state != 'Clôturé' and visit_sheet.state != 'Clôturé'";
            let data_return = [];
            return db.executeSql(sql, [])
                .then(data => {
                    if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {
                            data_return.push(data.rows.item(i));
                        }
                        return data_return;
                    }

                })
                .catch(e => {
                    console.log('Error on select get_all_fiche_visite \n' + JSON.stringify(e));
                })
        });
    }
    set_visit_duration_end_datetime(visit_sheet_id: number, duration: any, end_datetime: any) {
        return this.init_database()
            .then((db: SQLiteObject) => {
                let query = " update visit_sheet set visit_duration = ? , end_datetime = ? , state = ? where id = ? ";
                let params = [duration, end_datetime, "closed", visit_sheet_id];
                return db.executeSql(query, params)
                    .then((response) => {
                        if (duration < 1) {
                            alert("Visite terminée");
                        }
                    })
                    .catch(e => alert(e.message));
            })
            .catch(e => alert(e.message));
    }

    get_visit_begin_datetime(id: number) {

        return this.init_database().then((db) => {
            let query = " select begin_datetime from visit_sheet where id = ?";
            return db.executeSql(query, [id])
                .then((data) => {
                    if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {
                            return data.rows.item(i);
                        }
                    }
                })
                .catch(e => alert(e.message));
        })
            .catch(e => alert(e.message))
    }
    async start_visit(visit_sheet_id: number) {

        try {
            const db = await this.init_database();
            let query = " update visit_sheet set begin_datetime = ? , state ='open' where id = ? ";
            console.log(query);
            let params = [this.getDatetimeNow(), visit_sheet_id];
            console.log(params);
            db.executeSql(query, params)
                .then((response) => {
                    db.executeSql("select begin_datetime,state from visit_sheet where id = ?", [visit_sheet_id])
                        .then((data) => {
                            for (var i = 0; i < data.rows.length; i++) {
                                console.log(data.rows.item(i));
                            }
                        })
                        .catch(e => alert(e.message));
                })
                .catch(e_1 => alert(e_1.message));
        }
        catch (e_2) {
            return alert(e_2.message);
        }
    }
    get_all_table_for_sync(): Promise<any> {
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "select * from data_for_sync where is_synced = 0";
            let data_return = [];
            return db.executeSql(sql_select, [])
                .then(data_step_1 => {

                    if (data_step_1.rows.length > 0) {
                        for (var i = 0; i < data_step_1.rows.length; i++) {
                            data_return.push(data_step_1.rows.item(i));
                        }
                        return data_return;
                    }

                })
                .catch(e => {
                    console.log('Error on select get_all_data_for_sync \n' + JSON.stringify(e));
                });
        });
    }
    get_all_data_for_sync(table_data: data_for_sync) {
        return this.init_database().then((db: SQLiteObject) => {
            let data_return = [];

            let sql = "select " + table_data.table_name + ".*, data_for_sync.x_odoo_id, data_for_sync.table_name from data_for_sync inner join " + table_data.table_name + " on data_for_sync.table_id = " + table_data.table_name + ".id ";
            return db.executeSql(sql, [])
                .then(data_step_1 => {
                    if (data_step_1.rows.length > 0) {
                        for (var i = 0; i < data_step_1.rows.length; i++) {
                            data_return.push(data_step_1.rows.item(i));
                        }
                        return data_return;
                    }

                })
                .catch(e => {
                    console.log('Error on select get_all_data_for_sync \n' + JSON.stringify(e));
                });

        });



    }
    get_audit_data_p4(visit_sheet_id: number): Promise<any> {
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "select  pos_audit_criteria.id, pos_audit_criteria.name, group_concat(pos_audit_answer.id,'|') as answer_id, pos_audit_criteria.active, group_concat(pos_audit_answer.name,'|') as answer_name, (select name from pos_audit_answer where id = visit_begin)as visit_begin, (select name from pos_audit_answer where id = visit_end) as visit_end  from pos_audit_criteria inner join pos_audit_answer on pos_audit_criteria.id = pos_audit_answer.criteria_id join pos_audit_line on pos_audit_line.audit_criteria_id = pos_audit_criteria.id where visit_sheet_id = ? group by pos_audit_criteria.name order by pos_audit_criteria.id";
            let data_return = [];
            return db.executeSql(sql_select, [visit_sheet_id])
                .then(data => {
                    if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {
                            data_return.push(data.rows.item(i));
                        }
                        return data_return;
                    }

                })
                .catch(e => {
                    console.log('Error on select get_n_latest_visit_sheet_id \n' + JSON.stringify(e));
                })
        });
        //select pos_audit_criteria.id, pos_audit_criteria.name, GROUP_CONCAT(pos_audit_answer.id, '|') as answer_id, GROUP_CONCAT(pos_audit_answer.name, '|') as answer_name from pos_audit_criteria inner join pos_audit_answer on pos_audit_criteria.id = pos_audit_answer.criteria_id group by pos_audit_criteria.name order by pos_audit_criteria.id
    }

    set_response(visit_sheet_id: number, data: any) {
        return this.init_database()
            .then((db: SQLiteObject) => {
                let params = [];
                let i = 0, size = 0;
                if (data.length > 0) {
                    size = data.length;
                }
                for (i = 0; i < size; i++) {
                    //let query = "update pos_audit_line  " ;
                    let query = " insert into pos_audit_line";
                    if (data[i].response_begin && !data[i].response_end) {
                        //query += " set visit_begin = (select id from pos_audit_answer where criteria_id = ? and name = ? )";
                        query += "(visit_begin,visit_sheet_id) values((select id from pos_audit_answer where criteria_id = ? and name = ? ),?)";
                        params = [data[i].id, data[i].response_begin, visit_sheet_id];
                    }
                    else if (data[i].response_end && !data[i].response_begin) {
                        //query += " set visit_end = (select id from pos_audit_answer where criteria_id = ? and name = ? )";
                        query += "(visit_end,criteria_id,visit_sheet_id) values((select id from pos_audit_answer where criteria_id = ? and name = ? ),?)"
                        params = [data[i].id, data[i].response_end, visit_sheet_id];
                    }
                    else if (data[i].response_end && data[i].response_begin) {
                        //query += " set visit_begin = (select id from pos_audit_answer where criteria_id = ? and name = ? ),visit_end = (select id from pos_audit_answer where criteria_id = ? and name = ? )";
                        query += "(visit_begin,visit_end,criteria_id,visit_sheet_id) values((select id from pos_audit_answer where criteria_id = ? and name = ? ),visit_end = (select id from pos_audit_answer where criteria_id = ? and name = ? ),?)"
                        params = [data[i].id, data[i].response_begin, data[i].id, data[i].response_end, visit_sheet_id];
                    }
                    else {
                        continue;
                    }

                    db.executeSql(query, params)
                        .then(() => {
                            console.log("mety le insert anle p4")
                        })
                        .catch(e => {
                            alert(e.message)
                        })

                }
            })
            .catch(e => alert(e.message))
    }
    save_next_visit_goal(visit_sheet_id: number, goal: string) {
        this.init_database()
            .then((db: SQLiteObject) => {
                let query: string = "update visit_sheet set next_visit_goal = ? where id = ? ";
                db.executeSql(query, [goal, visit_sheet_id]).then((data) => {
                    alert('Data affected');
                })
                    .catch(e => alert(e.message));
            })
            .catch(e => alert(e));
    }
    get_next_visit_goal(visit_sheet_id: number) {
        return this.init_database()
            .then((db: SQLiteObject) => {
                let query: string = "select next_visit_goal from visit_sheet where id = ? ";
                return db.executeSql(query, [visit_sheet_id])
                    .then((value) => {
                        return value.rows.item(0);
                    })
                    .catch(e => alert(e.message));
            })
            .catch(e => alert(e.message));
    }
    update_current_price(partner_id: number, data_table: any) {

        this.init_database()
            .then((db: SQLiteObject) => {
                let query: string = "update price_line set current_price = ? where price_line.id in (select price_line.id from price_line inner join  visit_sheet on price_line.visit_sheet_id = visit_sheet.id where visit_sheet.partner_id = ? and price_line.visit_sheet_id = ? and price_line.product_id = ?)";
                let size = data_table.length, i = 0;
                for (i = 0; i < size; i++) {
                    db.executeSql(query, [data_table[i].current_price, partner_id, data_table[i].visit_sheet_id, data_table[i].product_id])
                        .then()
                        .catch((e) => alert(e.message));
                }
            })
            .catch(e => alert(e.message))
    }
    update_get_data_p2(available_stock: number, placement: number, product_id: number, visit_sheet_id: number): Promise<any> {
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "UPDATE stock_line set available_stock = " + available_stock + ", placement = " + placement + " WHERE product_id= " + product_id + " AND visit_sheet_id=" + visit_sheet_id + "";
            return db.executeSql(sql_select, []).then(() => {

            }).catch(e => {
                console.log('Error on update \n' + JSON.stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e));
        })
    }
    insert_stock_line(data: any) {
        try {
            return this.init_database()
                .then((db: SQLiteObject) => {
                    return db.executeSql("select id, manufacturer_id from itg_product where product_type = 1 ", [])
                        .then(products => {
                            if (products.rows.length > 0) {
                                for (let i = 0; i < products.rows.length; i++) {
                                    let query = "insert into stock_line(create_uid,placement,product_id,write_uid,visit_sheet_id,available_stock,manufacturer_id,last_visit_stock) values(" + data.create_uid + ",0," + products.rows.item(i).id + "," + data.write_uid + "," + data.visit_sheet_id + ",0," + products.rows.item(i).manufacturer_id + ",(select last_visit_stock from stock_line where product_id = " + products.rows.item(i).id + " and visit_sheet_id = " + data.visit_sheet_id + " ));";
                                    db.executeSql(query, []).then(() => console.log("stock_line inserted")).catch(e => console.log(e.message));
                                }
                            }
                        }).catch(e => console.log(e.message))
                        .then(() => {
                            //insert plv_line : page 5 
                            return db.executeSql("select id,manufacturer_id from itg_product where product_type !=1", [])
                                .then((products) => {
                                    for (let i = 0; i < products.rows.length; i++) {
                                        let params = [data.create_uid, products.rows.item(i).id, data.visit_sheet_id, products.rows.item(i).manufacturer_id, 0, data.write_uid];
                                        db.executeSql("insert into plv_line(create_uid,product_id,visit_sheet_id,manufacturer_id,quantity,write_uid) values(?,?,?,?,?,?)", params)
                                            .then(() => {
                                                console.log("plv_line inserted");
                                            })
                                    }
                                }).catch(e => console.log(e))
                        }).catch(e => console.log(e.message))
                        .then(() => {
                            //page 4
                            return db.executeSql("select id from pos_audit_criteria", [])
                                .then((critere) => {
                                    console.log(critere);
                                    for (let i = 0; i < critere.rows.length; i++) {
                                        let params = [critere.rows.item(i).id, data.create_uid, data.write_uid, data.visit_sheet_id]
                                        db.executeSql("insert into pos_audit_line(audit_criteria_id,create_uid,write_uid,visit_sheet_id) values(?,?,?,?)", params)
                                            .then(() => { console.log("pos_audit_line inserted") })
                                            .catch(e => console.log(JSON.stringify(e)));
                                    }
                                })
                        })
                        .then(() => {

                        })
                }).catch(e => console.log("e2 ==>" + e.message));
        }
        catch (e_1) {
            return console.log("e3 ==>", e_1.message);
        }
    }
    get_all_fiche_visite_by_id_tournee(id_tournee: number, user_id: number) {
        return this.init_database().then((db: SQLiteObject) => {
            let sql: string = "select res_users.login as user_id,i_t_tournee.state,visit_sheet.state,tour_id,visit_sheet.id as visit_sheet_id,res_partner.name as partner_id ,visit_sheet.partner_id as res_partner_id,begin_datetime as visit_sheet_begin_date_time,end_datetime as visit_sheet_end_date_time,start_date as tournee_begin,end_date as tournee_end,visit_sheet.state,res_partner.provider_longitude,res_partner.provider_latitude from visit_sheet join res_users on res_users.id = visit_sheet.user_id join i_t_tournee on i_t_tournee.id = visit_sheet.tour_id join res_partner on visit_sheet.partner_id = res_partner.id where visit_sheet.user_id = ? and tour_id = ? and i_t_tournee.state != 'Clôturé' and visit_sheet.state != 'Clôturé' group by visit_sheet.id,visit_sheet.user_id,tour_id";
            //let sql : string = "select visit_sheet.id as visit_sheet_id, visit_sheet.provider_latitude, visit_sheet.provider_longitude, (select res_users.login from res_users where res_users.active = 1) as user_id, res_partner.id as res_partner_id, res_partner.name as partner_id, i_t_tournee.start_date as tournee_begin, i_t_tournee.end_date as tournee_end, visit_sheet.begin_datetime as visit_sheet_date_begin, visit_sheet.end_datetime as visit_sheet_date_end, visit_sheet.state from visit_sheet left join res_partner on visit_sheet.partner_id = res_partner.id left join i_t_tournee on visit_sheet.tour_id = i_t_tournee.id where i_t_tournee.state != 'Clôturé' and visit_sheet.state != 'Clôturé' and i_t_tournee.id = ? " ;
            let data_return = [];
            let params = [user_id, id_tournee];
            return db.executeSql(sql, params)
                .then(data => {
                    if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {
                            if (data.rows.item(i).state == "closed") data.rows.item(i).state = 'fermé';
                            else if (data.rows.item(i).state == "open") data.rows.item(i).state = 'ouvert';
                            else data.rows.item(i).state = 'nouveau';
                            data_return.push(data.rows.item(i));
                        }
                        return data_return;
                    }

                })
                .catch(e => {
                    console.log('Error on select get_all_fiche_visite \n' + JSON.stringify(e));
                })
        });
    }

    save_position(id: number, position: any) {
        return this.init_database().then((db: SQLiteObject) => {
            let query = "update visit_sheet set provider_latitude = ?, provider_longitude where id = ?";
            return db.executeSql(query, [position.latitude, position.longitude, id]).then(() => {

                console.log('update res with succes \n');
            }).catch(e => {
                console.log('Error on update res \n' + JSON.stringify(e));
            });
        });
    }

    insert_data_visit_sheet(data, etat: string) {
        return this.init_database().then((db: SQLiteObject) => {
            let query = "insert into visit_sheet (partner_id, pos_initial, provider_latitude, provider_longitude, region_id, secteur_id, agence_id, zone_id, state) values (?, ?, ?, ?, ?, ?, ?, ?, ?) ";
            return db.executeSql(query, [
                data.partner_id,
                data.pos_initial,
                data.provider_latitude,
                data.provider_longitude,
                data.region_id,
                data.secteur_id,
                data.agence_id,
                data.zone_id,
                etat,
            ]).then(() => {
                console.log('insert res with succes \n');
            }).catch(e => {
                console.log('Error on update res \n' + JSON.stringify(e));
            });
        });
    }

    get_res_partner_pos_init_supp() {
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "select id as visit_sheet_id, (select res_users.login from res_users where res_users.active = 1) as user_id, (select res_partner.name from res_partner where visit_sheet.partner_id = res_partner.id) as partner_id, visit_sheet.begin_datetime, visit_sheet.end_datetime, visit_sheet.state from visit_sheet";
            let data_return = [];
            return db.executeSql(sql_select, [])
                .then(data => {
                    if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {
                            data_return.push(data.rows.item(i));
                        }
                        return data_return;
                    }

                })
                .catch(e => {
                    console.log('Error on select get_all_fiche_visite \n' + JSON.stringify(e));
                })
        });
    }

    get_stock_visit_sheet_by_id_p2(visit_sheet_id: number, partner_id: number) {
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = " select t2.product_id,itg_product.name as product_name,itg_manufacturer.name as manufacturer_name,sum(available_stock) as available_stock,sum(last_visit_stock) as last_visit_stock,sum(placement) as placement, (select sum(placement) from stock_line as t1 where t1.product_id = t2.product_id and visit_sheet_id in(select id from visit_sheet where id in (select id from visit_sheet where partner_id = ? and id < ? order by id desc limit 1 ) and partner_id = ? )) as last_placement , (select avg(last_visit_stock) as last_visit_stock_avg from stock_line as t3 where t3.product_id=t2.product_id and visit_sheet_id in (select id from visit_sheet where partner_id = ? order by id Desc limit 4) group by t3.product_id,t3.manufacturer_id) as last_visit_stock_avg from stock_line as t2 join itg_product on itg_product.id= t2.product_id join itg_manufacturer on t2.manufacturer_id = itg_manufacturer.id where visit_sheet_id = ? group by t2.product_id,t2.manufacturer_id";
            let data_return = [];
            return db.executeSql(sql_select, [partner_id, visit_sheet_id, partner_id, partner_id, visit_sheet_id])
                .then(data => {

                    if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {
                            if (data.rows.item(i).available_stock === 0) data.rows.item(i).available_stock = null;
                            if (data.rows.item(i).last_visit_stock === 0) data.rows.item(i).last_visit_stock = null;
                            if (data.rows.item(i).placement === 0) data.rows.item(i).placement = null;
                            if (data.rows.item(i).last_placement === 0) data.rows.item(i).last_placement = null;
                            if (data.rows.item(i).last_visit_stock_avg === 0) data.rows.item(i).last_visit_stock_avg = null;
                            data_return.push(data.rows.item(i));
                        }
                        return data_return;
                    }

                })
                .catch(e => {
                    alert(e.message)
                });
        });
    }


    get_n_last_partner_visit_sheet_id(partner_id: number, visit_sheet_id: number, n: number) {
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "select visit_sheet.id from visit_sheet where visit_sheet.partner_id = ? and visit_sheet.id != ? order by visit_sheet.id DESC limit ? ";
            let data_return = [partner_id, visit_sheet_id, n];
            return db.executeSql(sql_select, [])
                .then(data => {
                    if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {
                            data_return.push(data.rows.item(i));
                        }
                        return data_return;
                    }

                })
                .catch(e => {
                    console.log('Error on select get_n_latest_visit_sheet_id \n' + JSON.stringify(e));
                })
        });
    }

    get_data_for_p5(visit_sheet_id: number) {
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "select itg_product.id as produit_id, itg_product.name as product_name, sum(plv_line.quantity) as quantity from plv_line inner join itg_product on plv_line.product_id = itg_product.id where plv_line.visit_sheet_id = ? group by plv_line.product_id";
            let data_return = [];
            return db.executeSql(sql_select, [visit_sheet_id])
                .then(data => {

                    if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {
                            data_return.push(data.rows.item(i));
                        }
                        return data_return;
                    }

                })
                .catch(e => {
                    console.log('Error on select get_data_for_p5 \n' + JSON.stringify(e));
                })
        });
    }

    get_data_for_p3(product_id: number, visit_sheet_id: number, partner_id: number) {
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "select itg_product.name as product_name,itg_manufacturer.name as manufacturer_name,current_price,partner_id,(select current_price from price_line where visit_sheet_id in (select id from visit_sheet where id < ? and partner_id = ? order by id desc limit 1)) as current_price2 from itg_product join itg_manufacturer on itg_manufacturer.id = itg_product.manufacturer_id  join price_line on price_line.product_id = itg_product.id join visit_sheet on visit_sheet.id = price_line.visit_sheet_id where visit_sheet_id = ? and product_id = ? group by product_id,visit_sheet_id";
            let params = [visit_sheet_id, partner_id, visit_sheet_id, product_id];
            return db.executeSql(sql_select, params)
                .then((data: any) => {
                    if (data.rows.length > 0) {
                        console.log("tode nisy tao");
                        return data.rows.item(0);
                    }
                    else {
                        console.log("tsisy tanaty base le izy");
                        let sql_insert = "insert into price_line(product_id,visit_sheet_id,current_price) values(?,?,?)";
                        return db.executeSql(sql_insert, [product_id, visit_sheet_id, 0])
                            .then(() => {
                                let sql_select: string = "select itg_product.name as product_name,itg_manufacturer.name as manufacturer_name,current_price,partner_id,(select current_price from price_line where visit_sheet_id in (select id from visit_sheet where id < ? and partner_id = ? order by id desc limit 1)) as current_price2 from itg_product join itg_manufacturer on itg_manufacturer.id = itg_product.manufacturer_id  join price_line on price_line.product_id = itg_product.id join visit_sheet on visit_sheet.id = price_line.visit_sheet_id where visit_sheet_id = ? and product_id = ? group by product_id,visit_sheet_id";
                                return db.executeSql(sql_select, [visit_sheet_id, partner_id, visit_sheet_id, product_id])
                                    .then((data) => {
                                        if (data) {
                                            console.log("averina alaina le data")
                                            return data.rows.item(0);
                                        }
                                    })
                            }).catch(e => console.log("get data p3 , insert : " + e.message));
                    }

                }).catch(e => {
                    console.log('Error on select get_data_for_p3 \n' + JSON.stringify(e.message));
                })

        });
    }


    get_data_for_p7(user_id: number, itg_survey_id: number) {
        return this.init_database().then((db: SQLiteObject) => {
            let data_return = [];
            let sql_select: string = "select distinct itg_survey_question.name, itg_survey_question.id as question_id,itg_survey.id as itg_survey_id,itg_survey_question.type, group_concat(itg_survey_label.id, '|') as response_id, group_concat(itg_survey_label.name, '|') as options from itg_survey left join itg_survey_question on itg_survey.id = itg_survey_question.survey_id left join itg_survey_label on itg_survey_question.id = itg_survey_label.question_id inner join res_users on itg_survey.create_uid = res_users.id where itg_survey.create_uid = "+user_id+" and itg_survey.id = "+itg_survey_id+" group by itg_survey_question.id, itg_survey_question.name, itg_survey.id";
            console.log(sql_select);
            return db.executeSql(sql_select, [])
                .then(data => {
                    console.log(JSON.stringify(data));
                   // if (data.rows.length > 0) {
                        for (var i = 0; i < data.rows.length; i++) {

                            switch (data.rows.item(i).type) {
                                case "free_text": {
                                    try {
                                        data.rows.item(i).type = "textarea";
                                    }
                                    catch (e) {
                                        console.log("textarea ==>", e);
                                    }
                                    break;
                                }

                                case "numerical_box": {
                                    try {
                                        data.rows.item(i).type = "number";
                                    }
                                    catch (e) {
                                        console.log("numerical_box ==>", e);
                                    }
                                    break;
                                }

                                case "datetime": {
                                    try {
                                        data.rows.item(i).type = "datetime";
                                    }
                                    catch (e) {
                                        console.log("datetime ==>", e);
                                    }
                                    break;
                                }
                                case "simple_choice": {
                                    let md = { value: Number, label: String };
                                    let key = { key: String };
                                    let type = { type: String };
                                    let templateOptions = {
                                        label: String,
                                        multiple: Boolean,
                                        options: [
                                            { value: Number, label: String }
                                        ]
                                    }
                                    var dt_response, dt_response_id, md_data = [];
                                    try {
                                        dt_response = data.rows.item(i).options.split('|');
                                        dt_response_id = data.rows.item(i).response_id.split('|');
                                        for (var a = 0; a < dt_response.length; a++) {
                                            md = { value: dt_response_id[a], label: dt_response[a] }
                                            md_data.push(md);
                                        }
                                        data.rows.item(i).options = md_data
                                    }
                                    catch (e) {
                                        console.log('simple_choice ==>', e);
                                    }
                                    break;
                                }

                                case "multiple_choice": {
                                    let md = { value: Number, label: String };
                                    let key = { key: String };
                                    var dt_response, dt_response_id, md_data = [];
                                    try {
                                        dt_response = data.rows.item(i).options.split('|');
                                        dt_response_id = data.rows.item(i).response_id.split('|');
                                        for (var a = 0; a < dt_response.length; a++) {
                                            md = { value: dt_response_id[a], label: dt_response[a] }
                                            md_data.push(md);
                                        }
                                        data.rows.item(i).options = md_data
                                    }
                                    catch (e) {
                                        console.log('multiple_choice ==> ', e);
                                    }
                                    break;
                                }

                                case "textbox": {
                                    try {
                                        data.rows.item(i).type = "input";
                                    }
                                    catch (e) {
                                        console.log('textbox ==>', e);
                                    }
                                    break;
                                }

                                default: {
                                    console.log('default ==>', data.rows.item(i).type);
                                    break;
                                }

                            }
                            data_return.push(data.rows.item(i));
                        }
                        console.log("model" + data_return);
                        console.log("response" + dt_response);
                        return data_return;

                   // }

                }).catch(e => {
                    console.log('Error on select get_data_for_p7 \n' + JSON.stringify(e));
                })

        });
    }
    set_pv_line_quantity_product(data: any, visit_sheet_id: number) {
        this.insert_pv_line_quantity_product(data, visit_sheet_id);
    }
    update_pv_line_quantity_product(data : any , visit_sheet_id : number  ){
        return this.init_database()
            .then((db:SQLiteObject)=>{
                let query : string = "update plv_line set quantity = ? where product_id = ? and id = ? and visit_sheet_id = ? ";
                let size = data.length , i = 0;
                for(i = 0 ; i < size ; i ++){
                    db.executeSql(query,[data[i].quantity,data[i].produit_id,data[i].id,visit_sheet_id])
                        .then(data => {
                            let a = data.rows.insertId;
                            let query2 = "insert into data_for_sync (table_name, table_id, is_synced) values (?, ?, ?)";
                            return db.executeSql(query2, ["plv_line",a,1])
                            .then(() => {
                                console.log('insert insert_new_data_for_sync with succes \n');
                            }).catch(e => {
                                console.log('Error on insert_new_data_for_sync \n' + JSON.stringify(e));
                            });
                        })
                        .catch(e => alert(e.message));
                }
            })
        }

    insert_pv_line_quantity_product(data: any, visit_sheet_id: number) {
        return this.init_database()
            .then((db: SQLiteObject) => {
                let query_insert: string = "insert into plv_line(product_id,visit_sheet_id,quantity) values(?,?,?)";
                let params = [data.produit_id, visit_sheet_id, data.quantity];
                db.executeSql(query_insert, params)
                    .then((data) => {
                        let query = " insert into data_for_sync(table_id,table_name,action_type) values(?,?,?)";
                        db.executeSql(query, [data.insertId, "plv_line", 1])
                            .then(() => console.log("mety le insert anle p5"))
                            .catch(e => console.log(e.message));
                    })
                    .catch(e => alert(e.message));
            })
    }

    insert_new_data_for_sync(table: string) {
        return this.init_database().then((db: SQLiteObject) => {
            this.select_max_basic_data(table).then(max => {
                let query = "insert into data_for_sync (table_name, table_id, is_synced) values (?, ?, ?) ";
                return db.executeSql(query, [
                    table,
                    max - 1,
                    0
                ]).then(() => {
                    console.log('insert insert_new_data_for_sync with succes \n');
                }).catch(e => {
                    console.log('Error on insert_new_data_for_sync \n' + JSON.stringify(e));
                });
            })
        });
    }

    update_data_for_sync(table: string, table_id) {
        return this.init_database().then((db: SQLiteObject) => {
            this.select_max_basic_data(table).then(max => {
                let query = "update data_for_sync set is_synced = 1 where table_name = ? and table_id = ?) ";
                return db.executeSql(query, [
                    table,
                    table_id
                ]).then(() => {
                    console.log('insert insert_new_data_for_sync with succes \n');
                }).catch(e => {
                    console.log('Error on insert_new_data_for_sync \n' + JSON.stringify(e));
                });
            })
        });
    }


    get_all_tournees_by_user(user_id: number) {
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select = " select user_id,i_t_tournee.id,i_t_tournee.name,i_t_tournee.state,i_t_tournee.start_date,i_t_tournee.end_date from i_t_tournee join visit_sheet on visit_sheet.tour_id = i_t_tournee.id join res_users on res_users.id = visit_sheet.user_id where user_id = ? group by user_id,i_t_tournee.id";
            let data_return = [];
            return db.executeSql(sql_select, [user_id]).then((data) => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }

                    return data_return;
                }
            }).catch(e => alert(e.message))
        }).catch(e => alert(e.message))
    }

    get_user_by_secteur(secteur_id: number): Promise<any> {
        return this.init_database()
            .then((db: SQLiteObject) => {
                let data_return = [];
                let sql = "select seller_id,promoteur_id from i_t_secteur where id = ? ";
                return db.executeSql(sql, [secteur_id])
                    .then((data: any) => {

                        let seller_sponsor = [];
                        if (data && data.rows.length > 0) {
                            let i = 0, size = data.rows.length;
                            for (i = 0; i < size; i++) {
                                seller_sponsor.push(data.rows.item(i));
                            }
                            console.log(JSON.stringify(seller_sponsor));
                            return seller_sponsor;
                        }
                        else return 0;
                    }).catch(e => { alert(e.message) })
                    .then((data: any) => {
                        if (data === 0) alert("tsy misy seller sponsor");
                        else {
                            sql = " insert into res_users_res_partner_rel(res_users_id,partner_id) values(?,?)";
                            let params = [data[0].seller_id, data[0].promoteur_id];
                            return db.executeSql(sql, params)
                                .then(() => {
                                    return params;
                                }).catch(e => { alert(e.message) })
                                .then((params: Array<any>) => {
                                    if (params) {
                                        sql = " select login as display , id as value  from res_users where id in(select DISTINCT id from res_users where id = ? or id = ?)";
                                        return db.executeSql(sql, params)
                                            .then((data: any) => {
                                                if (data && data.rows.length > 0) {
                                                    for (let i = 0; i < data.rows.length; i++) {
                                                        data_return.push(data.rows.item(i));
                                                    }
                                                    console.log(JSON.stringify(data_return));
                                                    return data_return;
                                                }
                                                else { throw "Aucun utilisateur du secteur" }
                                            }).catch(e => { alert(e.message) });
                                    }
                                }).catch(e => { alert(e.message) });
                        }
                    })
            }).catch(error => { alert(error.message) });
    }

    updateBatch(tablename: string, data: any, fields: any) {
        let query = " update " + tablename + " set ";
        let params = [];

        fields.forEach((field: any) => {
            if (!Reflect.get(data, field.name)) { }
            else {
                params.push(Reflect.get(data, field.name));
                query += field.name + " = ?, ";
            }
        });
        query = query.substring(0, query.length - 2);
        params.push(Reflect.get(data, "x_odoo_id"));
        query += " where id = ? ";
        console.log(query);
        console.log(params);
        //execute query 
        this.init_database()
            .then((db: SQLiteObject) => {
                db.executeSql(query, params)
                    .then()
                    .catch(e => alert(e.message));
            }).catch(e => alert(e.message));
    }
    insertBatch(tablename: string, data: any, fields: any) {
        let query: string = " insert into " + tablename + " (";
        let params = [];
        fields.forEach((field: any) => {
            if (!Reflect.get(data, field.name)) { }
            else query += field.name + ",";
        });
        query = query.substring(0, query.length - 1);
        query += ") values(";
        fields.forEach((field: any) => {
            if (!Reflect.get(data, field.name)) { }
            else {
                query += "?,";
                params.push(Reflect.get(data, field.name));
            }
        });

        query = query.substring(0, query.length - 1);
        query += ")";

        //execute query 
        this.init_database()
            .then((db: SQLiteObject) => {
                db.executeSql(query, params)
                    .then()
                    .catch(e => alert(e.message));
            }).catch(e => alert(e.message));
    }

    get_columns(data: any) {
        let data_from_web = data;
        this.init_database()
            .then((db: SQLiteObject) => {
                let query = "PRAGMA table_info ( '" + data.tablename + "' )";
                return db.executeSql(query, [])
                    .then((data: any) => {
                        let data_return = [];
                        if (data && data.rows.length > 0) {
                            for (let i = 0; i < data.rows.length; i++) {
                                data_return.push(data.rows.item(i));
                            }
                            return data_return;
                        }
                    }).catch(e => alert(e.message));
            }).catch(e => alert(e.message))
            .then((cols) => {

            })
    }
    storage_Login(log: string, pass: string): Promise<any> {
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "select * from res_users where login = ? ";
            return db.executeSql(sql_select, [log]).then((data) => {
                if (data.rows.length > 0) {
                    if (data.rows.item(0).password == pass) {
                           data = data.rows.item(0);
                            return data;      
                    }
                    else return 0;
                }
            }).catch(e => {
                console.log('Error on select \n' + stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + stringify(e));
        })
    }
    Updata_active_Login(id: any){
        return this.init_database().then((db: SQLiteObject) => {
            let sql_select: string = "update res_users set active = 0 where id = "+id+" ";
            return db.executeSql(sql_select).then(() => {
                console.log('insert insert_new_data_for_sync with succes \n');
            }).catch(e => {
                console.log('Error on insert_new_data_for_sync \n' + JSON.stringify(e));
            });
        }).catch(e => {
            console.log('Error on connexion \n' + JSON.stringify(e));
        })
    }
    update_response(visit_sheet_id : number ,data : any){
        return this.init_database()
            .then((db:SQLiteObject)=>{
                let params = [];
                let i = 0 , size = data.length;
                for( i = 0 ; i < size ; i++ ){
                    let query = "update pos_audit_line  " ;
                    if(data[i].response_begin && ! data[i].response_end){
                        query += " set visit_begin = (select id from pos_audit_answer where criteria_id = ? and name = ? )";
                        params = [data[i].id,data[i].response_begin,data[i].id,visit_sheet_id];
                    }
                    else if(data[i].response_end && !data[i].response_begin){
                        query += " set visit_end = (select id from pos_audit_answer where criteria_id = ? and name = ? )";
                        params = [data[i].id,data[i].response_end,data[i].id,visit_sheet_id];
                    }
                    else if(data[i].response_end && data[i].response_begin){
                        query += " set visit_begin = (select id from pos_audit_answer where criteria_id = ? and name = ? ),visit_end = (select id from pos_audit_answer where criteria_id = ? and name = ? )";
                        params = [data[i].id,data[i].response_begin,data[i].id,data[i].response_end,data[i].id,visit_sheet_id];
                    }
                    else {
                        continue ;
                    }
                    query += " where audit_criteria_id = ?  and visit_sheet_id = ? ";
                    db.executeSql(query,params)
                        .then(data=>{
                            let a = data.rows.insertId;
                            let query2 = "insert into data_for_sync (table_name, table_id, is_synced) values (?, ?, ?)";
                            return db.executeSql(query2, ["pos_audit_line",a,1])
                            .then(() => {
                                console.log('insert insert_new_data_for_sync with succes \n');
                            }).catch(e => {
                                console.log('Error on insert_new_data_for_sync \n' + JSON.stringify(e));
                            });
                        })
                        .catch(e=>{
                            alert(e.message)
                        })
                    
                }
            })
            .catch(e => alert(e.message))
    }

   insert_question_answer(visit_sheet_id: number, data : any){
        return this.init_database()
            .then((db:SQLiteObject)=>{
                let params = [];
                let i = 0 , size = data.length;
                for( i = 0 ; i < size ; i++ ){
                    let query = "insert into visit_survey (question, answer, visit_sheet_id) values (?, ?, ?) " ;
                    params = [data[i].quesion,data[i].answer,visit_sheet_id];
                    db.executeSql(query,params)
                        .then(data=>{
                            let a = data.rows.insertId;
                            let query2 = "insert into data_for_sync (table_name, table_id, is_synced) values (?, ?, ?)";
                            return db.executeSql(query2, ["visit_survey",a,1])
                            .then(() => {
                                console.log('insert insert_new_data_for_sync with succes \n');
                            }).catch(e => {
                                console.log('Error on insert_new_data_for_sync \n' + JSON.stringify(e));
                            });
                        })
                        .catch(e=>{
                            alert(e.message)
                        })
                }
            })
            .catch(e => alert(e.message))
    }
    get_data_survey_p7(visit_sheet_id: number) {
        return this.init_database().then((db: SQLiteObject) => {
            let data_return =[];
            let sql_select: string = "select * from visit_survey where visit_sheet_id = "+visit_sheet_id+" ";
            return db.executeSql(sql_select, []).then((data) => {
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        data_return.push(data.rows.item(i));
                    }
                    return data_return;
                }
            }).catch(e => {
                console.log('Error on select \n' + stringify(e));
            })
        }).catch(e => {
            console.log('Error on connexion \n' + stringify(e));
        })
    }
}