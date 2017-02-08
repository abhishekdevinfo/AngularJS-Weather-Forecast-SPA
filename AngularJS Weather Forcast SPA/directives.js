    // CUSTOM DIRECTIVE
    weatherApp.directive("weatherForecast", function () {
        return {
            restrict: "E",
            templateUrl: "./customDirective/weather.html",
            replace: true,
            scope: {
                weatherList: "=",
                convertToDate: "&",
                dataFormat: "&"
            }            
        }
    });