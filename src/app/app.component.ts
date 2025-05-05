import { Component } from '@angular/core';

import { HeaderComponent } from './core/header/header.component';

import { FooterComponent } from './core/footer/footer.component';

import { BankingSectionComponent } from './sections/banking-section/banking-section.component';

import {MainSectionComponent} from './sections/main-section/main-section.component';

import { TheListSectionComponent } from './sections/the-list-section/the-list-section.component';

import { PeopleOnTheMoveSectionComponent } from './sections/people-on-the-move-section/people-on-the-move-section.component';

import { EventsSectionComponent } from './sections/events-section/events-section.component';

import { AdvertisingSectionComponent } from './sections/advertising-section/advertising-section.component';


import { CommercialRealEstateSectionComponent } from './sections/commercial-real-estate-section/commercial-real-estate-section.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    TheListSectionComponent,EventsSectionComponent,
    CommercialRealEstateSectionComponent,
    PeopleOnTheMoveSectionComponent,AdvertisingSectionComponent,
    MainSectionComponent,BankingSectionComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

}
