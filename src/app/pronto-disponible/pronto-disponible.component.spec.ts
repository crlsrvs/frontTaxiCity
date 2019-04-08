import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntoDisponibleComponent } from './pronto-disponible.component';

describe('ProntoDisponibleComponent', () => {
  let component: ProntoDisponibleComponent;
  let fixture: ComponentFixture<ProntoDisponibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProntoDisponibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProntoDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
