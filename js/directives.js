app.directive('sshTeaDataArray', function() {
  return {
    scope: {
      itemData: '=teaData',
    },
    templateUrl: './partials/home.html'
  };
});
// console.log(itemData);

// app.directive('gsPokemonStats', function() {
//   return {
//     scope: {
//       pokemon: '=pokemonData',
//       image: '='
//     },
//     templateUrl: 'templates/pokemon-info.html'
//   };
// });
