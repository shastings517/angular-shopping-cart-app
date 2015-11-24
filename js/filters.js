app.filter('price', function(){
  return function(input){
    input = input || '';
    var output = "";
    num = input.substring(0,2);
    dec = input.substring(2,4);
    output = "$" + num + "." + dec;
    return output;
  };
});

app.filter('inStock', function(){
  return function(input){
    if(input === "true"){
      return "yes";
    }
    else{
      return "no";
    }
  };
});

app.filter('categories', function(){
  return function(input){
    for(var i = 0; i < input.length; i++){

    }
  };
});


// num = str.substring(0,str.length-3);
//     //number after the decimal point
//     dec = str.substring(str.length-2,str.length-1)
//     //connect both parts while comma-ing the first half
//     output = commaFunc(num) + "." + dec;

//     return output;
// }

// angular.module('myReverseFilterApp', [])
// .filter('reverse', function() {
//   return function(input, uppercase) {
//     input = input || '';
//     var out = "";
//     for (var i = 0; i < input.length; i++) {
//       out = input.charAt(i) + out;
//     }
//     // conditional based on optional argument
//     if (uppercase) {
//       out = out.toUpperCase();
//     }
//     return out;
//   };
// })
// .controller('MyController', ['$scope', function($scope) {
//   $scope.greeting = 'hello';
// }]);