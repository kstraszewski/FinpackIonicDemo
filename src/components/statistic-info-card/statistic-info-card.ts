import {Component, Input, OnInit} from '@angular/core';
import {StatisticCard} from "../../models/StatisticCard";

/**
 * Generated class for the StatisticInfoCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'statistic-info-card',
  templateUrl: 'statistic-info-card.html'
})
export class StatisticInfoCardComponent implements OnInit {
  @Input() StatisticCardData: StatisticCard;
  private CountTo: number;

  constructor() {
  }

  ngOnInit(): void {
    this.CountTo = this.StatisticCardData.HeaderNumber;
  }

}
