import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>This is App Component </h1>
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
