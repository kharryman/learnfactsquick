import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNewWordsPage } from './edit-new-words.page';

describe('EditNewWordsPage', () => {
  let component: EditNewWordsPage;
  let fixture: ComponentFixture<EditNewWordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNewWordsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewWordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
