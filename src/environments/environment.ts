import { HttpHeaders } from '@angular/common/http';

export const environment = {production: false ,};
export const base_url_for_sync = 'http://localhost:3000/' ;
export const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
};

//TABLES
export const request_res_partner : string = "create table if not exists res_partner (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , name varchar(40), company_id INTEGER, comment text, website varchar(40),create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP , color INTEGER, active tinyint(4)	, street varchar(40), supplier tinyint(4)	, city varchar(40), display_name varchar(40), zip varchar(40),title INTEGER, country_id INTEGER, commercial_company_name varchar(40), parent_id INTEGER, company_name varchar(40), employee tinyint(4)	, ref varchar(40), email varchar(40), is_company tinyint(4)	, function varchar(40), lang varchar(40), fax varchar(40), street2 varchar(40), barcode varchar(40), phone varchar(40), write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP , daty date, tz varchar(40), write_uid INTEGER, customer tinyint(4), create_uid INTEGER, credit_limit double, user_id INTEGER, mobile varchar(40), type varchar(40), partner_share tinyint(4), vat varchar(40), state_id INTEGER, commercial_partner_id INTEGER, date_localization date, partner_latitude numeric,partner_longitude numeric, notify_email varchar(40) , message_last_post TIMESTAMP DEFAULT CURRENT_TIMESTAMP , opt_out tinyint(4)	, message_bounce INTEGER,signup_type varchar(40), signup_expiration TIMESTAMP DEFAULT CURRENT_TIMESTAMP , signup_token varchar(40), team_id INTEGER, calendar_last_notif_ack TIMESTAMP DEFAULT CURRENT_TIMESTAMP , type_quartier_id INTEGER, source_approvisionnement_id INTEGER, cible_installation_presentoirs_id INTEGER, numero_telephone2 varchar(40), numero_telephone3 varchar(40),numero_telephone1 varchar(40),couverture_commerciale_id INTEGER, classification2_id INTEGER, nom_gerant varchar(40), frequence_approvisionnement_id INTEGER, enseigne_appartenance_id INTEGER,agence_id INTEGER, activite_pos_id INTEGER, fournisseur_principal_id INTEGER, contrat_id INTEGER, fournisseur_secondaire_id INTEGER,  nom_agent_commercial_id INTEGER, cible_activation_id INTEGER, state varchar(40), statut_client_id INTEGER, permanent_POSM5_id INTEGER, point_de_vente tinyint(4)	, repere varchar(40), emplacement_id INTEGER, cooperation_itg_id INTEGER,  proximite_id INTEGER, frequence_visite_id INTEGER, permanent_POSM3_id INTEGER, permanent_POSM1_id INTEGER, adresse varchar(40), preference_animateur_id INTEGER, provider_latitude numeric, zone_id INTEGER, latitude double , commentaire text, longitude double, message_warning text, permanent_POSM4_id INTEGER, region_id INTEGER, nom_pos varchar(40),   quartier varchar(40),  ville_id INTEGER, type_client_id INTEGER, utilisateur_associe_id INTEGER, permanent_POSM2_id INTEGER,   secteur_id INTEGER, provider_longitude numeric,     code_client varchar(40), activation_autorisee_id INTEGER, is_today tinyint(4)	,         classification1_id INTEGER,     a_visiter_moved0 varchar(40),  visite varchar(40),    a_visite tinyint(4)	, a_visiter tinyint(4) , canal_id tinyint(4), photo varchar(40))" ;
export const request_res_users : string = "create table if not exists res_users (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,name varchar(100), active TINYINT(4), login varchar(40), password varchar(40), company_id INTEGER, partner_id INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, share tinyint(4), write_uid INTEGER, create_uid INTEGER, action_id INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, signature TEXT, password_crypt varchar(200), alias_id INTEGER, sale_team_id INTEGER, target_sales_done INTEGER, target_sales_won INTEGER)" ;
export const request_i_t_activation_autorisee : string = "create table if not exists i_t_activation_autorisee (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_activite_pos : string = "create table if not exists i_t_activite_pos (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), canal_id INTEGER, write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_agence : string = "create table if not exists i_t_agence (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, code varchar(40), create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, region_id INTEGER)" ;
export const request_i_t_cible_activation : string = "create table if not exists i_t_cible_activation (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)";
export const request_i_t_cible_installation_presentoirs : string = "create table if not exists i_t_cible_installation_presentoirs (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_classification1 : string = "create table if not exists i_t_classification1 (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_classification2 : string = "create table if not exists i_t_classification2 (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_contrat : string = "create table if not exists i_t_contrat (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, name varchar(40), write_uid INTEGER, date_debut_contrat TIMESTAMP NOT NULL, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, date_fin_contrat TIMESTAMP NOT NULL)" ;
export const request_i_t_cooperation_itg : string = "create table if not exists i_t_cooperation_itg (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_couverture_commerciale : string = "create table if not exists i_t_couverture_commerciale (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_emplacement : string = "create table if not exists i_t_emplacement (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_enseigne_appartenance : string = "create table if not exists i_t_enseigne_appartenance (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_client_grossiste : string = "create table if not exists i_t_client_grossiste (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_frequence_approvisionnement : string = "create table if not exists i_t_frequence_approvisionnement (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_frequence_visite : string = "create table if not exists i_t_frequence_visite (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_fournisseur_principale : string = "create table if not exists i_t_fournisseur_principale (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_fournisseur_secondaire : string = "create table if not exists i_t_fournisseur_secondaire (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_permanent_posm : string = "create table if not exists i_t_permanent_posm (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, manufacturer_id integer)" ;
export const request_i_t_preference_animateur : string = "create table if not exists i_t_preference_animateur (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_proximite : string = "create table if not exists i_t_proximite (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_secteur : string = "create table if not exists i_t_secteur (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, code varchar(40), create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), seller_id integer, promoteur_id integer, write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, zone_id INTEGER)" ;
export const request_i_t_source_approvisionnement : string = "create table if not exists i_t_source_approvisionnement (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_canal : string = "create table if not exists i_t_canal (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_statut_client : string = "create table if not exists i_t_statut_client (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_type_client : string = "create table if not exists i_t_type_client (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, code varchar(40) )" ;
export const request_i_t_type_quartier : string = "create table if not exists i_t_type_quartier (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_ville : string = "create table if not exists i_t_ville (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_zone : string = "create table if not exists i_t_zone (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, agence_id INTEGER)" ;
export const request_i_t_tournee : string = "create table if not exists i_t_tournee (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, commercial_id tinyint(4), date TIMESTAMP NOT NULL, start_date NOT NULL, end_date TIMESTAMP NOT NULL, state tinyint(4))" ;
export const request_i_t_pos_initial : string = "create table if not exists i_t_pos_initial (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, sequence INTEGER, visite varchar (40), tour_id INTEGER, partner_id INTEGER)" ;
export const request_i_t_pos_additional : string = "create table if not exists i_t_pos_additional (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, sequence INTEGER, visite varchar (40), tour_id INTEGER, partner_id INTEGER)" ;
export const request_visit_sheet : string = "create table if not exists visit_sheet (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, page_number_total varchar(40), show_btn_end_visit tinyint (4), visit_duration double, partner_id INTEGER, user_id INTEGER, state varchar (40), provider_longitude numeric, begin_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, next_visit_goal text, provider_latitude numeric, end_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, hide_btn_next_next_page tinyint (4), tour_id INTEGER, visit_duration_str varchar(40), pos_initial tinyint(4), region_id INTEGER, secteur_id INTEGER, agence_id INTEGER, zone_id INTEGER, has_survey tinyint(4), pos_initial_line_id INTEGER, pos_additional_line_id INTEGER)" ;
export const request_stock_line : string = "create table if not exists stock_line (id INTEGER, create_uid INTEGER, placement INTEGER, product_id INTEGER, write_uid INTEGER, visit_sheet_id INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, available_stock INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, manufacturer_id INTEGER, last_visit_stock INTEGER)";
export const request_itg_manufacturer : string = "create table if not exists itg_manufacturer (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), sequence INTEGER, write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_itg_product : string = "create table if not exists itg_product (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, begin_date TIMESTAMP NOT NULL, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), end_date TIMESTAMP NOT NULL, retailer_unit_sale_price double, retailer_pqt_sale_price double, grs_cost_price double, tax_status_id INTEGER, dmg_sale_price double, write_uid INTEGER, brand_id INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, dmg_cost_price double, active tinyint(4), grs_sale_price double, manufacturer_id INTEGER, ref varchar(40), product_type_code varchar(40), product_type INTEGER)" ;
export const request_itg_product_type : string = "create table if not exists itg_product_type (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, brand_id INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, code varchar(40) )" ;
export const request_price_line : string = "create table if not exists price_line (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, product_id INTEGER, currency_id INTEGER, visit_sheet_id INTEGER, current_price INTEGER, manufacturer_id INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)";
export const request_res_currency : string = "create table if not exists res_currency (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), symbol varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, rounding DOUBLE, active tinyint(4), position varchar(40))";
export const request_pos_audit_line : string = "create table if not exists pos_audit_line (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, visit_begin_moved0 tinyint(4), create_uid INTEGER, audit_criteria_id INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, note varchar(40), visit_sheet_id INTEGER, visit_end_moved0 tinyint(4), visit_begin INTEGER, visit_end INTEGER)" ;
export const request_pos_audit_answer : string = "create table if not exists pos_audit_answer (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, criteria_id INTEGER)" ;
export const request_pos_audit_criteria : string = "create table if not exists pos_audit_criteria (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, active tinyint(4))";
export const request_plv_line : string = "create table if not exists plv_line (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, product_id INTEGER, visit_sheet_id INTEGER, manufacturer_id INTEGER, quantity INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)";
export const request_itg_survey : string = "create table if not exists itg_survey (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, view_id integer, state varchar(40), field_default_value varchar(40))" ;
export const request_itg_survey_question : string = "create table if not exists itg_survey_question (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, type VARCHAR(40), page_id INTEGER, mandatory TINYINT(4), sequence INTEGER, survey_id INTEGER)" ;
export const request_itg_survey_label : string = "create table if not exists itg_survey_label (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(40), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, quizz_mark INTEGER, question_id INTEGER)" ;
export const request_data_for_sync : string = "create table if not exists data_for_sync (id integer not null primary key AUTOINCREMENT, table_name varchar(30), is_synced tinyint(4), table_id integer, action_type integer, type varchar(40), x_odoo_id number)" ;
export const request_permanent_posm_res_partner_rel : string = "create table if not exists i_t_permanent_posm_res_partner_rel (id integer not null primary key AUTOINCREMENT, i_t_permanent_posm_id integer, partner_id integer)" ;
export const request_res_users_res_partner_rel : string = "create table if not exists res_users_res_partner_rel (id integer not null primary key AUTOINCREMENT, res_users_id integer, partner_id integer)" ;
export const request_i_t_region : string = "create table if not exists i_t_region (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, code varchar(255), create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_visit_survey : string = "create table if not exists visit_survey (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, question varchar (250), visit_sheet_id varchar (250))";

// VIEWS
export const four_last_view : string = "create view if not exists four_last as select avg(last_visit_stock) as last_four_visit,product_id,create_uid,manufacturer_id from stock_line where visit_sheet_id in (select DISTINCT visit_sheet_id from stock_line where visit_sheet_id order by visit_sheet_id DESC) group by product_id,create_uid;" ;
export const user_partner_concatened : string = "create view user_partner_concatened as select res_partner.id ,res_partner.name, group_concat(res_users.login, '|') as cnc_login, group_concat(res_users.id , '|') as cnc_usr_id from res_users_res_partner_rel left join res_partner on res_users_res_partner_rel.partner_id = res_partner.id left join res_users on res_users_res_partner_rel.res_users_id = res_users.id group by res_partner.id" ;
export const posm_partner_concatened : string = "create view posm_partner_concatened as select res_partner.id, res_partner.name, group_concat(i_t_permanent_posm.name , '|') as cnc_posm, group_concat(i_t_permanent_posm.id , '|') as cnc_posm_id from i_t_permanent_posm_res_partner_rel left join res_partner on i_t_permanent_posm_res_partner_rel.partner_id = res_partner.id left join i_t_permanent_posm on i_t_permanent_posm_res_partner_rel.i_t_permanent_posm_id = i_t_permanent_posm.id group by res_partner.id"