import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../page.component';
import { HostBinding } from '@angular/core';
import { Article } from '../../entity/article';
import { ArticleService } from '../../service/article.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers:
    [ ArticleService,
       { provide: CarouselConfig, useValue: { interval: 2000, noPause: false, showIndicators: true } }
    ]
})
export class HomepageComponent extends PageComponent implements OnInit {

  @HostBinding('style.margin') margin = '0 !important';
  @HostBinding('style.padding') padding = '0 !important';

  articles: Article[] = [];
  constructor(private articleService: ArticleService) {
    super();
  }

  ngOnInit() {
    this.articleService.searchForHomePage().subscribe(body => {
      this.articles = body;
    } );
  }

}
