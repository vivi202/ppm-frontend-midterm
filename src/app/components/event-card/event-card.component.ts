import { Component,input } from '@angular/core';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'event-card',
  imports: [FontAwesomeModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  faCalendar = faCalendar;
  name = input("");
  description = input("");
  date = input("")
}
