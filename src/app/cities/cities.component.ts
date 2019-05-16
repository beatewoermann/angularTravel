import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import  { CITIES } from '../mock-cities';

 
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})

export class CitiesComponent implements OnInit {
 
  origins = CITIES;
  selectedOrigin: City;

  destinations = CITIES;
  selectedDestination: City;

  travelTime = 111;

  constructor() { }

  ngOnInit() {
  }

  onSelectOrigin(origin: City): void {
    this.selectedOrigin = origin;
  }

  onSelectDestination(destination: City): void {
    this.selectedDestination = destination;
  }

}



