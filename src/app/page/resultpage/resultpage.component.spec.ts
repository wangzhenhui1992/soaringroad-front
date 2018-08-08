import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultpageComponent } from './resultpage.component';

describe('ResultpageComponent', () => {
  let component: ResultpageComponent;
  let fixture: ComponentFixture<ResultpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
