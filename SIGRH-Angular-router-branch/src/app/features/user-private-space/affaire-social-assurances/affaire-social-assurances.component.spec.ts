import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffaireSocialAssurancesComponent } from './affaire-social-assurances.component';

describe('AffaireSocialAssurancesComponent', () => {
  let component: AffaireSocialAssurancesComponent;
  let fixture: ComponentFixture<AffaireSocialAssurancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffaireSocialAssurancesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AffaireSocialAssurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
