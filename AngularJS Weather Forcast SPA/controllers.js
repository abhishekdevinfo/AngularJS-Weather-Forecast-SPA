// CONTROLLERS
    weatherApp.controller("homeCtrl", ["$scope", "$location", "cityName",  
        function ($scope, $location, cityName) {
        $scope.city = cityName.cName;
        $scope.$watch("city", function () {
            cityName.cName = $scope.city;
        });
        $scope.submit = function () {
            $location.path("/forecast");
        };
        
    }]);

    weatherApp.controller("forecastCtrl", ["$scope","$log", "$routeParams", "cityName", "weatherApi",  
        function ($scope, $log, $routeParams, cityName, weatherApi) {    

        $scope.city = cityName.cName;

        $scope.days = $routeParams.days || '2';

        weatherApi
            .getForCity($scope.city, $scope.days)
            .then(function onSuccess(response) {                               
                $scope.weatherData = response;
                $scope.convertToDate = function (dt) {
                    return new Date(dt * 1000);    
                }                
            });       
    }]);