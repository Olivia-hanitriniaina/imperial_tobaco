import { Component } from '@angular/core';

import { Platform, LoadingController } from '@ionic/angular';
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
    private loader : LoadingController
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    const loading = await this.loader.create({
      spinner: null,
      duration: 6000,
      message: 'Veillez patienter...',
      translucent: true,
    }) ;
    loading.present() ; 
    if (this.platform.is('android')) {
      this.statusBar.backgroundColorByHexString("#33000000");
    }
    this.dbm.init_all_table().then(() => {
      this.platform.ready().then( async () => {
        this.statusBar.styleDefault();
        this.statusBar.overlaysWebView(false);
        this.splashScreen.hide();
        loading.dismiss() ;
     });
    }) ;
     
  }

  async make_load() {
    
  }
}
