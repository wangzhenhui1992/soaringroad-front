import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Article } from '../../entity/article';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @HostBinding('style.width') width = '100%';
  @Input()
   article: Article;
   @Input()
   badge = '';

  constructor() { }

  ngOnInit() {
  }

}
