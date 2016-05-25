System.register(['angular2/core', '../services/weather.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, weather_service_1;
    var WeatherDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            }],
        execute: function() {
            WeatherDetailComponent = (function () {
                function WeatherDetailComponent(weatherService) {
                    this.weatherService = weatherService;
                }
                WeatherDetailComponent.prototype.getWeatherImage = function (code) {
                    return this.weatherService.getImageUrlByCode(code);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], WeatherDetailComponent.prototype, "weather", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], WeatherDetailComponent.prototype, "imageUrl", void 0);
                WeatherDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-weather-detail',
                        template: "\n    <div *ngIf=\"weather.sky.name !== undefined\" style=\"text-align:center;\">\n      <div>\n        <img [src]=\"getWeatherImage(weather.sky.code)\" />\n      </div>\n      {{ weather.station.name }} / {{ weather.sky.name }} / {{ weather.temperature.tc  }} \uB3C4\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherDetailComponent);
                return WeatherDetailComponent;
            }());
            exports_1("WeatherDetailComponent", WeatherDetailComponent);
        }
    }
});
//# sourceMappingURL=weather-detail.component.js.map