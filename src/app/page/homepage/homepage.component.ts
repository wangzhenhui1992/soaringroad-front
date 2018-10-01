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
  pageNumber: number;
  constructor(private articleService: ArticleService) {
    super();
    this.pageNumber = -1;
  }

  ngOnInit() {
    this.nextPage();
  }
  nextPage() {  
    this.pageNumber+=1;
    this.articleService.searchForHomePage(this.pageNumber).subscribe(body => {
      if (!body) {
        return;
      }
      this.articles = this.articles.concat(body);
    } );
  }

}
