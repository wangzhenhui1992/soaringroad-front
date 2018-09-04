import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyselfpageComponent } from './myselfpage.component';

describe('MyselfpageComponent', () => {
  let component: MyselfpageComponent;
  let fixture: ComponentFixture<MyselfpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyselfpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyselfpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
