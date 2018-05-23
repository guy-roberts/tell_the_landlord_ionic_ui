import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Datastore } from "../../services/datastore";
import { JsonApiQueryData } from "angular2-jsonapi";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  landlordForm: FormGroup;
  landlordData = { "landlordsName": '' };
  confirmedLandlordName = "";

  ngOnInit() {
    this.landlordForm = new FormGroup({
      landlordsName: new FormControl('', [Validators.required, Validators.pattern('[\-a-zA-Z0-9 ]*'), Validators.minLength(1)]),
    });
  }

  constructor(public navCtrl: NavController, public datastore: Datastore) {
  }

  submitLandlord() {
    this.datastore.setBaseUrl(this.landlordData.landlordsName).subscribe(
      (any_result: JsonApiQueryData<any>) => {
        this.confirmedLandlordName = this.landlordData.landlordsName;
        console.log('success connecting to ' + this.landlordData.landlordsName);
      },
      () => {
        this.confirmedLandlordName = '';
        console.log('caught that there is no connection to ' + this.landlordData.landlordsName);
      });
  }

}
