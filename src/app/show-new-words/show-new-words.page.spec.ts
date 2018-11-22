import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNewWordsPage } from './show-new-words.page';

describe('ShowNewWordsPage', () => {
  let component: ShowNewWordsPage;
  let fixture: ComponentFixture<ShowNewWordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNewWordsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNewWordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
