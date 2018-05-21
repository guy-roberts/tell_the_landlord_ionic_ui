import { Component } from '@angular/core';

import { ReportPage } from '../report/report';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LoginPage;
  tab3Root = ProfilePage;
  tab4Root = ReportPage;

  constructor() {

  }
}
