import { Component,input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'horizontal-section',
  imports: [FontAwesomeModule],
  templateUrl: './horizontal-section.component.html',
  styleUrl: './horizontal-section.component.scss'
})

export class HorizontalSectionComponent {
  faAngleRight=faAngleRight;
  title=input("");
  border=input(true);
  scroll_x=input(false);
}
