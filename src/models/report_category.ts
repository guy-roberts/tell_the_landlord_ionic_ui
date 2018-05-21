import { JsonApiModelConfig, JsonApiModel, Attribute } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'report_categories'
})
export class ReportCategory extends JsonApiModel {

  @Attribute()
  description: string;

}
