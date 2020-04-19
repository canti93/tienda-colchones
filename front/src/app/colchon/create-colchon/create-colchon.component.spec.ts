import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateColchonComponent } from './create-colchon.component';

describe('CreateColchonComponent', () => {
  let component: CreateColchonComponent;
  let fixture: ComponentFixture<CreateColchonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateColchonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateColchonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
