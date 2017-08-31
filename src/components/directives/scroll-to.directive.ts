import {Directive, EventEmitter, Output} from "@angular/core";

@Directive({
  selector: '[track-scroll]',
  host: {'(window:scroll)': 'track($event)'}
})

export class TrackScrollDirective {
  @Output() scrolled = new EventEmitter();

  track(event: Event) {
    this.scrolled.emit({
      value: event
    });
  }
}
