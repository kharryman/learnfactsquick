import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrosticsTablesPage } from './acrostics-tables.page';

describe('AcrosticsTablesPage', () => {
  let component: AcrosticsTablesPage;
  let fixture: ComponentFixture<AcrosticsTablesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcrosticsTablesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrosticsTablesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
