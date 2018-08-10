// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services', 'GoogleMapsNative'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function (gmLibraryProvider) {
        gmLibraryProvider.configure({
            language: 'en'
        });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
       templateUrl: "templates/home.html", 
       controller : 'RecommendationsCtrl'
      }
    }
  })

  .state('app.mainmenu', {
      url: "/mainmenu",
      views: {
        'menuContent': {
          templateUrl: "templates/mainmenu.html",
          controller: 'MainMenuCtrl'
        }
      }
    })

  .state('app.forretter', {
      url: "/forretter",   
      views: {
        'menuContent': {
          templateUrl: "templates/forretter.html",
          controller: 'ForretterCtrl'
        }
      }
    })

  .state('app.forrett', {
    url: "/forretter/:forrettId",
    views: {
      'menuContent': {
        templateUrl: "templates/forrett.html",
        controller: 'ForrettCtrl'
      }
    }
  }) 

  .state('app.hovedretter', {
      url: "/hovedretter",   
      views: {
        'menuContent': {
          templateUrl: "templates/hovedretter.html",
          controller: 'HovedretterCtrl'
        }
      }
    })

  .state('app.hovedrett', {
    url: "/hovedretter/:hovedrettId",
    views: {
      'menuContent': {
        templateUrl: "templates/hovedrett.html",
        controller: 'HovedrettCtrl'
      }
    }
  })

  .state('app.desserter', {
      url: "/desserter",   
      views: {
        'menuContent': {
          templateUrl: "templates/desserter.html",
          controller: 'DesserterCtrl'
        }
      }
    })

  .state('app.dessert', {
    url: "/desserter/:dessertId",
    views: {
      'menuContent': {
        templateUrl: "templates/dessert.html",
        controller: 'DessertCtrl'
      }
    }
  })   

  .state('app.drikker', {
      url: "/drikker",   
      views: {
        'menuContent': {
          templateUrl: "templates/drikker.html",
          controller: 'DrikkerCtrl'
        }
      }
    })

  .state('app.drikke', {
    url: "/drikker/:drikkeId",
    views: {
      'menuContent': {
        templateUrl: "templates/drikke.html",
        controller: 'DrikkeCtrl'
      }
    }
  }) 

  .state('app.favorites', {
    url: "/favorites",
    views: {
      'menuContent': {
       templateUrl: "templates/favorites.html",
       controller: 'FavoriteCtrl'              
      }
    }
  })

  .state('app.about', {
    url: "/about",
    views: {
      'menuContent': {
       templateUrl: "templates/about.html"
                      
      }
    }
  })
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
