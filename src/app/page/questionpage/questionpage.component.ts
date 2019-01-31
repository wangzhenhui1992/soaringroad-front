import { Component, OnInit } from '@angular/core';
import { Question } from '../../entity/question';
import { QuestionService } from '../../service/question.service';
import { Router } from '@angular/router';
import PagePath from '../../util/pagepath';

@Component({
  selector: 'app-questionpage',
  templateUrl: './questionpage.component.html',
  styleUrls: ['./questionpage.component.scss'],
  providers: [QuestionService]
})
export class QuestionpageComponent implements OnInit {

  question: Question;
  answer: string;
  showAnswer: boolean;

  constructor(private questionService: QuestionService, private router: Router ) { }

  ngOnInit() {
    this.next();
  }

  next(): void {
    if (!this.showAnswer && this.question != null) {
      return;
    }
    let id = Math.floor(Math.random()*857)+1;
    let observable = this.questionService.get(id);
    if (!observable) {
      this.router.navigate([PagePath.ERROR_PAGE]);
      return;
    }
    observable.subscribe(body => {
      if (!body) {
        this.router.navigate([PagePath.ERROR_PAGE]);
        return;
      }
      body.question = body.question?body.question.replace(new RegExp('\n', 'g'), "<br />"):"";
      body.explaination = body.explaination?body.explaination.replace(new RegExp('\n', 'g'), "<br />"):"";
      body.reference = body.reference?body.reference.replace(new RegExp('\n', 'g'), "<br />"):"";
      this.showAnswer = false;
      this.question = body;
      this.answer="";
    });
  }

  commit() {
    if (this.showAnswer) {
      return ;
    }
    this.showAnswer = true;
  }

  change(value: string) {
    this.answer = value;
  }

}
