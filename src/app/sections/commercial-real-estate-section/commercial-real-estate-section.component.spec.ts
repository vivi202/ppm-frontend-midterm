import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialRealEstateSectionComponent } from './commercial-real-estate-section.component';

describe('CommercialRealEstateSectionComponent', () => {
  let component: CommercialRealEstateSectionComponent;
  let fixture: ComponentFixture<CommercialRealEstateSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercialRealEstateSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialRealEstateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
