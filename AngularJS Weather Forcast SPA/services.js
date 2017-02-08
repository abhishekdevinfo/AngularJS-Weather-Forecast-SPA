// CUSTOM SERVICES
    weatherApp.service("cityName", function () {
        this.cName = "Delhi";
    });

    weatherApp.service('weatherApi',["$http", function ($http) {
        this.getForCity = function (city, days) {
            var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&units=metric&cnt=' + days + '&appid=5990ba0330621044010e6bc7397759fa';
            return $http.get(url);
        };
    }]);