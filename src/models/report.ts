import { JsonApiModelConfig, JsonApiModel, Attribute, BelongsTo } from 'angular2-jsonapi';
import { Profile } from './profile';

@JsonApiModelConfig({
  type: 'reports'
})
export class Report extends JsonApiModel {

  @Attribute()
  category: string;

  @Attribute()
  description: string;

  @Attribute()
  latitude: number;

  @Attribute()
  longitude: number;

  @Attribute()
  name_of_profile: number;

  @Attribute()
  created_at: string;

  @BelongsTo()
  profile: Profile;
}
