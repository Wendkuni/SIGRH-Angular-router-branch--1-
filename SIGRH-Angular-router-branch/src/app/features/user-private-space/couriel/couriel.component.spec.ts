import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourielComponent } from './couriel.component';

describe('CourielComponent', () => {
  let component: CourielComponent;
  let fixture: ComponentFixture<CourielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourielComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
