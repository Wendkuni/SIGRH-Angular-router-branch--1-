import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelPageComponent } from './personnel-page.component';

describe('PersonnelDossierComponent', () => {
  let component: PersonnelPageComponent;
  let fixture: ComponentFixture<PersonnelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonnelPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
