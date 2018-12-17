import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageComponent } from '../page.component';
import { SafeHtml, DomSanitizer, Title, Meta } from '@angular/platform-browser';
import { ArticleService } from '../../service/article.service';
import PagePath from '../../util/pagepath';
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
    private markdownService: MarkdownService, private title: Title, private meta: Meta) {
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
      this.title.setTitle(this.article.title);
      this.safeBody = this.markdownService.render(this.article.content);
      this.meta.getTag('name="description"').setAttribute("content",this.article.summary);
      this.meta.addTag({ name: 'keywords', content: this.article.labels.join(",")+","+this.article.category});
      // this.safeBody = this.domSanitizer.bypassSecurityTrustHtml(markdown.toHTML(this.article.content));

    });
  }

}
