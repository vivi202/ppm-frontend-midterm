import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-city-nav',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './city-nav.component.html',
  styleUrl: './city-nav.component.scss'
})
export class CityNavComponent {
  cities = [
    "National", "Albany",
    "Albuquerque", "Atlanta",
    "Austin", "Baltimore",
    "Birmingham", "Boston",
    "Buffalo", "Charlotte",
    "Chicago", "Cincinnati",
    "Cleveland", "Columbus",
    "Dallass", "Dayton",
    "Denver", "Greensboro/Winston-salem",
    "Honolulu", "Houston",
    "Jacksonville", "Kansas City",
    "Los Angeles", "Louisville",
    "Memphis", "Miami/Fort Luaderdale",
    "Milwaukee", "Minneapolis/St. Paul",
    "Nashville", "New York",
    "Orlando", "Philadelphia",
    "Phoenix", "Pittsburgh",
    "Portland", "Providence",
    "Raleigh/Durham", "Sacramento",
    "San Antonio", "San Francisco",
    "Seattle", "Silicon Valley",
    "St. Louis", "Tampa Bay",
    "Washington, D.C.", "wichita",
  ];

  faUser = faUser;
  faCaretDown = faCaretDown;
  isDropdownCityOpen = false;
  isDropdownSignInOpen = false;

  toggleCityDropdown() {
    this.isDropdownSignInOpen = false;
    this.isDropdownCityOpen = !this.isDropdownCityOpen;
  }
  toggleSignInDropdown() {
    this.isDropdownCityOpen = false;
    this.isDropdownSignInOpen = !this.isDropdownSignInOpen;
  }
}
