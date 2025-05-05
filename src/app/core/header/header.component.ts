import { Component } from '@angular/core';
import {  MainNavComponent } from '../main-nav/main-nav.component'
import { CityNavComponent } from '../city-nav/city-nav.component'
@Component({
  selector: 'app-header',
  imports: [MainNavComponent, CityNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
