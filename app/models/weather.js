System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Weather;
    return {
        setters:[],
        execute: function() {
            Weather = (function () {
                function Weather() {
                    this.station = { name: undefined };
                    this.sky = { name: undefined };
                    this.temperature = { tc: undefined };
                }
                return Weather;
            }());
            exports_1("Weather", Weather);
        }
    }
});
//# sourceMappingURL=weather.js.map