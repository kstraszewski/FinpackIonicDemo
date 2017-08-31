import {Component, Input} from '@angular/core';
import {PersonData} from "../../models/PersonData";

/**
 * Generated class for the PersonCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'person-card',
  templateUrl: 'person-card.html'
})
export class PersonCardComponent {

  @Input() public PersonContent: PersonData;

  openLink(){
    window.location.href = 'http://www.morizon.pl/eksperci-kredytowi/krakow/michal-strzylak/'
  }

  constructor() {}

}
