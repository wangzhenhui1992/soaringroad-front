import { Component, OnInit, HostBinding } from '@angular/core';
import { Ads } from '../../entity/ads';
import Settings from '../../util/settings';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  @HostBinding('style.width') width = '100%';

  adsList: Ads[];

  constructor() { }

  ngOnInit() {
    const remove = Math.floor(Math.random()*4)+1;
    this.adsList = Settings.ADS_LIST;
    this.adsList.splice(remove,1)
  }

}
