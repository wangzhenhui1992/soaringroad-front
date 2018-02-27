import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeHtml } from '@angular/platform-browser';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {

  searchBoxHtml: SafeHtml;

  constructor(private modalService: BsModalService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.searchBoxHtml = this.domSanitizer.bypassSecurityTrustHtml(
      '<gcse:search></gcse:search>');
  }

  closeModal() {
    this.modalService.hide(0);
  }

}
