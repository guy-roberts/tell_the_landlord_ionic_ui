import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany } from 'angular2-jsonapi';
import { Report } from './report';

@JsonApiModelConfig({
  type: 'profiles'
})
export class Profile extends JsonApiModel {

  @Attribute()
  firstname: string;

  @Attribute()
  lastname: string;

  @Attribute()
  address1: string;

  @Attribute()
  address2: string;

  @Attribute()
  address3: string;

  @Attribute()
  postcode: string;

  @Attribute()
  email: string;

  @Attribute()
  mobile_phone: string;

  @Attribute()
  home_phone: string;

  @Attribute()
  latitude: number;

  @Attribute()
  longitude: number;

  @Attribute()
  name_of_profile: number;

  @Attribute()
  created_at: string;

  @HasMany()
  reports: Report[];
}
