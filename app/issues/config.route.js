(function() {
  'use strict';
  angular
    .module('app.issues')
    .config(configFunction);

  function configFunction($routeProvider) {
    $routeProvider.when('/issues', {
      templateUrl: '/issues/issues.html',
      controller: 'IssuesController',
      controllerAs: 'vm'
    });
  }
})();