(function() {
  'use strict';
  angular
    .module('app.repos')
    .config(configFunction);

  function configFunction($routeProvider) {
    $routeProvider.when('/repos', {
      templateUrl: '/repos/repos.html',
      controller: 'ReposController',
      controllerAs: 'vm'
    });
  }
})();