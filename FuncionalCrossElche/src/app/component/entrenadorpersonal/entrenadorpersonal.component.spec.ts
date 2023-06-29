import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorpersonalComponent } from './entrenadorpersonal.component';

describe('EntrenadorpersonalComponent', () => {
  let component: EntrenadorpersonalComponent;
  let fixture: ComponentFixture<EntrenadorpersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenadorpersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrenadorpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
