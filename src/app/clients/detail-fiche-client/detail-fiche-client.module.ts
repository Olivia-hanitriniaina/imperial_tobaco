import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailFicheClientPage } from './detail-fiche-client.page';
import { ChartModule } from 'primeng/chart';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { PasswordModule } from 'primeng/password';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TabViewModule } from 'primeng/tabview';
import { Camera } from '@ionic-native/camera/ngx' ;
import { Geolocation } from '@ionic-native/geolocation/ngx' ;

const routes: Routes = [
  {
    path: '',
    component: DetailFicheClientPage
  }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ChartModule,
    FullCalendarModule,
    ButtonModule,
    DropdownModule, 
    SidebarModule,
    InputTextModule,
    AccordionModule,
    PasswordModule,
    MessagesModule,
    MessageModule,
    BreadcrumbModule,
    TabViewModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailFicheClientPage] ,
  providers : [Camera, Geolocation]
})
export class DetailFicheClientPageModule {}
