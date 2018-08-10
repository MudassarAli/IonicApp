angular.module('starter.services', [])
 
.factory('Forretter', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var forretter = [{
    id: 1,
    name: 'Vårrull', 
    price: '42',   
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 2,
    name: 'Frityrstekte kongereker',
    price: '82',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 3,
    name: 'Frityrstekte wonton',
    price: '48',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 4,
    name: 'Kylling suppe',
    price: '48',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 5,
    name: 'Peking suppe',
    price: '48',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 7,
    name: 'Wonton suppe',
    price: '48',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 8,
    name: 'Rekecocktail',
    price: '72',
    text: 'Description for rull',
    image: 'img/dish.png'
  }];

  return {
    all: function() {
      return forretter;
    },   
    get: function(forrettId) {
      for (var i = 0; i < forretter.length; i++) {
        if (forretter[i].id === parseInt(forrettId)) {
          return forretter[i];
        }
      }
      return null;
    }
  };
})

.factory('Hovedretter', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var hovedretter = [{
    id: 11,
    name: 'Stekte ris med reker, skinke og egg',
    price: '118',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 12,
    name: 'Sketke nudler med biff',
    price: '118',
    text: 'Description for rull',
    image: 'img/dish.png'
  },{
     id: 13,
    name: 'Sketke nudler med kongereker',
    price: '148',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 21,
    name: 'Biff med bambusskudd og supp',
    price: '148',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 22,
    name: 'Biff med brokkoli',
    text: 'Description for rull',
    price: '148',
    image: 'img/dish.png'
  }, {
    id: 23,
    name: 'Biff med lok i soyasous',
    price: '148',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 24,
    name: 'Biff med lok i peppersaus',
    price: '148',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 25,
    name: 'Biff chopsuey',
    price: '148',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 26,
    name: 'Biff i karrisaus',
    price: '148',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 27,
    name: 'Biff i satesaus (krydret)',
    price: '148',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 28,
    name: 'Biff i szechuansaus (krydret)',
    price: '148',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 29,
    name: 'Biff i malasaus (krydret)',
    price: '148',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 35,
    name: 'Frityrstekt svinefilet med sursotsaus',
    price: '148',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 36,
    name: 'Sursot svinefilet i original oppskrift',
    price: '148',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 39,
    name: 'Pekingand med bambusskudd og sopp',
    price: '178',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 40,
    name: 'Frityrstekt and med sursot saus',
    price: '178',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 44,
    name: 'Frityrstekt kylling med sursot saus',
    price: '148',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 45,
    name: 'kylling i karrisaus',
    price: '148',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 46,
    name: 'kylling chopsuey',
    price: '148',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 47,
    name: 'kylling med cachewnotter (krydret)',
    price: '158',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 48,
    name: 'kylling med med ananas i sursot saus',
    price: '148',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 49,
    name: 'kylling i szechuansaus (krydret)',
    price: '148',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 55,
    name: 'Frityrstekte kongereker med sursot saus',
    price: '168',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 56,
    name: 'Kongereker med cachewnotter (krydret)',
    price: '178',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 57,
    name: 'Kongereker i karrisaus',
    price: '168',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 58,
    name: 'Kongereker med brokkoli i hvitloksaus',
    price: '168',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 59,
    name: 'Kongereker i szechuansaus (krydret)',
    price: '168',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 60,
    name: 'Hummer med Kongereker i hvitloksaus',
    price: '198',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 64,
    name: 'Fiskefilet i varm plate (krydret)',
    price: '178',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 65,
    name: 'Momet kyllingfillet i varm plate',
    price: '168',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 66,
    name: 'Momet biff i varm plate',
    price: '168',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 67,
    name: 'Lammestrimler i varm plate',
    price: '178',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 68,
    name: 'Muntre familien (biff, kylling, svinfilet)',
    price: '158',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 69,
    name: 'Golden Crown chopsuey (wok)',
    price: '178',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 70,
    name: 'Skalldyr i szechuansaus (krydret)',
    price: '178',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 71,
    name: 'Skalldyr i hvitlok, ingefærsaus (krydret)',
    price: '178',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 72,
    name: 'Fiskefilet i szechuansaus (krydret)',
    price: '178',
    text: 'Description for rull',
    image: 'img/dish.png'
  } , {
    id: 73,
    name: 'Kongereker i sochasaus (krydret)',
    price: '178',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 74,
    name: 'Kongereker og kylling i rod karrisaus',
    price: '178',
    text: 'Description for rull',
    image: 'img/dish.png'
  }];

  return {
    all: function() {
      return hovedretter;
    },   
    get: function(hovedrettId) {
      for (var i = 0; i < hovedretter.length; i++) {
        if (hovedretter[i].id === parseInt(hovedrettId)) {
          return hovedretter[i];
        }
      }
      return null;
    }
  };
})

.factory('Desserter', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var desserter = [{
    id: 0,
    name: 'Desert',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 1,
    name: 'Desert',
    text: 'Description for rull',
    image: 'img/dish.png'
  },{
     id: 2,
    name: 'Desert',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
     id: 3,
    name: 'Desert',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 4,
    name: 'Desert',
    text: 'Description for rull',
    image: 'img/dish.png'
  }];

  return {
    all: function() {
      return desserter;
    },   
    get: function(dessertId) {
      for (var i = 0; i < desserter.length; i++) {
        if (desserter[i].id === parseInt(dessertId)) {
          return desserter[i];
        }
      }
      return null;
    }
  };
})

.factory('Drikker', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var drikker = [{
    id: 0,
    name: 'drikke',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 1,
    name: 'drikke',
    text: 'Description for rull',
    image: 'img/dish.png'
  },{
     id: 2,
    name: 'drikke',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
     id: 3,
    name: 'drikke',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 4,
    name: 'drikke',
    text: 'Description for rull',
    image: 'img/dish.png'
  }];

  return {
    all: function() {
      return drikker;
    },   
    get: function(drikkeId) {
      for (var i = 0; i < drikker.length; i++) {
        if (drikker[i].id === parseInt(drikkeId)) {
          return drikker[i];
        }
      }
      return null;
    }
  };
})

.factory('Recommendations', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var recommendations = [{
    id: 0,
    name: 'test',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 1,
    name: 'drikke',
    text: 'Description for rull',
    image: 'img/dish.png'
  },{
     id: 2,
    name: 'drikke',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
     id: 3,
    name: 'drikke',
    text: 'Description for rull',
    image: 'img/dish.png'
  }, {
    id: 4,
    name: 'drikke',
    text: 'Description for rull',
    image: 'img/dish.png'
  }];

  return {
    all: function() {
      return recommendations;
    },   
    get: function(drikkeId) {
      for (var i = 0; i < recommendations.length; i++) {
        if (recommendations[i].id === parseInt(drikkeId)) {
          return recommendations[i];
        }
      }
      return null;
    }
  };
});




