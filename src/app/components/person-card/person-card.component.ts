import { Component,input } from '@angular/core';

@Component({
  selector: 'person-card',
  imports: [],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.scss'
})
export class PersonCardComponent {
  img = input("");
  name= input("");
  description= input("");
}
