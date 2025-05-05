import { Component,input } from '@angular/core';

@Component({
  selector: 'company-card',
  imports: [],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.scss'
})
export class CompanyCardComponent {
  category = input("");
  title = input("");
  description = input("");
  number = input(0);
}
