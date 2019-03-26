import { Injectable } from '@angular/core';
import { RequestService } from './common/request.service';
import { ApiService } from './common/api.service';
import Settings from '../util/settings';
import { Observable } from 'rxjs/Observable';
import { Article } from '../entity/article';

@Injectable()
export class ArticleService {

  constructor(private requestService: RequestService) { }

  public get(articleId, parameter?: {}): Observable<Article> {
    const url = Settings.host + Settings.apis.article + articleId;
    return this.requestService.doRequestMain<Article>(url, parameter, 'get');
  }

  public search(query: string): Observable<Article[]> {
    const url = Settings.host + Settings.apis.article + encodeURI('search?qStr=' + query);
    return this.requestService.doRequestMain<Article[]>(url, null, 'get');
  }

  public searchForPopRank(pageNumber: number = 0): Observable<Article[]> {
    const query = '{' + (pageNumber ? '"pageNumber":' + pageNumber + ',' : '')
      + '"queryNumber":3,' + '"querySort":[{"name":"view","sortOrder":"DESC"}]}';
    return this.search(query);
  }

  public searchForHomePage(pageNumber: number = 0): Observable<Article[]> {
    const query = '{' + (pageNumber ? '"pageNumber":' + pageNumber + ',' : '')
      + '"queryNumber":12,' + '"querySort":[{"name":"id","sortOrder":"DESC"}]}';
    return this.search(query);
  }

  public searchArticleByCategory(category: string, pageNumber: number = 0): Observable<Article[]> {
    const query = '{' + (pageNumber ? '"pageNumber":' + pageNumber + ',' : '')
      + '"queryNumber":20,"queryConditions":[{"name":"category","option":"EQ","value":"' + category + '"}],'
      + '"querySort":[{"name":"id","sortOrder":"DESC"}]}';
    return this.search(query);
  }

  public searchArticleByLabel(label: string, pageNumber: number = 0): Observable<Article[]> {
    const query = '{' + (pageNumber ? '"pageNumber":' + pageNumber + ',' : '')
      + '"queryNumber":20,"queryConditions":[{"name":"labels","option":"MEMBER","value":"' + label + '"}],'
      + '"querySort":[{"name":"id","sortOrder":"DESC"}]}';
    return this.search(query);
  }

  public count(): Observable<number> {
    const url = Settings.host + Settings.apis.article + 'count';
    return this.requestService.doRequestMain<number>(url, null, 'get');
  }

  public postArticle(article: Article): Observable<Article> {
    const url = Settings.host + Settings.apis.admin.article;
    return this.requestService.doRequestMain<Article>(url, article, 'post');
  }

  public updateArticle(article: Article): Observable<Article> {
    const url = Settings.host + Settings.apis.admin.article + article.id;
    return this.requestService.doRequestMain<Article>(url, article, 'put');
  }
}
