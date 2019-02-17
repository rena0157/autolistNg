import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AutolistService } from '../autolist.service';
import { AutolistTextareaComponent } from '../autolist-textarea/autolist-textarea.component';
import { OutputCellComponent } from '../output-cell/output-cell.component';
import { ObjectTableComponent } from '../object-table/object-table.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, AutolistTextareaComponent, OutputCellComponent, ObjectTableComponent ],
      providers: [{provide: AutolistService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
