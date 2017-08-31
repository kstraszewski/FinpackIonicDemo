import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";

@Injectable()
export class AnimationEventEmitter{
  private Subject = new Subject<{key: string}>()

  get Observable(){
    return this.Subject.asObservable();
  }

  public emit(key: string){
    this.Subject.next({key:key});
  }

}
