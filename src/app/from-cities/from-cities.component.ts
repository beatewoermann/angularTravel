import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import  { CITIES } from '../mock-cities';

@Component({
  selector: 'app-from-cities',
  templateUrl: './from-cities.component.html',
  styleUrls: ['./from-cities.component.css']
})
export class FromCitiesComponent implements OnInit {
  fromCities = CITIES;
  selectedFromCity: City;

  constructor() { }

  ngOnInit() {
  }

  onSelect(fromCity: City): void {
    this.selectedFromCity = fromCity;
  }

}
