// ROUTE CONFIG
    weatherApp.config(["$routeProvider", "$locationProvider", 
        function ($routeProvider, $locationProvider) {
        
        $routeProvider
        .when("/", {
            templateUrl: "./pages/home.html",
            controller: "homeCtrl"
        })
        .when("/forecast", {
            templateUrl: "./pages/forcast.html",
            controller: "forecastCtrl"
        })
        .when("/forecast/:days", {
            templateUrl: "./pages/forcast.html",
            controller: "forecastCtrl"
        })     
    }]);