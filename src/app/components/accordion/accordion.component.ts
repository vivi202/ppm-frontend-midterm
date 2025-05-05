import { Component,contentChildren } from '@angular/core';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'app-accordion',
  template: '<ng-content></ng-content>',
  imports: [],
})
export class AccordionComponent {
  items= contentChildren(AccordionItemComponent);
  ngAfterContentInit() {
    this.items()?.forEach((t) => {
      t.opened.subscribe((openedItem) => {
        this.items()?.forEach((otherItem) => {
          if( otherItem != openedItem ){
            otherItem.close();
          }
        });
      });
    });
  }
}
