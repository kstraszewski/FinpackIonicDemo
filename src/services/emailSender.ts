import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";
import {Http} from "@angular/http";
import {JoinUsFormModel} from "../models/JoinUsFormModel";

@Injectable()
export class EmailSender{

  constructor(private http: Http){ }

  async sendEmail(sendTo:string, title: string,body:JoinUsFormModel){
    /*Ustawić odpwoiedni url do API*/
    return (await this.http
      .post('www.google.com',{sendto: sendTo, title: title, body: body})
      .toPromise())
  }

}
