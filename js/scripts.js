var primeSift = function(number) {
  if (number >= 2) {
    var myArray = arrayUpToNumber(number);
    for (var i = 0; i < myArray.length - 1; i++) {
      for (var j = i+1; j < myArray.length; j++) {
        if (isMultiple(myArray[i],myArray[j])) {
          myArray.splice(j,1);
        }
      }
    }
    return myArray;
  } else {
    return "No prime numbers."
  }
}

var arrayUpToNumber = function(number) {
  var myArray = [];
  for(var i = 2; i <= number; i++ ){
    myArray.push(i);
  }
  return myArray;
};

var isMultiple = function(numberA, numberB){
  return numberB % numberA === 0;
}

// $(document).ready(function() {
//
// });
