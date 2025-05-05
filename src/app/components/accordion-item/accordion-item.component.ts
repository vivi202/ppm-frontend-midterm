import { Component,viewChild,ElementRef,output } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  imports: [],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.scss'
})
export class AccordionItemComponent {
  detailsRef= viewChild('details', {read: ElementRef});
  opened=output<AccordionItemComponent>();

  toggled(event: any){
    if(event.target.open) {
      //Emit Event To close all the other accordion-items
      this.opened.emit(this);
    }

  }

  close(){
      this.detailsRef()?.nativeElement.removeAttribute('open');
  }

  open(){
   this.detailsRef()?.nativeElement.setAttribute('open','');
  }

}
