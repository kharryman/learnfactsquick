import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetPage } from './alphabet.page';

describe('AlphabetPage', () => {
  let component: AlphabetPage;
  let fixture: ComponentFixture<AlphabetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
