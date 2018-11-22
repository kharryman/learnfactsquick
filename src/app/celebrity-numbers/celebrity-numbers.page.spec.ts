import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityNumbersPage } from './celebrity-numbers.page';

describe('CelebrityNumbersPage', () => {
  let component: CelebrityNumbersPage;
  let fixture: ComponentFixture<CelebrityNumbersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrityNumbersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityNumbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
