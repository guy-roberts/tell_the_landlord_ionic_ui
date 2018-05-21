import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReportCategory} from "../../models/report_category";
import {Datastore} from "../../services/datastore";
import {Storage} from "@ionic/storage";
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  landlordForm: FormGroup;
  landlordData = { "landlordsName": '' };

  ngOnInit() {
    this.landlordForm = new FormGroup({
      landlordsName: new FormControl('', [Validators.required, Validators.pattern('[\-a-zA-Z0-9 ]*'), Validators.minLength(1)]),
    });
  }

  constructor(public navCtrl: NavController, public datastore: Datastore) {
  }

  submitLandlord() {
    console.log('Submit called' + this.landlordData);

    // Change the datastore !
    this.datastore.recreate();
  }

}
