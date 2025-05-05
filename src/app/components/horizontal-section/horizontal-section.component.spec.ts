import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalSectionComponent } from './horizontal-section.component';

describe('HorizontalSectionComponent', () => {
  let component: HorizontalSectionComponent;
  let fixture: ComponentFixture<HorizontalSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
