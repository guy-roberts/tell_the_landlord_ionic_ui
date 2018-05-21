import { Report } from '../models/report';
import { Profile } from '../models/profile';
import { ReportCategory } from '../models/report_category';


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';

const config: DatastoreConfig = {
  /* TODO: put baseUrl in an environment variable */
  baseUrl: 'http://some-housing-association.lvh.me:3000/',
  models: {
    report: Report,
    profile: Profile,
    report_category: ReportCategory
  }
}

const config2: DatastoreConfig = {
  /* TODO: put baseUrl in an environment variable */
  baseUrl: 'http://woppa-homes.lvh.me:3000/',
  models: {
    report: Report,
    profile: Profile,
    report_category: ReportCategory
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

  constructor(http: HttpClient) {
    console.log('Datastore constructor called');
    super(http);
  }

  recreate() {
    console.log('Would recreate the datastore');
  }

  // Attempt to override the URL
  buildURL() {
    console.log("buildURL called");
    return("http://bbc.co.uk");
  }
}
