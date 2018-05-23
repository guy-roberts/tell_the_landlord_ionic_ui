import { Report } from '../models/report';
import { Profile } from '../models/profile';
import { ReportCategory } from '../models/report_category';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig, JsonApiQueryData} from 'angular2-jsonapi';
import { Observable } from 'rxjs/Observable';

const urlTemplate = 'http://SUBDOMAIN.lvh.me:3000/';

let config: DatastoreConfig = {
  /* TODO: put baseUrl in an environment variable */
  baseUrl: urlTemplate,
  models: {
    report: Report,
    profile: Profile,
    report_category: ReportCategory
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

  public connected: boolean;

  constructor(http: HttpClient) {
    super(http);
    this.connected = false;
  }

  setBaseUrl(subdomain: string): Observable<any> {
    let newUrl = urlTemplate.replace('SUBDOMAIN', subdomain);
    this.connected = false;
    this.datastoreConfig.baseUrl = newUrl;
    return this.confirmConnection();
  }

  confirmConnection() {
    console.log('confirmConnection called');
    return this.findAll(ReportCategory);
  }
}
