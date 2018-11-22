import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersPage } from './numbers.page';

describe('NumbersPage', () => {
  let component: NumbersPage;
  let fixture: ComponentFixture<NumbersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
