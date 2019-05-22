import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http' ;
import { Database_manager } from './model/DAO/database_manager.model';
import { Data } from './model/data/data.model';
import { Camera } from '@ionic-native/camera/ngx' ;
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,

  ],
  entryComponents: [

  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    IonicStorageModule.forRoot({ 
      name: 'imp_tob',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  providers: [
    Database_manager,
    StatusBar,
    SplashScreen,
    SQLite,
    Data,
    Camera,
    Geolocation ,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
