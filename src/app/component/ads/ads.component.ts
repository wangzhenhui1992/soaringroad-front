import { Component, OnInit, HostBinding } from '@angular/core';
import { Ads } from '../../entity/ads';
import Settings from '../../util/settings';
import { AdsService } from '../../service/ads.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
  providers: [AdsService]
})
export class AdsComponent implements OnInit {

  @HostBinding('style.width') width = '100%';

  adsList: Ads[];

  constructor(private adsService: AdsService) { }

  ngOnInit() {
    this.adsService.searchForArticle().subscribe(body => {
      this.adsList = [body[0], body[1]];
      const length = body.length;
      let random = Math.floor(Math.random() * (length - 2)) + 2;
      this.adsList.push(body[random]);
      random = Math.floor(Math.random() * (length - 3)) + 2;
      this.adsList.push(body[random]);
    });

  }

}
