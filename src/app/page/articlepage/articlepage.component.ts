import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class ArticlepageComponent extends PageComponent implements OnInit, AfterViewInit {

  adsense: string = `
  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-2955216178814103"
       data-ad-slot="4960363662"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
  </script>;`
  article: Article;
  safeBody: SafeHtml;

  constructor(private router: Router, private activedRouter: ActivatedRoute, private articleService: ArticleService,
    private markdownService: MarkdownService, private title: Title, private meta: Meta) {
    super();
  }

  ngAfterViewInit() {
    let script = document.createElement('script');
    script.async = true;
    script.setAttribute('src', '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
    script.setAttribute('charset', 'utf-8');

    const ins = document.getElementById('adsenseblock-article');
    ins.parentNode.insertBefore(script, ins);

    script = document.createElement('script');
    script.async = true;
    script.innerHTML = `(adsbygoogle = window.adsbygoogle || []).push({});`;
    script.setAttribute('charset', 'utf-8');
    ins.parentNode.appendChild(script);
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
      const keywords = Array.from(new Set(this.article.labels.concat(this.article.keywords)));
      this.meta.getTag('name="description"').setAttribute("content",this.article.summary);
      this.meta.addTag({ name: 'keywords', content: keywords.join(",")+","+this.article.category});
      // this.safeBody = this.domSanitizer.bypassSecurityTrustHtml(markdown.toHTML(this.article.content));

    });
  }

}
