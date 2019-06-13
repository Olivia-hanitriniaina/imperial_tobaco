import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Database_manager } from './model/DAO/database_manager.model';
import { base_data } from './model/data/base_data.model';
import { initDomAdapter } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dbm : Database_manager,
  ) {
    this.initializeApp();
  }

   initializeApp() {
     this.platform.ready().then( () => {
       this.statusBar.styleDefault();
       this.splashScreen.hide();
       this.dbm.init_all_table();
    });
  }
}
