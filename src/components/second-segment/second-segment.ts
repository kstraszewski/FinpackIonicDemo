import { Component } from '@angular/core';
import {ContentData} from "../../data/Content";

/**
 * Generated class for the SecondCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'second-segment',
  templateUrl: 'second-segment.html'
})
export class SecondSegmentComponent {

  SegmentContent = ContentData.SecondSegment;

  constructor() {
  }

}
