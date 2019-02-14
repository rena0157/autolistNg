import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutolistTextareaComponent } from './autolist-textarea.component';

describe('AutolistTextareaComponent', () => {
  let component: AutolistTextareaComponent;
  let fixture: ComponentFixture<AutolistTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutolistTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutolistTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
