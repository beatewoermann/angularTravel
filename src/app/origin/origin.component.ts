import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import  { CITIES } from '../mock-cities';

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrls: ['./origin.component.css']
})

export class OriginComponent implements OnInit {

  origins = CITIES;
  selectedOrigin: City;

  constructor() { }

  ngOnInit() {
  }

  onSelect(origin: City): void {
    this.selectedOrigin = origin;
  }

}

