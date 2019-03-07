import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../page.component';
import { HostBinding } from '@angular/core';
import { Article } from '../../entity/article';
import { ArticleService } from '../../service/article.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { ViewService } from '../../service/view.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers:
    [ ArticleService,
       { provide: CarouselConfig, useValue: { interval: 2000, noPause: false, showIndicators: true } },
      ViewService
    ]
})
export class HomepageComponent extends PageComponent implements OnInit {

  @HostBinding('style.margin') margin = '0 !important';
  @HostBinding('style.padding') padding = '0 !important';

  articles: Article[] = [];
  view = 0;
  pageNumber: number;
  constructor(private articleService: ArticleService, private viewService: ViewService) {
    super();
    this.pageNumber = -1;
  }

  ngOnInit() {
    this.loadView();
    this.nextPage();
  }

  loadView() {
    this.viewService.viewcount().subscribe(data => {
      if (!data) {
        return;
      }
      this.view = data;
    });
  }

  nextPage() {
    this.pageNumber += 1;
    this.articleService.searchForHomePage(this.pageNumber).subscribe(body => {
      if (!body) {
        return;
      }
      this.articles = this.articles.concat(body);
    } );
  }

}
