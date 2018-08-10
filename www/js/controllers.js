angular.module('starter.controllers', ['LocalStorageModule','ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  
})

.controller('MainMenuCtrl', function($scope) {
  
})

.controller('RecommendationsCtrl', function($scope, Recommendations) {
  $scope.recommendations = Recommendations.all();
})

.controller('ForretterCtrl', function($scope, Forretter) {
  $scope.forretter = Forretter.all();
})

.controller('ForrettCtrl', function($scope, $stateParams, Forretter) {
  $scope.forrett = Forretter.get($stateParams.forrettId);
 
})

.controller('HovedretterCtrl', function($scope, Hovedretter) {
  $scope.hovedretter = Hovedretter.all();
})

.controller('HovedrettCtrl', function($scope, $stateParams, Hovedretter) {
  $scope.hovedrett = Hovedretter.get($stateParams.hovedrettId);
 
})

.controller('DesserterCtrl', function($scope, Desserter) {
  $scope.desserter = Desserter.all();
})

.controller('DessertCtrl', function($scope, $stateParams, Desserter) {
  $scope.dessert = Desserter.get($stateParams.dessertId);
 
})

.controller('DrikkerCtrl', function($scope, Drikker) {
  $scope.drikker = Drikker.all();
})

.controller('DrikkeCtrl', function($scope, $stateParams, Drikker) {
  $scope.drikke = Drikker.get($stateParams.drikkeId);
 
})

.controller('AboutCtrl', function($scope) {
 
})

//Favorite controller
.controller('FavoriteCtrl',
  function($scope, localStorageService) {
    
    $scope.addToFavorites = function(favorite) {    
       //var o = localStorage.getArray('myArray');      
       localStorage.pushArrayItem('myArray', favorite); 
       //var n = localStorage.getArray('myArray');    


    };

    $scope.allfavorites = localStorage.getArray('myArray');

    /*$scope.$watch('allfovorites', function(n, o){
        console.log(n);
        if(n != o){
            $scope.allfavorites = n;           
          }  
          else{
            $scope.allfavorites = localStorage.getArray('myArray');
          }      

      }, true); */

    $scope.data = {
      showDelete: false
    }; 

    
    $scope.deleteItemFromFavorites = function(favorite) {
      localStorage.removeArrayItem('myArray', favorite); 
      $scope.allfavorites = localStorage.getArray('myArray');  
      $scope.data = {showDelete: false};
      
    };

    $scope.deleteFromFavorites = function(favorite) {
      localStorage.deleteArray('myArray', favorite);          
    };

    $scope.toggleAll = function () {
    for (var i = 0; i < $scope.myArray.length; i++) {
      $scope.entries[i].checked = $scope.checkedAll;
      }    
    };    
     
    $scope.data = {
      isItemInFavorites(favorite){        
        var item = localStorage.getArrayItem('myArray', favorite); 
        if (item) {
            return true;            
        } 
        else {
          return false;
        }  
      }
    };

    

    $scope.clearAll = localStorageService.clearAll;
  })

//Social share
.controller("ShareCtrl", function($scope, $cordovaSocialSharing) {
 
    $scope.shareAnywhere = function() {
      console.log('working');
        $cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "http://blog.nraboy.com");
    }
 
    $scope.shareViaTwitter = function(message, image, link) {
        $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
            $cordovaSocialSharing.shareViaTwitter(message, image, link);
        }, function(error) {
            alert("Cannot share on Twitter");
        });
    }
 
})


//Send Email Home page
.controller("EmailCtrl", function($scope) {
    $scope.sendFeedback = function() {
      console.log('test')
        if(window.plugins && window.plugins.emailComposer) {
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
                console.log("Response");
            }, 
            "Subject ", // Subject
            "",                      // Body
            ["zhugezevan@goldencrown.no"],    // To
            null,                    // CC
            null,                    // BCC
            false,                   // isHTML
            null,                    // Attachments
            null);                   // Attachment Data
        }
    }
});






