import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlepageComponent } from './articlepage.component';

describe('ArticlepageComponent', () => {
  let component: ArticlepageComponent;
  let fixture: ComponentFixture<ArticlepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
