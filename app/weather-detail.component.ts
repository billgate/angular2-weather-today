import { Component, Input } from 'angular2/core';

import { Weather } from './weather';

@Component({
  selector: 'my-weather-detail',
  template: `
    <h3>This is weather detail component</h3>
    <div>
      {{ weather.station.name }} / {{ weather.sky.name }} / {{ weather.temperature.tc }}
    </div>
  `
})

export class WeatherDetailComponent{

  @Input()
  weather: Weather;

}
