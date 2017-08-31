import {Component} from '@angular/core';
import {ContentData} from "../../data/Content";

/**
 * Generated class for the SlideComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'slide',
  templateUrl: 'slide.html'
})
export class SlideComponent {

  SlideContent = ContentData.Slide;

  constructor() {

  }

}
