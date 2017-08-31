import {Component, OnInit} from '@angular/core';
import {ContentData} from "../../data/Content";
import {NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the JoinModalComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'join-modal',
  templateUrl: 'join-modal.html'
})
export class JoinModalComponent implements OnInit {
  private TitleSufix: string;
  private ModalContent = ContentData.Modals.JoinUs;

  constructor(public viewCtrl: ViewController,
              private params: NavParams) {
  }

  ngOnInit(): void {
    this.TitleSufix = this.params.get('title')
  }



  close() {
    this.viewCtrl.dismiss();
  }

}
