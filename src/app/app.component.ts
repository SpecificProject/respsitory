import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations'
import { EventsPage } from '../pages/events/events';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any,index :number,icon : string}>;

  tabs: Array<{title: string, tabComponent: any,index :number,icon : string}>;


  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage ,index :0,icon:'home'},
      { title: 'Clients', component: UsersPage,index:1,icon:'person' },
      { title: 'Groups', component: ReposPage,index:2 ,icon:'people'},
      { title: 'Centers', component: OrganisationsPage,index:3,icon:'home' }, 
      { title: 'Collection Sheet', component: EventsPage,index:4,icon:'home' }, 
      { title: 'Contact', component: ContactPage,index:5,icon:'home' }, 
    ];
  

    this.tabs = [
      { title: 'Home', tabComponent: HomePage ,index :0,icon:'home'},
      { title: 'Clients', tabComponent: UsersPage,index:1,icon:'person' },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
