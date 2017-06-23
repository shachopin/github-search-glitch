(function() {
  'use strict';
  angular
    .module('app.landing')
    .config(configFunction);

  function configFunction($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/landing/landing.html'
    });
  }
})();