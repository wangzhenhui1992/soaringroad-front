import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorpageComponent } from './editorpage.component';

describe('EditorpageComponent', () => {
  let component: EditorpageComponent;
  let fixture: ComponentFixture<EditorpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
