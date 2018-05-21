import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportCategory } from '../../models/report_category';
import { HomePage } from '../home/home';
import { Report } from '../../models/report';
import { Storage } from '@ionic/storage';
import { ProfileService } from '../../services/profile.service';

import { Datastore } from "../../services/datastore";
import { JsonApiQueryData } from 'angular2-jsonapi';


@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {
  reportForm: FormGroup;
  reportCategories: ReportCategory[];
  reportData = { "category": '', 'description': '' };

  constructor(public navCtrl: NavController, public datastore: Datastore, private storage: Storage, public profileService: ProfileService) {
    this.getReportCategories();
  }

  ngOnInit() {
    this.reportForm = new FormGroup({
      category: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*'), Validators.minLength(5)]),
      description: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  getReportCategories(){
    this.datastore.findAll(ReportCategory, {
    }).subscribe(
      (report_categories: JsonApiQueryData<ReportCategory>) => {
        this.reportCategories = report_categories.getModels();
      }
    );
  }

  submitReport() {
    console.log('submitReport called ' + this.reportForm.get('category').value);

    // Fetch the profile
    let profile = this.profileService.getProfile();

    let report = this.datastore.createRecord(Report, {
      category: this.reportForm.get('category').value,
      description: this.reportForm.get('description').value,
      profile: profile
    })

    report.save().subscribe(result => {
        console.log('Saved a report');
        this.navCtrl.push(HomePage);
      },
      msg => {
        alert('Failure to save a report');
    });

  }

}
