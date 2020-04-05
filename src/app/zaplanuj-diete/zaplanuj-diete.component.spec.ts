import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaplanujDieteComponent } from './zaplanuj-diete.component';

describe('ZaplanujDieteComponent', () => {
  let component: ZaplanujDieteComponent;
  let fixture: ComponentFixture<ZaplanujDieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaplanujDieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaplanujDieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
