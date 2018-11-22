import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNumbersPage } from './show-numbers.page';

describe('ShowNumbersPage', () => {
  let component: ShowNumbersPage;
  let fixture: ComponentFixture<ShowNumbersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNumbersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNumbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
