import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Article } from '../../entity/article';
import { ArticleService } from '../../service/article.service';
import { ActivatedRoute, Router, NavigationEnd } from '../../../../node_modules/@angular/router';
import PagePath from '../../util/pagepath';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.scss'],
  providers: [ ArticleService ]
})
export class ResultpageComponent implements OnInit, AfterViewInit {
  articles: Article[];
  pageNumber: number;
  constructor(private articleService: ArticleService, private activedRouter: ActivatedRoute, private router: Router) { 
    this.pageNumber = -1;
  }

  ngOnInit() {
    this.articles = [];
    this.nextPage();
  }

  ngAfterViewInit() {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      this.articles = [];
      this.pageNumber = -1;
      this.nextPage();
    });
  }

  nextPage() {
    this.pageNumber += 1;
    const paramClass = this.activedRouter.snapshot.params['class'];
    const paramKey = this.activedRouter.snapshot.params['key'];
    switch (paramClass) {
      case 'category': this.articleService.searchArticleByCategory(paramKey, this.pageNumber).toPromise().then(data => {
                         if (!data) {
                           return;
                         }
                         this.articles = this.articles.concat(data);
                       });
                       break;
      case 'label': this.articleService.searchArticleByLabel(paramKey, this.pageNumber).toPromise().then(data => {
                         if (!data) {
                           return;
                         }
                         this.articles = this.articles.concat(data);
                       });
                       break;
      default : this.router.navigateByUrl(PagePath.ERROR_PAGE);
    }
  }

}
