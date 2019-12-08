import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';


import { UsersPage } from '../pages/users/users';
import { UserDetailsPage } from '../pages/users/user-details/user-details';

import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';

import { EventsPage } from '../pages/events/events';
import { EventDetailsPage } from '../pages/events/event-details/event-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GithubUsersProvider } from '../providers/github-users/github-users';
import { GithubOrgsProvider } from '../providers/github-orgs/github-orgs';
import { GithubEventsProvider } from '../providers/github-events/github-events';
import { AuthService } from '../providers/auth-service/auth-service';
import { GroupdetailsPage } from '../pages/groupdetails/groupdetails';
import { CenterdetailsPage } from '../pages/centerdetails/centerdetails';
import { GroupReposProvider } from '../providers/group-repos/group-repos';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    UsersPage, UserDetailsPage,
    ReposPage,
    OrganisationsPage,
    EventsPage, EventDetailsPage,
    LoginPage,GroupdetailsPage,
    CenterdetailsPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    UsersPage, UserDetailsPage,
    ReposPage,
    OrganisationsPage,
    EventsPage, EventDetailsPage,
    LoginPage,
    GroupdetailsPage,
    CenterdetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsersProvider,
    GroupReposProvider,
    GithubOrgsProvider,
    GithubEventsProvider,
    AuthService
	
  ]
})
export class AppModule {}
