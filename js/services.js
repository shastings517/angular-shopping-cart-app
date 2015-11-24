app.service("teaData", ['$http', function($http) {

  // var baseUrl = 'http://localhost:8000/items.json/';

  // A number for the pokemon id needs to be added to the
  // this path.
  // var pokemonInfoPath = 'api/v1/pokemon/';
  return {
    getData: function() {
      var itemData;
      var categoryArr = [];
      // console.log(itemData)
      // var fullUrl = baseUrl;
      return $http.get('http://localhost:8000/items.json').then(function(itemData) {
        itemData = itemData.data;
        console.log(itemData);
        return itemData;
      }).then(function(itemData){
        for(var i=0; i<itemData.length; i++){
          for(var j=0; j<itemData[i].categories.length; j++){
            
            categoryArr.push(itemData[i].categories[j]);
            console.log(categoryArr);
          }
        }
        uniqueArray = categoryArr.filter(function(item, pos) {
          return categoryArr.indexOf(item) == pos;
        });
        return uniqueArray;
        
      });
        // itemData.categories = categoryData.data;

        
      
        
      //   var uri = pokeData.abilities[0].resource_uri;
      //   return $http.get(baseUrl + uri);
      // }).then(function(abilityData) {
      //   pokeData.abilities[0] = abilityData.data;
      //   // Notice that this get request doesn't depend on the
      //   // get request it is nested inside of.
      //   var uri = pokeData.moves[0].resource_uri;
      //   return $http.get(baseUrl + uri);
      // }).then(function(moveData) {
      //   pokeData.moves[0] = moveData.data;
      //   var uri = pokeData.sprites[0].resource_uri;
      //   return $http.get(baseUrl + uri);
      // }).then(function(spriteData){
      //   pokeData.sprites[0] = spriteData.data;
      //   return pokeData;


        // Now we have a problem.  How do we signal that this
        // data is done?

    }
  };
}]);

  