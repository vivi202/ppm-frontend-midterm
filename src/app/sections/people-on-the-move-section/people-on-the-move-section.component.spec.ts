

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleOnTheMoveSectionComponent } from './people-on-the-move-section.component';

describe('PeopleOnTheMoveSectionComponent', () => {
  let component: PeopleOnTheMoveSectionComponent;
  let fixture: ComponentFixture<PeopleOnTheMoveSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleOnTheMoveSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleOnTheMoveSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
