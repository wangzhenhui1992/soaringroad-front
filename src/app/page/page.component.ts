import { HostBinding } from '@angular/core';

export class PageComponent {
  @HostBinding('style.width')  width = '100%';
}
