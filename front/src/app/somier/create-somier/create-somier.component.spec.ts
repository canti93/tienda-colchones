import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSomierComponent } from './create-somier.component';

describe('CreateSomierComponent', () => {
  let component: CreateSomierComponent;
  let fixture: ComponentFixture<CreateSomierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSomierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSomierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
