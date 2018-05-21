import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthenticationService } from '../../services/index';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  model: any = {};
  loading = false;
  error = '';

  account: { email: string, password: string, subdomain: string } = {
    email: 'john@home.com',
    password: 'domrob66',
    subdomain: 'some-housing-association'
  };

  constructor(public navCtrl: NavController,
              private authenticationService: AuthenticationService) {
    this.model.username = 'john@home.com';
    this.model.password = 'domrob66';
  }

  doLogin() {
    console.log('Would login');

    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
          if (result.auth_token) {
            alert('Login worked');

            this.loading = false;
          } else {
            alert('Login failed');

            this.loading = false;
          }
        },
        msg => {
          this.loading = false;
          this.error = 'Username or password or subdomain do not match';
        });
  }
}
