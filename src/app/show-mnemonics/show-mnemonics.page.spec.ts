import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMnemonicsPage } from './show-mnemonics.page';

describe('ShowMnemonicsPage', () => {
  let component: ShowMnemonicsPage;
  let fixture: ComponentFixture<ShowMnemonicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMnemonicsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMnemonicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
