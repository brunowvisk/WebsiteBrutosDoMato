import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelejasComponent } from './pelejas.component';

describe('PelejasComponent', () => {
  let component: PelejasComponent;
  let fixture: ComponentFixture<PelejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelejasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
