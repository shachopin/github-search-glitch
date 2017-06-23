(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('RepoService', RepoService);

  function RepoService() {                         
    var repo = {};
    var existingRepos = [];
    
    var setRepo = function(authorName, repoName) {
      repo.authorName = authorName;
      repo.repoName = repoName;
    };

    var getRepo = function(){
      return repo;
    };
    
    var setRepos = function(repos) {
      existingRepos = repos
    }
    
    var getRepos = function() {
      return existingRepos;
    }

    return {
      setRepo: setRepo,
      getRepo: getRepo,
      setRepos: setRepos,
      getRepos: getRepos
    };
  }
})();

