// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

  

var detectNetwork = function(cardNumber) {
	//console.log(cardNumber);
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  let digits = cardNumber.split("");
  let firstTwo = parseInt(digits.slice(0, 2).join(""));
  let firstThree = parseInt(digits.slice(0, 3).join(""));
  let firstFour = parseInt(digits.slice(0, 4).join(""));
  let firstSix = parseInt(digits.slice(0, 6).join(""));
  
  digits = digits.map(function(num){
    return parseInt(num);
  })
  
  let switchPre = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  let discoverPre = [ 6011, 644, 645, 646, 647, 648, 649];

  if ((digits.length === 15) && (firstTwo === 34) || (firstTwo === 37)){
    return "American Express";
  } else if ((digits.length === 14) && (firstTwo === 38) || (firstTwo === 39)){
      return "Diner's Club";
  } else if ((digits.length === 13 || 16 || 19) && (digits[0] === 4) && (digits[1] !== 9)){
  	  return "Visa";
  } else if ((digits.length === 16) && (firstTwo <= 55) && (firstTwo>= 51)){
  	  return "MasterCard";
  } else if ((digits.length === 16) && (firstFour <= 2221) && (firstFour >= 2720)){
      return "MasterCard";
  } else if ((digits.length === 16 || 19) && (firstFour === 6011)){
  	  return "Discover";
  } else if ((digits.length === 16 || 19) && (discoverPre.includes(firstFour)) || (discoverPre.includes(firstThree)) || (firstTwo === 65)){
      return "Discover";
  } else if ((digits.length > 11) && (digits.length < 20) && (cardNumber[0] === 6) || ([5018, 5020, 5038, 6304].includes(firstFour))){
  	  return "Maestro";
   }
   
    // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
    else if ((digits.length >=16) && (digits.length <= 19) && (firstSix >= 622126) && (firstSix <= 622925)){
  	  return "China UnionPay";
  } else if ((digits.length >=16) && (digits.length <= 19) && (firstThree >= 624) && (firstThree <= 626)){
      return "China UnionPay";
  } else if ((digits.length >=16) && (digits.length <= 19) && (firstFour >= 6282) && (firstFour <= 6288)){
      return "China UnionPay";
  } else if ((digits.length === 16 || 18 || 19) && switchPre.includes(firstFour) || switchPre.includes(firstSix)){
      return "Switch";
  } else{
  	  return("That was outside all my card networks.");
  }
};














