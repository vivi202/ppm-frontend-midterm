import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksMenuComponent } from './links-menu.component';

describe('LinksMenuComponent', () => {
  let component: LinksMenuComponent;
  let fixture: ComponentFixture<LinksMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
