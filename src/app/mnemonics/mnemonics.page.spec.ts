import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnemonicsPage } from './mnemonics.page';

describe('MnemonicsPage', () => {
  let component: MnemonicsPage;
  let fixture: ComponentFixture<MnemonicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnemonicsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnemonicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
