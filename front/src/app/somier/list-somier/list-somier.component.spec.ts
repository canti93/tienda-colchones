import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSomierComponent } from './list-somier.component';

describe('ListSomierComponent', () => {
  let component: ListSomierComponent;
  let fixture: ComponentFixture<ListSomierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSomierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSomierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
