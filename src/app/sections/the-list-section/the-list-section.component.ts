import { Component } from '@angular/core';
import { HorizontalSectionComponent } from '../../components/horizontal-section/horizontal-section.component';
import { CompanyCardComponent } from '../../components/company-card/company-card.component';
@Component({
  selector: 'the-list-section',
  imports: [HorizontalSectionComponent,CompanyCardComponent],
  templateUrl: './the-list-section.component.html',
  styleUrl: './the-list-section.component.scss'
})
export class TheListSectionComponent {

}
