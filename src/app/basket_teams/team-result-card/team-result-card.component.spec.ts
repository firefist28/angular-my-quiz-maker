import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamResultCardComponent } from './team-result-card.component';

describe('TeamResultCardComponent', () => {
  let component: TeamResultCardComponent;
  let fixture: ComponentFixture<TeamResultCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamResultCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamResultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
