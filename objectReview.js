//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

var favoriteThings = {
  band: 'cotton jones',
  food: 'greek',
  person: 'mom',
  book: 'sometimes a great notion',
  movie: 'shutter island',
  holiday: 'thanksgiving'
}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = 'subaru impreza';
favoriteThings.brand = 'patagonia';

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

favoriteThings.food = 'lettuce';

//Now, alert your favorite person, then alert your favorite book.

 alert(favoriteThings.car);

alert(favoriteThings.book);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

for (var key in user) {
  if (user[key] === null || user[key] === undefined || user[key] === 0) {
    delete user[key];
  }
};

//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

user.name = 'Ty Frith';
user.pwHash = 'U+snadjknakjsdna';
user.username = 'srphalot';

//Now console.log your object and make sure it looks right.

console.log(user);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

 var methodCollection = {

 };

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

methodCollection.alertHello = function() {
  alert('Hello');
}; 

methodCollection.logHello = function() {
  console.log('Hello');
};

//Now call your alertHello and logHello methods. 

methodCollection.logHello();
methodCollection.alertHello();



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

var voweler = function (str) {
  var newObj = {};
  var arr = str.split('');
   var a = 0; var e = 0; var iNum = 0; var o = 0; var u = 0;

  for (var i = 0; i < arr.length; i++){
    if (arr[i] === 'a') {
        a++;
        newObj.a = a;
    }
    if (arr[i] === 'e') {
        e++;
        newObj.e = e;
    }
    if (arr[i] === 'i') {
        i++;
        newObj.i = i;
    }
    if (arr[i] === 'o') {
        o++;
        newObj.o = o;
    }

    if (arr[i] === 'u') {
        u++;
        newObj.u = u;
    }


  }

  // for (var i = 0; i < str.length; i++) {
  //   if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
  //     newObj.str[i] = "";
  //   }
  // }
}
























