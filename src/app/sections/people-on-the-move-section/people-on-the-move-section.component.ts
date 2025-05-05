import { Component } from '@angular/core';
import { PersonCardComponent } from '../../components/person-card/person-card.component';
import { HorizontalSectionComponent } from '../../components/horizontal-section/horizontal-section.component';

@Component({
  selector: 'people-on-the-move-section',
  imports: [PersonCardComponent,HorizontalSectionComponent],
  templateUrl: './people-on-the-move-section.component.html',
  styleUrl: './people-on-the-move-section.component.scss'
})
export class PeopleOnTheMoveSectionComponent {

}
