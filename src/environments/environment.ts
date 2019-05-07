export const environment = {production: false ,};
export const request_res_partner : string = "create table if not exists res_partner (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT , name varchar(255), company_id INTEGER, comment text, website varchar(255),create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP , color INTEGER, active tinyint(4)	, street varchar(255), supplier tinyint(4)	, city varchar(255), display_name varchar(255), zip varchar(255),title INTEGER, country_id INTEGER, commercial_company_name varchar(255), parent_id INTEGER, company_name varchar(255), employee tinyint(4)	, ref varchar(255), email varchar(255), is_company tinyint(4)	, function varchar(255), lang varchar(255), fax varchar(255), street2 varchar(255), barcode varchar(255), phone varchar(255), write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP , daty date, tz varchar(255), write_uid INTEGER, customer tinyint(4), create_uid INTEGER, credit_limit double, user_id INTEGER, mobile varchar(255), type varchar(255), partner_share tinyint(4), vat varchar(255), state_id INTEGER, commercial_partner_id INTEGER, date_localization date, partner_latitude numeric,partner_longitude numeric, notify_email varchar(255) , message_last_post TIMESTAMP DEFAULT CURRENT_TIMESTAMP , opt_out tinyint(4)	, message_bounce INTEGER,signup_type varchar(255), signup_expiration TIMESTAMP DEFAULT CURRENT_TIMESTAMP , signup_token varchar(255), team_id INTEGER, calendar_last_notif_ack TIMESTAMP DEFAULT CURRENT_TIMESTAMP , type_quartier_id INTEGER, source_approvisionnement_id INTEGER, cible_installation_presentoirs_id INTEGER, numero_telephone2 varchar(255), numero_telephone3 varchar(255),numero_telephone1 varchar(255),couverture_commerciale_id INTEGER, classification2_id INTEGER, nom_gerant varchar(255), frequence_approvisionnement_id INTEGER, enseigne_appartenance_id INTEGER,agence_id INTEGER, activite_pos_id INTEGER, fournisseur_principal_id INTEGER, contrat_id INTEGER, fournisseur_secondaire_id INTEGER,  nom_agent_commercial_id INTEGER, cible_activation_id INTEGER, state varchar(255), statut_client_id INTEGER, permanent_POSM5_id INTEGER, point_de_vente tinyint(4)	, repere varchar(255), emplacement_id INTEGER, cooperation_itg_id INTEGER,  proximite_id INTEGER, frequence_visite_id INTEGER, permanent_POSM3_id INTEGER, permanent_POSM1_id INTEGER, adresse varchar(255), preference_animateur_id INTEGER, provider_latitude numeric, zone_id INTEGER, latitude double , commentaire text, longitude double, message_warning text, permanent_POSM4_id INTEGER, region_id INTEGER, nom_pos varchar(255),   quartier varchar(255),  ville_id INTEGER, type_client_id INTEGER, utilisateur_associe_id INTEGER, permanent_POSM2_id INTEGER,   secteur_id INTEGER, provider_longitude numeric,     code_client varchar(255), activation_autorisee_id INTEGER, is_today tinyint(4)	,         classification1_id INTEGER,     a_visiter_moved0 varchar(255),  visite varchar(255),    a_visite tinyint(4)	, a_visiter tinyint(4) )" ;
export const request_res_users : string = "create table if not exists res_users (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, active TINYINT(4), login varchar(255), password varchar(255), company_id INTEGER, partner_id INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, share tinyint(4), write_uid INTEGER, create_uid INTEGER, action_id INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, signature TEXT, password_crypt varchar(255), alias_id INTEGER, sale_team_id INTEGER, target_sales_done INTEGER, target_sales_won INTEGER)" ;
export const request_i_t_activation_autorisee : string = "create table if not exists i_t_activation_autorisee (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_activite_pos : string = "create table if not exists i_t_activite_pos (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), canal_id INTEGER, write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_agence : string = "create table if not exists i_t_agence (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, code varchar(255), create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, region_id INTEGER)" ;
export const request_i_t_cible_activation : string = "create table if not exists i_t_cible_activation (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)";
export const request_i_t_cible_installation_presentoirs : string = "create table if not exists i_t_cible_installation_presentoirs (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_classification1 : string = "create table if not exists i_t_classification1 (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_classification2 : string = "create table if not exists i_t_classification2 (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_contrat : string = "create table if not exists i_t_contrat (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, name varchar(255), write_uid INTEGER, date_debut_contrat TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, date_fin_contrat TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_cooperation_itg : string = "create table if not exists i_t_cooperation_itg (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_couverture_commerciale : string = "create table if not exists i_t_couverture_commerciale (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_emplacement : string = "create table if not exists i_t_emplacement (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_enseigne_appartenance : string = "create table if not exists i_t_enseigne_appartenance (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_client_grossiste : string = "create table if not exists i_t_client_grossiste (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_frequence_approvisionnement : string = "create table if not exists i_t_frequence_approvisionnement (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_frequence_visite : string = "create table if not exists i_t_frequence_visite (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_fournisseur_principale : string = "create table if not exists i_t_fournisseur_principale (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_fournisseur_secondaire : string = "create table if not exists i_t_fournisseur_secondaire (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_permanent_posm : string = "create table if not exists i_t_permanent_posm (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_preference_animateur : string = "create table if not exists i_t_preference_animateur (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_proximite : string = "create table if not exists i_t_proximite (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_region : string = "create table if not exists i_t_region (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, code varchar(255), create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_secteur : string = "create table if not exists i_t_secteur (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, code varchar(255), create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, zone_id INTEGER)" ;
export const request_i_t_source_approvisionnement : string = "create table if not exists i_t_source_approvisionnement (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_statut_client : string = "create table if not exists i_t_statut_client (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_type_client : string = "create table if not exists i_t_type_client (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, code varchar(255) )" ;
export const request_i_t_type_quartier : string = "create table if not exists i_t_type_quartier (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_ville : string = "create table if not exists i_t_ville (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL)" ;
export const request_i_t_zone : string = "create table if not exists i_t_zone (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, create_uid INTEGER, create_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, name varchar(255), write_uid INTEGER, write_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, agence_id INTEGER)" ;