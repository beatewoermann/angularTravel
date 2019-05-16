import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromCitiesComponent } from './from-cities.component';

describe('FromCitiesComponent', () => {
  let component: FromCitiesComponent;
  let fixture: ComponentFixture<FromCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
