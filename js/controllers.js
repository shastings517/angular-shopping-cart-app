app.controller('HomeController', ['$scope', 'teaData', function($scope, teaData) {
  teaData.getData().then(function(itemData){
    $scope.itemData = itemData;
    console.log(itemData);
    // debugger
  });
  teaData.getCatArr().then(function(categoryArr){
    $scope.categoryArr = categoryArr;
    console.log(categoryArr);
  });
}]);

// app.controller('PokemonController', ['$scope', 'Pokemon', function($scope, Pokemon){
//   Pokemon.catchEm(1).then(function(pokeData){
//     $scope.pData = pokeData;
//   });
// }]);
