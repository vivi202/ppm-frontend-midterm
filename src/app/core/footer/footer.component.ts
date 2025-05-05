import { Component } from '@angular/core';
import { AccordionComponent } from '../../components/accordion/accordion.component';
import { AccordionItemComponent } from '../../components/accordion-item/accordion-item.component';
@Component({
  selector: 'app-footer',
  imports: [AccordionComponent, AccordionItemComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
