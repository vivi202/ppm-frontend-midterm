import { Component } from '@angular/core';
import { HorizontalSectionComponent } from '../../components/horizontal-section/horizontal-section.component';
import { EventCardComponent } from '../../components/event-card/event-card.component';
@Component({
  selector: 'events-section',
  imports: [HorizontalSectionComponent,EventCardComponent,],
  templateUrl: './events-section.component.html',
  styleUrl: './events-section.component.scss'
})
export class EventsSectionComponent {
}
