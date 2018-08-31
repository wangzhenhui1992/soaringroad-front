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
  constructor(private articleService: ArticleService, private activedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.articles = [];
    this.getContent();
  }

  ngAfterViewInit() {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      this.getContent();
    });
  }

  getContent() {
    const paramClass = this.activedRouter.snapshot.params['class'];
    const paramKey = this.activedRouter.snapshot.params['key'];
    switch (paramClass) {
      case 'category': this.articleService.searchArticleByCategory(paramKey).toPromise().then(data => {
                         this.articles = data;
                       });
                       break;
      case 'label': this.articleService.searchArticleByLabel(paramKey).toPromise().then(data => {
                         this.articles = data;
                       });
                       break;
      default : this.router.navigateByUrl(PagePath.ERROR_PAGE);
    }
  }

}
