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
    return [];
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


var isPrime = function(number) {
  if (number < 2) {
    return false;
  } else {
    for (var i = 2; i <= number/2; i++) {
      if (isMultiple(i,number)) {
        return false;
      }
    }
    return true;
  }
}

var primesRecursive = function(number) {
  if (number < 2) {
    return [];
  } else if (isPrime(number)) {
    return primeSift(number-1).concat([number]);
  } else {
    return primeSift(number-1);
  }
}

$(document).ready(function() {
  $("form.input").submit(function(evennt) {
    var number = parseInt($("input#number").val());

    var seiveStart = new Date().getTime();
    var seivePrimes = primeSift(number);
    var seiveEnd = new Date().getTime();
    var seiveTime = seiveEnd - seiveStart;
    $(".seivePrimes").text(seivePrimes);
    $(".seiveTime").text(seiveTime);

    var recStart = new Date().getTime();
    var recPrimes = primesRecursive(number);
    var recEnd = new Date().getTime();
    var recTime = recEnd - recStart;
    $(".recPrimes").text(recPrimes);
    $(".recTime").text(recTime);

    $(".result").show();
    $(".input").hide();
    event.preventDefault();
  });
});
