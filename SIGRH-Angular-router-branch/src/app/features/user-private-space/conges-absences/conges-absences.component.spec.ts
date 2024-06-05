import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongesAbsencesComponent } from './conges-absences.component';

describe('CongesAbsencesComponent', () => {
  let component: CongesAbsencesComponent;
  let fixture: ComponentFixture<CongesAbsencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CongesAbsencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CongesAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
