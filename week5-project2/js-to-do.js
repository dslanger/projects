// 1.  Log your last name to the console.
var name = 'Dan';
console.log(name);

// 2.  Declare a variable called "movie" and log it to the console.
var movie = '2001';
console.log(movie);

// 3.  Declare three variables with integer values. Add the first two, then multiply that sum by the third.
var numOne = 2;
var numTwo = 4;
var numThree = 6;
console.log((numOne + numTwo) * numThree);

// 4.  Declare two variable with string values. Declare a third varible that concatenates the first two.
var strOne = 'Hello ';
var strTwo = 'World!';
var strThree = strOne + strTwo;
console.log(strThree);

// 5.  Prompt a user to enter a number. Multiply that by 100.
var userNum = prompt("Enter a number.");
console.log(userNum * 100);

// 6.  Prompt a user to enter his/her name, favorite band, and the year they were born. Log the sentence:
//     "My name is ______, and I'm ___ years old and a fan of ________."
var sentence = function(){
  var currentYear = 2016;
  var name = prompt("name");
  var band = prompt("favorite band");
  var birthyear = prompt("birth year");
  console.log("My name is " + name + ", and I'm " + (currentYear - birthyear) + " years old and a fan of " + band + ".");
};
sentence();

// 7.  Create an alert that uses the response from a prompt.
var response = prompt("What's your favorite alert?");
alert(response);

// 8.  Declare an array with six items. Do this two different ways.
var arraySixA = ['one', 'two', 'three', 'four', 'five', 'six'];
var arraySixB = new Array('one', 'two', 'three', 'four', 'five', 'six');
console.log(arraySixB);

// 9.  Add two additional items to the beginning of the array.
arraySixA.unshift('negative one', 'zero');
console.log(arraySixA);

// 10. Remove the last two items.
arraySixA.splice(this.length - 2);

// 11. Add one item between the 2nd and 3rd item.
arraySixA.splice(2, 0, 'two point five');

// 12. Combine all of the elements of the array into a string.
arraySixA.join('');

// 13. Arrange the items alphabetically.
arraySixA.sort();

// 14. Create an array of three arrays: colors, names, and schools. Each inner array should have three items.
var arrayFourteen = [
  ['red', 'green', 'blue'],
  ['Larry', 'Moe', 'Curly'],
  ['Brown', 'Yale', 'Harvard']
];

// 15. Remove the last item from the second array.
var poppedFirst = arrayFourteen[1].pop();
console.log(poppedFirst);

// 16. Declare an object called "car" that describes the make, model, and color of your car.
var car = {
  make: "Surly",
  model: "Cross-Check",
  color: "black"
};

// 17. To the car object, add the key/value pair describing the year of your car.
car.year = 2007;
console.log(car);

// 18. To the car object, add a "repairs" key with the value being an array of the last three items you fixed on the car.
car.repairs = ['tire', 'breaks', 'chain'];
console.log(car);

// Use the following object for questions 19-25:
guests = {
  "joe": {
    first_name: "Joe",
    last_name: "Jenkins",
    preferences: {
      meal: "meat",
      favorite_genres: ["jazz", "soul"],
    },
    sitting_next_to: "sue",
    correspondence: [
      {date: "11/4/2014", description: "sent invitation"},
      {date: "12/2/2014", description: "replied yes"},
    ],
  },
  "sue":{
    first_name: "Sue",
    last_name: "Summers",
    preferences: {
      meal: "fish",
      favorite_genres: ["funk", "blues"],
    },
    sitting_next_to: "joe",
    correspondence: [
      {date: "11/7/2014", description: "sent invitation"},
      {date: "12/8/2014", description: "replied yes + 1"},
    ],
  },
}

// 19. Find Joe's last name.
answerNineteen = guests.joe.last_name;
console.log(answerNineteen);

// 20. Log to the console the first genre each person listed.
console.log(guests.joe.preferences.favorite_genres[0]);
console.log(guests.sue.preferences.favorite_genres[0]);

