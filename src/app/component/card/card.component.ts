import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @HostBinding('style.width') width = '100%';
  @Input()
  img: string;
  @Input()
  text: string;
  @Input()
  title: string;
  @Input()
  id: string;
  constructor() { }

  ngOnInit() {
  }

}
