var app = angular.module('shoppingCartApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  })
  .when('/checkout', {
    templateUrl: 'partials/checkout.html',
    controller: 'HomeController'
  })
  .otherwise({
    redirectTo: '/'
  });

  // $locationProvider.html5Mode(true);
}]);