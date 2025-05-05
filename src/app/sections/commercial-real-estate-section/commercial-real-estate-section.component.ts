import { Component } from '@angular/core';
import { HorizontalSectionComponent } from '../../components/horizontal-section/horizontal-section.component';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
@Component({
  selector: 'commercial-real-estate-section',
  imports: [HorizontalSectionComponent,ArticleCardComponent],
  templateUrl: './commercial-real-estate-section.component.html',
  styleUrl: './commercial-real-estate-section.component.scss'
})

export class CommercialRealEstateSectionComponent {

}
