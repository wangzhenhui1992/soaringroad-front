import { Injectable } from '@angular/core';
import { RequestService } from './common/request.service';
import { Observable } from 'rxjs/Observable';
import { Question } from '../entity/question';
import Settings from '../util/settings';

@Injectable()
export class QuestionService {

  constructor(private requestService: RequestService) {}

  public get(questionId: number, parameter?: {}): Observable<Question> {
    const url = Settings.host + Settings.apis.admin.question + questionId;
    return this.requestService.doRequestMain<Question>(url, parameter, 'get');
  }
}
