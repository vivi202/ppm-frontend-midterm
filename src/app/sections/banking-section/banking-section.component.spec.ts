import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingSectionComponent } from './banking-section.component';

describe('BankingSectionComponent', () => {
  let component: BankingSectionComponent;
  let fixture: ComponentFixture<BankingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
