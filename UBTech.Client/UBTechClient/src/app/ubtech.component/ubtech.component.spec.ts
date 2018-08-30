import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UBTechComponent } from './ubtech.component';

describe('UBTechComponent', () => {
  let component: UBTechComponent;
  let fixture: ComponentFixture<UBTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UBTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UBTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
