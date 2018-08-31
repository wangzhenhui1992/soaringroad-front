import { Component, OnInit, Input, Output } from '@angular/core';
import { markdown } from 'markdown';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Article } from '../../entity/article';
import { ArticleService } from '../../service/article.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import PagePath from '../../util/pagepath';
import { MarkdownService } from '../../service/common/markdown.service';
@Component({
  selector: 'app-editorpage',
  templateUrl: './editorpage.component.html',
  styleUrls: ['./editorpage.component.scss'],
  providers: [ArticleService]
})
export class EditorpageComponent implements OnInit {

  @Input()
  @Output()
  article: Article;
  safeBody: any;
  rows: number;
  label: string;

  constructor(private domSanitizer: DomSanitizer, private articleService: ArticleService,
  private activedRouter: ActivatedRoute, private router: Router, private markdownService: MarkdownService) { }

  convert() {
    if (!this.article || !this.article.content) {
      return;
    }
    const rows = this.article.content.search('\r');
    this.rows = rows > 20 ? rows : 20;
    this.safeBody = this.markdownService.render(this.article.content);
    // this.safeBody = this.domSanitizer.bypassSecurityTrustHtml(markdown.toHTML(this.article.content, 'Maruku'));
  }

  ngOnInit() {
    this.rows = 20;
    if ( !this.article) {
      this.article = new Article();
    }
    const id = this.activedRouter.snapshot.params['id'];
    this.article.id = id;
    if (id) {
      this.articleService.get(id).toPromise().then(article => {
        if (article) {
          this.article = article;
        }
      }).then(() => {
        this.convert();
      });
    }
    this.convert();
  }

  onChange() {
    this.convert();
  }

  onSubmit() {
    this.article.author = localStorage.getItem('login-user');
    this.setDate();
    const result = this.article.id ? this.articleService.updateArticle(this.article) : this.articleService.postArticle(this.article);

    result.subscribe(article => {
      if (article) {
        this.router.navigate([PagePath.ARTICLE_PAGE + '/' + article.id]);
      } else {
        this.router.navigate([PagePath.ERROR_PAGE]);
      }
    }, error => {
      console.log(error);
      if (error['status'] === 401 ) {
        this.router.navigate([PagePath.LOGIN_PAGE]);
      } else {
        this.router.navigate([PagePath.LOGIN_PAGE]);
      }

    });
  }

  private setDate() {
    if (this.article.date) {
      return;
    }
    const date: Date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    this.article.date = date.getFullYear() + '-' + (month < 10 ?  '0' + month : month ) + '-' + (day < 10 ?  '0' + day : day ) ;
  }

  onAddLabel() {
    if (!this.label) {
      return;
    }
    if (this.label.indexOf(',') > -1) {
      const labels = this.label.split(',');
      for (let i = 0, length = labels.length ; i < length; i++ ) {
        const label = labels[i];
        if (!label) {
          continue;
        }
        if (!this.article.labels) {
          this.article.labels = [label];
        } else if (this.article.labels.indexOf(this.label) < 0) {
          this.article.labels.push(label);
        }
      }
    } else if (!this.article.labels) {
      this.article.labels = [this.label];
    } else if (this.article.labels.indexOf(this.label) < 0) {
      this.article.labels.push(this.label);
    }
    this.label = '';
  }

  onClickLabel(value: string) {
    if (!value) {
      return;
    }
    if (this.article.labels.length === 1) {
      this.article.labels = [];
      return;
    }
    this.article.labels.splice(this.article.labels.indexOf(value), 1);
  }

}
