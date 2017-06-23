(function(){
  'use strict';

  angular
    .module('app.repos')  
    .controller('ReposController', ReposController);
  
  function ReposController($location, RepoService) { 
    var vm = this;
    vm.repos = RepoService.getRepos(); 
    vm.drillDownToIssues = drillDownToIssues;
    
    function drillDownToIssues(authorName, repoName) {
      RepoService.setRepo(authorName, repoName);
      $location.path('/issues');
    }  
  }

})();
