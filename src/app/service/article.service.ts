import { Injectable } from '@angular/core';
import { RequestService } from './common/request.service';
import { ApiService } from './common/api.service';
import Settings from '../util/settings';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArticleService {

  constructor(private requestService: RequestService) { }

  public getArticleById(article_id, parameter ?: {}): Observable<Object> {
    console.log(article_id);
    const url = Settings.host + Settings.apis.article_id + '\/' + article_id;
    return this.requestService.doRequestMain<Object>(url, parameter, 'get');
  }
}
