import { Injectable } from '@angular/core';
import Settings from '../util/settings';
import { RequestService } from './common/request.service';
import { Ads } from '../entity/ads';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AdsService {

  constructor(private requestService: RequestService) { }

  public search(query: string): Observable<Ads[]> {
    const url = Settings.host + Settings.apis.ads + encodeURI('search?qStr=' + query);
    return this.requestService.doRequestMain<Ads[]>(url, null, 'get');
  }

  searchForArticle(queryNumber: number = 0): Observable<Ads[]> {
    const query = '{"queryConditions":[{"name":"showFlg","option":"EQ","value":"0"}],'
      + '"querySort":[{"name":"adsNo","sortOrder":"ASC"}],"queryNumber":"'
      + (queryNumber && queryNumber > 0 && queryNumber < 21 ? queryNumber : 20) + '"}';
    return this.search(query);
  }



}
