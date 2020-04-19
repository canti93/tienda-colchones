import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListColchonComponent } from './list-colchon.component';

describe('ListColchonComponent', () => {
  let component: ListColchonComponent;
  let fixture: ComponentFixture<ListColchonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListColchonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListColchonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
