import { Component } from '@angular/core';
import { HorizontalSectionComponent } from '../../components/horizontal-section/horizontal-section.component';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';

@Component({
  selector: 'banking-section',
  imports: [HorizontalSectionComponent, ArticleCardComponent],
  templateUrl: './banking-section.component.html',
  styleUrl: './banking-section.component.scss'
})

export class BankingSectionComponent {

}
