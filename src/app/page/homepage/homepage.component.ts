import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../page.component';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent extends PageComponent implements OnInit {

  @HostBinding('style.margin') margin = '0 !important';
  @HostBinding('style.padding') padding = '0 !important';

  articles: {title: string, text: string, img: string, id: string}[] = [];
  constructor() {
    super();
   }

  ngOnInit() {
    this.articles.push(
      {title: 'AWS', text: 'AWS Text', img: 'http://www.soaringroad.com/wp-content/uploads/2017/11/architect.jpg', id: '1' });
      this.articles.push(
        {title: 'AWS', text: 'AWS Text', img: 'http://www.soaringroad.com/wp-content/uploads/2017/11/architect.jpg', id: '1' });
        this.articles.push(
          {title: 'AWS', text: 'AWS Text', img: 'http://www.soaringroad.com/wp-content/uploads/2017/11/architect.jpg', id: '1' });
          this.articles.push(
            {title: 'AWS', text: 'AWS Text', img: 'http://www.soaringroad.com/wp-content/uploads/2017/11/architect.jpg', id: '1' });
            this.articles.push(
              {title: 'AWS', text: 'AWS Text', img: 'http://www.soaringroad.com/wp-content/uploads/2017/11/architect.jpg', id: '1' });
              this.articles.push(
                {title: 'AWS', text: 'AWS Text', img: 'http://www.soaringroad.com/wp-content/uploads/2017/11/architect.jpg', id: '1' });
  }

}
