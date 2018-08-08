import { Component, OnInit } from '@angular/core';
import { Article } from '../../entity/article';
import { ArticleService } from '../../service/article.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-resultpage',
  templateUrl: './resultpage.component.html',
  styleUrls: ['./resultpage.component.scss'],
  providers: [ ArticleService ]
})
export class ResultpageComponent implements OnInit {
  articles: Article[] = [];
  constructor(private articleService: ArticleService, private activedRouter: ActivatedRoute) { }

  ngOnInit() {
    const paramClass = this.activedRouter.snapshot.params['class'];
    const paramKey = this.activedRouter.snapshot.params['key'];
    this.articleService.searchArticleByCategory(paramKey).toPromise().then(data => {
      this.articles = data;
    });
  }

}
