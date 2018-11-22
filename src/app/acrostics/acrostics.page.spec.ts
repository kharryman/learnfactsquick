import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrosticsPage } from './acrostics.page';

describe('AcrosticsPage', () => {
  let component: AcrosticsPage;
  let fixture: ComponentFixture<AcrosticsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcrosticsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrosticsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
