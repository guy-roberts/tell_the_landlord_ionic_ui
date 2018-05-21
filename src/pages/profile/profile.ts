import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../../models/profile';
import { Datastore } from '../../services/datastore';
import { ReportPage } from '../report/report';
import { Storage } from '@ionic/storage';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  profileform: FormGroup;
  profileData = { 'first_name': '', 'last_name': '', 'address1': '', 'address2': '', 'address3': '', 'postcode': '',  'email': '', 'mobile_phone': '', 'home_phone': '', 'tenant_reference': '' };
  profileId: Profile;

  constructor(public navCtrl: NavController, public datastore: Datastore, private storage: Storage, private profile_service: ProfileService) {

  }

  ngOnInit() {

    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.profileform = new FormGroup({
      first_name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]),
      last_name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]),
      address1: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*'), Validators.minLength(5)]),
      address2: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*'), Validators.minLength(5)]),
      address3: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*'), Validators.minLength(5)]),
      postcode: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*'), Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
      mobile_phone: new FormControl('', [Validators.required, Validators.pattern('[0-9 ]*'), Validators.minLength(9)]),
      home_phone: new FormControl('', [Validators.pattern('[0-9 ]*'), Validators.minLength(9)]),
      tenant_reference: new FormControl('', [ Validators.pattern('[a-zA-Z0-9 ]*')]),
    });
  }

  submitProfile() {
    this.profile_service.setProfile({
      firstname: this.profileform.get('first_name').value,
      lastname: this.profileform.get('last_name').value,
      address1: this.profileform.get('address1').value,
      address2: this.profileform.get('address2').value,
      address3: this.profileform.get('address3').value,
      postcode: this.profileform.get('postcode').value,
      email: this.profileform.get('email').value,
      mobile_phone: this.profileform.get('mobile_phone').value,
      home_phone: this.profileform.get('home_phone').value,
      tenant_reference: this.profileform.get('tenant_reference').value,
    });

  }
}
