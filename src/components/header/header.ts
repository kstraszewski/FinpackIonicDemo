import {Component} from '@angular/core';
import {ModalController} from "ionic-angular";
import {JoinModalComponent} from "../join-modal/join-modal";
import {JoinUsModalTitleSufix} from "../../data/JoinUsModalTitleSufix";

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  constructor(private modalCtrl: ModalController) {
  }

  openJoinModal() {
    let profileModal = this.modalCtrl.create(JoinModalComponent, {title: JoinUsModalTitleSufix.GENERAL});
    profileModal.present();
  }

}
