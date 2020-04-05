import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarzenieComponent } from './warzenie.component';

describe('WarzenieComponent', () => {
  let component: WarzenieComponent;
  let fixture: ComponentFixture<WarzenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarzenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarzenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
