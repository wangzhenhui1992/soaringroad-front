import { Injectable } from '@angular/core';
import { RequestService } from './common/request.service';
import { Observable } from '../../../node_modules/rxjs/Observable';
import Settings from '../util/settings';

@Injectable()
export class LoginService {

  constructor(private requestService: RequestService) { }

  public auth(username: string, password: string): Observable<string> {
    const url = Settings.host + Settings.apis.admin.login;
    return this.requestService.doRequestMain<string>(url, {username: username, password: password}, 'post');
  }
}
