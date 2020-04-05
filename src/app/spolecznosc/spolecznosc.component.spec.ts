import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpolecznoscComponent } from './spolecznosc.component';

describe('SpolecznoscComponent', () => {
  let component: SpolecznoscComponent;
  let fixture: ComponentFixture<SpolecznoscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpolecznoscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpolecznoscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
