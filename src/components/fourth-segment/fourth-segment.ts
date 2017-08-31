import {Component, OnInit} from '@angular/core';
import {ContentData} from "../../data/Content";
import {Platform} from "ionic-angular";

import * as $ from 'jquery';
import 'slick-carousel/slick/slick';

/**
 * Generated class for the FourthSegmentComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'fourth-segment',
  templateUrl: 'fourth-segment.html'
})
export class FourthSegmentComponent implements OnInit {
  private SegmentContent = ContentData.FourthSegment;

  private slickOptions = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots:true,
    prevArrow:'<img src="../../assets/arrows/arrow-left.png" style="height: 40px;align-self: center;padding-right: 20px">',
    nextArrow:'<img src="../../assets/arrows/arrow-right.png" style="height: 40px;align-self: center;padding-left: 20px">>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  }

  constructor(private platform: Platform) {

  }


  ngOnInit(): void {
    $('.center').slick(this.slickOptions);

  }

}
