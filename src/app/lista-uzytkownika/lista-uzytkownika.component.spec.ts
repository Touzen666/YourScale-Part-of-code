import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUzytkownikaComponent } from './lista-uzytkownika.component';

describe('ListaUzytkownikaComponent', () => {
  let component: ListaUzytkownikaComponent;
  let fixture: ComponentFixture<ListaUzytkownikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaUzytkownikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUzytkownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
