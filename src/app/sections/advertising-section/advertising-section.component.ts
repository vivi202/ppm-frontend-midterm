import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faMoneyBillTrendUp, faGraduationCap,faMoneyBills,faPeopleRoof } from '@fortawesome/free-solid-svg-icons';

import { HorizontalSectionComponent } from '../../components/horizontal-section/horizontal-section.component';

@Component({
  selector: 'advertising-section',
  imports: [HorizontalSectionComponent,FontAwesomeModule],
  templateUrl: './advertising-section.component.html',
  styleUrl: './advertising-section.component.scss'
})

export class AdvertisingSectionComponent {
  faTrend = faMoneyBillTrendUp;
  faGraduation = faGraduationCap;
  faMoneyBills = faMoneyBills;
  faPeopleRoof = faPeopleRoof;
}

