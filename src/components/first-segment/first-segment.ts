import {Component} from '@angular/core';
import {ContentData} from "../../data/Content";

/**
 * Generated class for the FirstCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'first-segment',
  templateUrl: 'first-segment.html'
})
export class FirstSegmentComponent {

  private SegmentContent = ContentData.FirstSegment;

  constructor() {
  }

}
