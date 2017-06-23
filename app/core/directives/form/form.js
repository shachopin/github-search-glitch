(function(){
  angular.module('app.core')
  .directive('searchForm', function() {
    return {
      restrict: 'E',
      templateUrl: '/core/directives/form/form.html',
      controller: function($http, $route, $location, RepoService) { //$oute, just like $routeProvider, is from the angular routes library you have to include in index.html
        var vm = this;
        vm.searchRepos = searchRepos; 
        
        function searchRepos() {
          $http.get("https://api.github.com/search/repositories?q=" + vm.searchReposText).success(function(data){
            RepoService.setRepos(data.items);
            if ($location.path() === "/repos") {
              $route.reload();  //without this statement, if already on the repos page, then type in search box again, and click on search, do nothing. But I want to be able to search again, hence call ReposController again
            } else {
              $location.path("/repos"); 
            }
          }); 
          vm.searchReposText = "";
        }
      },
      controllerAs: 'vm',
      scope: {} 
    };
  });
})();