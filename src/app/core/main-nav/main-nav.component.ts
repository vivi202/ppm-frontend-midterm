import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faSearch,faBars,faXmark,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {LinksMenuComponent} from '../links-menu/links-menu.component';
import {AccordionComponent} from '../../components/accordion/accordion.component';
import { AccordionItemComponent} from '../../components/accordion-item/accordion-item.component';
@Component({
  selector: 'app-main-nav',
  imports: [FontAwesomeModule,LinksMenuComponent,AccordionComponent,AccordionItemComponent],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss'
})
export class MainNavComponent {
  faSearch=faSearch;
  faBars=faBars;
  faXmark=faXmark;
  faArrowRight=faArrowRight;
  isHamburgerOpen=false;
  isSearchOpen=false;

  toggleHamburger() {
    this.isSearchOpen=false;
    this.isHamburgerOpen=!this.isHamburgerOpen;
  }

  toggleSearch() {
    this.isHamburgerOpen=false;
    this.isSearchOpen=!this.isSearchOpen;
  }

}
