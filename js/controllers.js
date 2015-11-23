app.controller('HomeController', ['$scope', 'teaData', function($scope, teaData) {
  teaData.getData().then(function(itemData){
  console.log(itemData);
    $scope.itemData = itemData;
    // debugger
  });
}]);

// app.controller('PokemonController', ['$scope', 'Pokemon', function($scope, Pokemon){
//   Pokemon.catchEm(1).then(function(pokeData){
//     $scope.pData = pokeData;
//   });
// }]);
