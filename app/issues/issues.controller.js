(function(){
  'use strict';

  angular
    .module('app.issues')  
    .controller('IssuesController', IssuesController);
  
  function IssuesController($http, RepoService) { 
    var vm = this;
    vm.authorName = RepoService.getRepo().authorName;
    vm.repoName = RepoService.getRepo().repoName;
    vm.issues = []; 
    
    listIssues(vm.authorName, vm.repoName);
    
    function listIssues(authorName, repoName) {
      $http.get("https://api.github.com/repos/" + authorName + "/" + repoName + "/issues?state=all").success(function(items){
        items.forEach(function(item) {
          vm.issues.push(new Issue(item.title, item.state));
        });
      });   
    }
    
    function Issue(title, state) {
      this.title = title;
      if (state === 'closed') {
        this.state = true;
      } else {
        this.state = false;
      }
    }
  }

})();