// 21. Find the first name of the person sitting next to Joe.
console.log(guests.joe.sitting_next_to);

// 22. Find what meal Sue will be eating.
console.log(guests.sue.preferences.meal);

// 23. Find the date of the first correspondence with Joe.
console.log(guests.joe.correspondence[0].date);

// 24. find the desciption of the last correspondence with Sue.
console.log(guests.sue.correspondence[1].date);

// 25. Create a string that uses variables to read:
//     "As of [date of Joe's last correspondence], [Joe's first name] [Joe's last correspondence description].
var stringOne = "\t" + "As of " + guests.joe.correspondence[1].date + ", " + guests.joe.first_name + " " + guests.joe.correspondence[1].description + ".";

var stringTwo = "He will be eating " +
guests.joe.preferences.meal +
" while listening to " + guests.joe.preferences.favorite_genres[0] +
" and " +
guests.joe.preferences.favorite_genres[1] +
" and sitting next to " +
guests.sue.first_name +
" " +
guests.sue.last_name +
".";
console.log(stringOne + "\n\t" + stringTwo);

// 26. Create an object with both Literal Notation and Constructor.
var me = {
  fname: "Dan",
  lname: "Slanger",
};

var Person = function(fname, lname){
  this.fname = fname;
  this.lname = lname;
};
var meToo = new Person('Dan', 'Slanger');
console.log(meToo);

// 27. Output each item in the following Array to your console:
var bedroom = ['bed', 'nightstand', 'television', 'Channing Tatum']
for ( var i = 0; i < bedroom.length; i++ ){
  console.log(bedroom[i]);
}

// 28. Log to the console numbers 25 to 85, only in increments of 15.
for ( var i = 25; i < 86; i+= 15 ){
  console.log(i);
}

// 29. Write a while loop that logs "This loop is number: ___" to the console 5 times. Use your counter to fill in the blank.
var i = 1;
while( i < 6 ){
  console.log( "This loop is number: " + i );
  i++;
}

// 30. Use a for loop to rewrite #29.
for ( var i = 1; i < 6; i++ ){
  console.log( "This loop is number: " + i );
}

// 31. Prompt a user to pick either a number or a word. Create a script that alerts the user whether they chose a number or a word.
var input = prompt("Enter a number or a word.");
if ( isNaN(parseInt(input)) ){
  alert( "You entered a word." );
} else {
  alert( "You entered a number." );
}

// 32. Use Math.floor and Math.random to roll two six sided dice for two players. Determine which player wins with the higher roll.
var rollGame = function(player1, player2, die){
  var rollOne = Math.floor(Math.random() * die) + 1;
  console.log(player1 + " rolls a " + rollOne);
  var rollTwo = Math.floor(Math.random() * die) + 1;
  console.log(player2 + " rolls a " + rollTwo);
  if ( rollOne === rollTwo ) {
    console.log("It's a tie.");
  } else if ( rollOne > rollTwo ){
    console.log(player1 + " wins by " + (rollOne - rollTwo));
  } else {
    console.log(player2 + " wins by " + (rollTwo - rollOne));
  }
};
rollGame('Tom', 'Jerry', 6);

// 33. Define a function called "divideByThree". It should accept one parameter called "number".

//     The function should divide the number by three and output the answer.
//     If the number is not divisible by three with a remainder of zero, alert the user that their number is invalid.
var divideByThree = function(number){
  if ( number % 3 !== 0 ){
    alert("Your number is invalid. Your number must be evenly divisible by three. Sorry to not tell you that beforehand.");
  } else {
    console.log(number / 3);
  }
};
divideByThree(5);

// 34. Write a function that accepts the following array and separates the people into men and women.
//     HINT: The men are even and the women are odd.
var battingLineUp = ["Henry", "Shirley", "Mark", "Tina", "Max", "Sara", "Eric", "Lisa", "Ralph", "Connie", "Drew"]

