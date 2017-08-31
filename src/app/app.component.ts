import {Component, ElementRef, ViewChild} from '@angular/core';
import {Content, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AnimationEventEmitter} from "../services/animationEventEmitter";
import {EventKeys} from "../data/EventKeys";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Content) content: Content;
  @ViewChild('thirdElement', {read: ElementRef}) thirdElement: ElementRef;
  private animationInitializer: boolean = false;

  constructor(platform: Platform, private animationEmitter: AnimationEventEmitter, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngAfterViewInit() {
    console.log(this.thirdElement.nativeElement.offsetTop)
    this.content.ionScroll.subscribe((data) => {
      let distance = this.thirdElement.nativeElement.offsetTop - data['scrollTop']
      console.log(distance);

      if (distance < 500 && !this.animationInitializer) {
        console.log('start');
        this.animationInitializer = false;
        this.animationEmitter.emit(EventKeys.THIRD_SEGMENT_ANIMATION);
      }
    })
  }

}

