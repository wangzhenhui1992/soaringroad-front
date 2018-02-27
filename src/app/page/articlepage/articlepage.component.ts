import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageComponent } from '../page.component';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { ArticleService } from '../../service/article.service';
import PagePath from '../../util/pagepath';
import { RequestService } from '../../service/common/request.service';
import { markdown } from 'markdown';

@Component({
  selector: 'app-articlepage',
  templateUrl: './articlepage.component.html',
  styleUrls: ['./articlepage.component.scss'],
  providers: [ArticleService, RequestService]
})
export class ArticlepageComponent extends PageComponent implements OnInit {

  title: string;
  author: string;
  time: string;
  category: string;
  content: string;
  tags: string[];
  safeBody: SafeHtml;

  constructor(private router: Router, private activedRouter: ActivatedRoute, private articleService: ArticleService,
    private domSanitizer: DomSanitizer) {
    super();
  }

  ngOnInit() {
    const articleId = this.activedRouter.snapshot.params['id'];
    if (!articleId) {
      this.router.navigate([PagePath.ERRO_PAGE]);
    }
    const info = this.articleService.getArticleById(articleId);
    if (!info) {
      this.router.navigate([PagePath.ERRO_PAGE]);
      return;
    }
    info.subscribe(body => {
      this.author = body['author'];
      this.title = body['title'];
      this.time = body['time'];
      this.category = body['category'];
      this.tags = body['tags'];
      this.safeBody = this.domSanitizer.bypassSecurityTrustHtml(markdown.toHTML(body['content']));
    });
  }

}
