import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageComponent } from '../page.component';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { ArticleService } from '../../service/article.service';
import PagePath from '../../util/pagepath';
import { RequestService } from '../../service/common/request.service';
import { markdown } from 'markdown';
import { Article } from '../../entity/article';
import { MarkdownService } from '../../service/common/markdown.service';

@Component({
  selector: 'app-articlepage',
  templateUrl: './articlepage.component.html',
  styleUrls: ['./articlepage.component.scss'],
  providers: [ArticleService]
})
export class ArticlepageComponent extends PageComponent implements OnInit {

  article: Article;
  safeBody: SafeHtml;

  constructor(private router: Router, private activedRouter: ActivatedRoute, private articleService: ArticleService,
    private domSanitizer: DomSanitizer, private markdownService: MarkdownService) {
    super();
  }

  ngOnInit() {
    const articleId = this.activedRouter.snapshot.params['id'];
    if (!articleId) {
      this.router.navigate([PagePath.ERROR_PAGE]);
    }
    const info = this.articleService.get(articleId);
    if (!info) {
      this.router.navigate([PagePath.ERROR_PAGE]);
      return;
    }
    info.subscribe(body => {
      this.article = body;
      if (!this.article) {
        this.router.navigate([PagePath.ERROR_PAGE]);
        return;
      }
      this.safeBody = this.markdownService.render(this.article.content);
      // this.safeBody = this.domSanitizer.bypassSecurityTrustHtml(markdown.toHTML(this.article.content));

    });
  }

}
