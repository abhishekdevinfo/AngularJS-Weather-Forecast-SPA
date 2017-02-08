
// MODULE    
var weatherApp = angular.module("weatherApp", ["ngRoute"]);

// convert hashPrefix ("!") to (""). For routing. This issue is only in angular 1.6.1
weatherApp.config(['$locationProvider', function($locationProvider) {
$locationProvider.hashPrefix('');
}]); 





