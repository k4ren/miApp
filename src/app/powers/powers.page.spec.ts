import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowersPage } from './powers.page';

describe('PowersPage', () => {
  let component: PowersPage;
  let fixture: ComponentFixture<PowersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
