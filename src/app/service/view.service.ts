import { Injectable } from '@angular/core';
import { RequestService } from './common/request.service';
import { Article } from '../entity/article';
import { Observable } from 'rxjs/Observable';
import Setting from '../util/settings';

@Injectable()
export class ViewService {

  constructor(private requestService: RequestService) { }

  public viewcount(): Observable<number> {
    const url = Setting.host + Setting.apis.view.count;
    return this.requestService.doRequestMain<number>(url, null, 'get');
  }

}
