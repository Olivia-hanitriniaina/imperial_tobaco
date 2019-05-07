CREATE TABLE public.res_partner
(
  id int(11) NOT NULL ,
  name varchar(255),
  company_id int(11),
  comment text, -- Notes
  website varchar(255), -- Website
  create_date timestamp, -- Created on
  color int(11), -- Color Index
  active tinyint(4)	, -- Active
  street varchar(255), -- Street
  supplier tinyint(4)	, -- Is a Vendor
  city varchar(255), -- City
  display_name varchar(255), -- Display Name
  zip varchar(255), -- Zip
  title int(11), -- Title
  country_id int(11), -- Country
  commercial_company_name varchar(255), -- Company Name Entity
  parent_id int(11), -- Related Company
  company_name varchar(255), -- Company Name
  employee tinyint(4)	, -- Employee
  ref varchar(255), -- Internal Reference
  email varchar(255), -- Email
  is_company tinyint(4)	, -- Is a Company
  function varchar(255), -- Job Position
  lang varchar(255), -- Language
  fax varchar(255), -- Fax
  street2 varchar(255), -- Street2
  barcode varchar(255), -- Barcode
  phone varchar(255), -- Phone
  write_date timestamp, -- Last Updated on
  date date, -- Date
  tz varchar(255), -- Timezone
  write_uid int(11), -- Last Updated by
  customer tinyint(4)	, -- Is a Customer
  create_uid int(11), -- Created by
  credit_limit double, -- Credit Limit
  user_id int(11), -- Salesperson
  mobile varchar(255), -- Mobile
  `type` varchar(255), -- Address Type
  partner_share tinyint(4)	, -- Share Partner
  vat varchar(255), -- TIN
  state_id int(11), -- State
  commercial_partner_id int(11), -- Commercial Entity
  date_localization date, -- Geolocation Date
  partner_latitude numeric, -- Geo Latitude
  partner_longitude numeric, -- Geo Longitude
  notify_email varchar(255) NOT NULL, -- Email Messages and Notifications
  message_last_post timestamp, -- Last Message Date
  opt_out tinyint(4)	, -- Opt-Out
  message_bounce int(11), -- Bounce
  signup_type varchar(255), -- Signup Token Type
  signup_expiration timestamp, -- Signup expiration
  signup_token varchar(255), -- Signup token
  team_id int(11), -- Sales Team
  calendar_last_notif_ack timestamp, -- Last notification marked as read from base Calendar
  type_quartier_id int(11), -- Type Quartier
  source_approvisionnement_id int(11), -- Source d'approvisionnement
  cible_installation_presentoirs_id int(11), -- Cible installation pr�sentoirs
  numero_telephone2 varchar(255), -- N� de t�l�phone 2
  numero_telephone3 varchar(255), -- N� de t�l�phone 3
  numero_telephone1 varchar(255), -- N� de t�l�phone 1
  couverture_commerciale_id int(11), -- Couverture Commerciale
  classification2_id int(11), -- Classification 2
  nom_gerant varchar(255), -- Nom du G�rant
  frequence_approvisionnement_id int(11), -- Fr�quence d'approvisionnement
  enseigne_appartenance_id int(11), -- Enseigne d'appartenance
  agence_id int(11), -- Agence
  activite_pos_id int(11), -- Activit� POS
  fournisseur_principal_id int(11), -- Fournisseur principal
  contrat_id int(11), -- Contrat
  fournisseur_secondaire_id int(11), -- Fournisseur secondaire
  nom_agent_commercial_id int(11), -- Nom Agent Commercial
  cible_activation_id int(11), -- Cible Activation
  state varchar(255), -- Etat
  statut_client_id int(11), -- Statut Client
  `permanent_POSM5_id` int(11), -- Permanent POSM 5
  point_de_vente tinyint(4)	, -- Est un point de vente
  repere varchar(255), -- Rep�re
  emplacement_id int(11), -- Emplacement
  cooperation_itg_id int(11), -- Coop�ration ITG
  proximite_id int(11), -- Proximit�
  frequence_visite_id int(11), -- Fr�quence de visite
  `permanent_POSM3_id` int(11), -- Permanent POSM 3
  `permanent_POSM1_id` int(11), -- Permanent POSM 1
  adresse varchar(255), -- Adresse
  preference_animateur_id int(11), -- Pr�f�rence animateur
  provider_latitude numeric, -- Coordonn�es GPS Latitude
  zone_id int(11), -- Zone
  latitude double , -- Coordonn�es GPS Latitude
  commentaire text, -- Commentaires
  longitude double, -- Coordonn�es GPS Longitude
  message_warning text, -- Message warning
  `permanent_POSM4_id` int(11), -- Permanent POSM 4
  region_id int(11), -- R�gion
  nom_pos varchar(255), -- Nom du POS
  quartier varchar(255), -- Quartier
  ville_id int(11), -- Ville
  type_client_id int(11), -- Type Client
  utilisateur_associe_id int(11), -- Utilisateur associ�
  `permanent_POSM2_id` int(11), -- Permanent POSM 2
  secteur_id int(11), -- Secteur
  provider_longitude numeric, -- Coordonn�es GPS Longitude
  code_client varchar(255), -- Code Client
  activation_autorisee_id int(11), -- Activation autoris�e
  is_today tinyint(4)	, -- Is today
  classification1_id int(11), -- Classification 1
  a_visiter_moved0 varchar(255), -- A visiter
  visite varchar(255), -- Visit�
  a_visite tinyint(4)	, -- A visiter
  a_visiter tinyint(4)	 -- A visiter
      
);