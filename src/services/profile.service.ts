import { Injectable } from '@angular/core';
import { Datastore } from "./datastore";
import { Storage } from "@ionic/storage";
import { Profile } from '../models/profile';


/*
 * Keeps an instance of the profile, if one has been created yet, and
 * provides it to the report page
 */
@Injectable()
export class ProfileService {
  profile: Profile;

  constructor(
    public datastore: Datastore, private storage: Storage) {

    console.log('ProfileService is initialising');
  }

  // If there is a profile id local storage, then fetch it from the server
  ngOnInit() {
    let storedProfileId = this.storage.get('profileId');

    if (storedProfileId) {
      this.datastore.findRecord(Profile, <any>storedProfileId).subscribe(
        (recoveredProfile: Profile) => {
          this.profile = recoveredProfile;
        }
      );
    }

  }

  getProfile() {
    return(this.profile);
  }

  setProfile(profileHash: {}) {
    let newProfile = this.datastore.createRecord(Profile, profileHash);

    newProfile.save().subscribe(result => {
        console.log('ProfileService Saved a profile');
        this.profile = newProfile;
        this.storage.set('profileId', result.id);
      },
      msg => {
      // Set an error message in the UI
        alert('Failure to save a profile');
      });
  }
}