var sexism = function(array){
  var mensTeam = [];
  var womensTeam = [];
  for ( var i = 0; i < array.length; i++ ){
    if ( (i + 1) % 2 !== 0 ){
      mensTeam.push(array[i]);
    } else {
      womensTeam.push(array[i]);
    }
  }
  console.log(mensTeam);
  console.log(womensTeam);
};
sexism(battingLineUp);

// 35. Prompt a user to enter their phone number. Write a function that outputs their phone number in a pretty format like:
//     (555) 883-3985
//     Alert the user if they have entered anything except a 10 digit number.
var tel = prompt("What's your number?");
var prettyTel = function (tel){
  if ( !isNaN(tel) && tel.length === 10 ){
    console.log(
      "(" +
      tel.slice(0, 3) +
      ") " +
      tel.slice(3, 6) +
      "-" +
      tel.slice(6, 10)
    );
  } else {
    alert("Sorry, only ten digit numbers allowed.");
  }
};
prettyTel(tel);

// 36. Write a helpful tipping function that accepts two parameters, the bill amount and service score based on a scale of 1-10.
//     The output should be the bill, the tip, and the total amount.
//     Service score 1-3 denotes a 10% tip. 4-6 = 15%, 7-9 = 20%, 10 = 50%.
var tipCalc = function(bill, service){
  var tip;
  if ( service <= 3 ){
    tip = (bill * 0.1).toFixed(2);
  } else if ( service > 3 && service < 7 ){
    tip = (bill * 0.15).toFixed(2);
  } else if ( service > 6 && service < 10 ){
    tip = (bill * 0.2).toFixed(2);
  } else if ( service === 10 ){
    tip = (bill * 0.5).toFixed(2);
  }
  var bill = bill.toFixed(2);
  var total = (parseInt(bill) + parseInt(tip)).toFixed(2);
  console.log("Bill: $" + bill);
  console.log("Tip: $" + tip);
  console.log("Total: $" + total);
};
tipCalc(10, 9);

// 37. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
       var arrayOfSchtuff = ["four", 55, {myDog: "Scranton"}, "fifty-one", 21, 398577729, "3,333"]
var isNumber = function(input){
  if ( isNaN(input) ){
    console.log(input + " is not a number.");
  } else {
    console.log(input + " is a number.");
  }
};
arrayOfSchtuff.map(isNumber);

// 38. Use a function to ask a user for a US Dollar amount and converts it to Canadian Dollars.
var toCanadian = function(){
  var benjamins = prompt("Enter amount in U.S. dollars.");
  var loonies = (benjamins / 0.73).toFixed(2);
  console.log("$" + loonies + " loonies");
};
toCanadian();

// 39. Add the option of converting to Euros. First ask the user which currency they want the conversion for, then ask for the dollar amount.
var exchange = function(){
  var rate = prompt("Are you exchanging for Loonies or Euros?");
  var benjamins = prompt("Enter amount in U.S. dollars.");
  if ( rate.toLowerCase() === 'loonies' ){
    var loonies = (benjamins / 0.73).toFixed(2);
    console.log("$" + loonies + " Loonies");
  } else if ( rate.toLowerCase() === 'euros' ){
    var euros = (benjamins * 1.11).toFixed(2);
    console.log("€" + euros + " Euros");
  } else {
    console.log("Invalid entry. Try again.");
  }

};
exchange();

// 40. Write a function that returns an object of duplicate letters in a string.
//     "Baby Aaron" should return {"b":2, "a":3}
var duplicates = function (string){
  var string = string.toLowerCase();
  var result = {};
  for ( var i = 0; i < string.length; i++ ) {
    var letter = string.charAt(i);
    if ( result[letter] ){
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  for ( var key in result ){
    if ( result[key] === 1 ){
      delete result[key];
    }
  }
  console.log(result);

};
duplicates("Baby Aaron");
// 41. Add the jQuery CDN script to index.html
//DONE
