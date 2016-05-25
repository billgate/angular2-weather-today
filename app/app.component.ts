import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { WeatherComponent } from './components/weather.component';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'my-app',
  template: `
    <my-weather></my-weather>
  `,

  directives: [ROUTER_DIRECTIVES, WeatherComponent],
  providers: [
    ROUTER_PROVIDERS,
    WeatherService
  ]
})

@RouteConfig([

])


export class AppComponent {



}
