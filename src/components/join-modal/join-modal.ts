import {Component, OnInit} from '@angular/core';
import {ContentData} from "../../data/Content";
import {NavParams, ViewController} from 'ionic-angular';
import {JoinUsFormModel} from "../../models/JoinUsFormModel";
import {EmailSender} from "../../services/emailSender";
import {SendToEmailAddress} from "../../data/EmailConfig";

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
  private ModalContent = ContentData.Modals.JoinUs;
  private FormModel: JoinUsFormModel = new JoinUsFormModel();

  private TitleSufix: string;
  private SendTo: string = SendToEmailAddress;

  constructor(private viewCtrl: ViewController,
              private params: NavParams,
              private emailSender: EmailSender) {
  }

  ngOnInit(): void {
    this.TitleSufix = this.params.get('title')
  }

  async sendEmail() {
    console.log('form', this.FormModel)
    /*W tym momencie gdy url jest ustwiony na google.com zawsze bedzie try/catch bedzie łapał error*/
    try {
      let response = await this.emailSender.sendEmail(this.SendTo, `${this.ModalContent.Title}${this.TitleSufix}`, this.FormModel)
    } catch (e) {
      console.log(e);
    }
    this.close()
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
