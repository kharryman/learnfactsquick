import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorSystemPage } from './major-system.page';

describe('MajorSystemPage', () => {
  let component: MajorSystemPage;
  let fixture: ComponentFixture<MajorSystemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorSystemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorSystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
