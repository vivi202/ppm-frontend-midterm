import { Component,input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  img = input("");
  category = input("Manufacturing");
  heading = input("");
  summary = input("");
  isHorizontal= input(false);
  disableBorderBottom = input(false);
  isMainArticle = input(false);
}
