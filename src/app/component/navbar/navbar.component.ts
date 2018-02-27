import { Component, OnInit } from '@angular/core';
import Settings from '../../util/settings';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed: boolean;
  brand: string;
  searchBoxHtml: SafeHtml;
  navbarItems: { type: number, name: string, url: string,
    dropdownItems?: { name: string, url: string}[] }[];

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.isCollapsed = true;
    this.brand = 'SR';
    this.navbarItems = Settings.NAVBAR_ITEMS;
    this.searchBoxHtml = this.domSanitizer.bypassSecurityTrustHtml(
      '<gcse:search></gcse:search>');
  }

}
