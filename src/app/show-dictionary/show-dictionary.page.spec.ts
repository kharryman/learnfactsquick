import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDictionaryPage } from './show-dictionary.page';

describe('ShowDictionaryPage', () => {
  let component: ShowDictionaryPage;
  let fixture: ComponentFixture<ShowDictionaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDictionaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDictionaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
