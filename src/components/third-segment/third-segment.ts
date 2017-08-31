import {Component, OnInit} from '@angular/core';
import {ContentData} from "../../data/Content";
import {ModalController} from "ionic-angular";
import {JoinModalComponent} from "../join-modal/join-modal";
import {AnimationEventEmitter} from "../../services/animationEventEmitter";
import {EventKeys} from "../../data/EventKeys";
import {JoinUsModalTitleSufix} from "../../data/JoinUsModalTitleSufix";


/**
 * Generated class for the ThirdSegmentComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'third-segment',
  templateUrl: 'third-segment.html'
})
export class ThirdSegmentComponent implements OnInit {
  private SegmentContent = ContentData.ThirdSegment;
  private StartAnimationFlag: boolean = false;
  private JoinUsModalTitleSufix = JoinUsModalTitleSufix;

  constructor(private modalCtrl: ModalController, private animationEmitter: AnimationEventEmitter) {
  }

  ngOnInit(): void {
    this.animationEmitter.Observable.subscribe(eventData => {
      if (eventData.key == EventKeys.THIRD_SEGMENT_ANIMATION) {
        this.StartAnimationFlag = true;
        console.log(this.StartAnimationFlag)
      }
    })
  }

  openJoinModal(titleSufix: string) {
    let profileModal = this.modalCtrl.create(JoinModalComponent, {title: titleSufix});
    profileModal.present();
  }

}
