import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubskrybujComponent } from './subskrybuj.component';

describe('SubskrybujComponent', () => {
  let component: SubskrybujComponent;
  let fixture: ComponentFixture<SubskrybujComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubskrybujComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubskrybujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
