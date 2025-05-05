import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheListSectionComponent } from './the-list-section.component';

describe('TheListSectionComponent', () => {
  let component: TheListSectionComponent;
  let fixture: ComponentFixture<TheListSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheListSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheListSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
