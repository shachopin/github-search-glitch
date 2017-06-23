(function() {
  'use strict';

  angular
    .module('app', [
      // Angular modules.
      'ngRoute',

      //Cutom module
      'app.landing',

      'app.issues',
    
      'app.core',
    
      'app.repos'

    ]);
    
 })();