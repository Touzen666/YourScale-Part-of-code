import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajListeComponent } from './dodaj-liste.component';

describe('DodajListeComponent', () => {
  let component: DodajListeComponent;
  let fixture: ComponentFixture<DodajListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
