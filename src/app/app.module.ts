import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ReportPage } from '../pages/report/report';
import { ProfilePage } from '../pages/profile/profile';
import { Landlord } from '../pages/landlord/landlord';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { JsonApiModule } from 'angular2-jsonapi';
import { TranslateModule } from '@ngx-translate/core';

import { AuthenticationService, UserService, ProfileService } from '../services/index';
import { Datastore } from "../services/datastore";
import { ChangeDetectorRef } from '@angular/core';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ReportPage,
    ProfilePage,
    Landlord
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    JsonApiModule,
    TranslateModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ReportPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationService,
    UserService,
    ProfileService,
    Datastore,
    Landlord
  ]
})
export class AppModule {}
