import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { StatisticInfoCardComponent } from './statistic-info-card/statistic-info-card';
import {IonicModule} from "ionic-angular";
import {BrowserModule} from "@angular/platform-browser";
import {FirstSegmentComponent} from "./first-segment/first-segment";
import {SecondSegmentComponent} from "./second-segment/second-segment";
import { ThirdSegmentComponent } from './third-segment/third-segment';
import { FourthSegmentComponent } from './fourth-segment/fourth-segment';
import { FifthSegmentComponent } from './fifth-segment/fifth-segment';
import { PersonCardComponent } from './person-card/person-card';
import {CountoDirective} from "./directives/counto.directive";
import { JoinModalComponent } from './join-modal/join-modal';
import {SwiperModule} from "angular2-useful-swiper";
import {TrackScrollDirective} from "./directives/scroll-to.directive";
import {AnimationEventEmitter} from "../services/animationEventEmitter";
import { SlideComponent } from './slide/slide';

@NgModule({
	declarations: [
	  HeaderComponent,
    StatisticInfoCardComponent,
    FirstSegmentComponent,
    SecondSegmentComponent,
    ThirdSegmentComponent,
    FourthSegmentComponent,
    FifthSegmentComponent,
    PersonCardComponent,
    CountoDirective,
    JoinModalComponent,
    TrackScrollDirective,
    SlideComponent
  ],
	imports: [
    BrowserModule,
    IonicModule,
    SwiperModule

  ],
  providers:[
    AnimationEventEmitter,
  ],
	exports: [
	  HeaderComponent,
    FirstSegmentComponent,
    SecondSegmentComponent,
    StatisticInfoCardComponent,
    ThirdSegmentComponent,
    FourthSegmentComponent,
    FifthSegmentComponent,
    PersonCardComponent,
    JoinModalComponent,
    SlideComponent
  ],
  entryComponents:[
    JoinModalComponent
  ]


})
export class ComponentsModule {}
