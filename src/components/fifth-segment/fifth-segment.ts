import { Component } from '@angular/core';
import {ContentData} from "../../data/Content";

/**
 * Generated class for the FifthSegmentComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'fifth-segment',
  templateUrl: 'fifth-segment.html'
})
export class FifthSegmentComponent {

  private SegmentContent = ContentData.FifthSegment;

  constructor() {
  }

}
