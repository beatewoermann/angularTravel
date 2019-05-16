import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import  { CITIES } from '../mock-cities';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  destinations = CITIES;
  selectedDestination: City;

  constructor() { }

  ngOnInit() {
  }

  onSelect(destination: City): void {
    this.selectedDestination = destination;
  }

}
