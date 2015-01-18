/* Declare and Define the functions here that will make the function calls below work properly */
var first = function(array, callback){
 var fristName = array[0];
 callback(firstName);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var last = function(array, callback) {
  var lastName = array[array.length - 1]
  callback(lastName);
}



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.
var contains = function(name, array, callback) {
  var result;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === name) {
      result = true;
    } else {
      result = false;
    }
  }
    callback(result);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
// var map = function(array, callback) {
//   for (var i = 0; i < array.length; i++) {
//     array[i] = array[i] * 2;
//   }
//   callback(array);
// }

var map = function(array, callback) {          // creates map function with parameters of array and callback function
  for (var i = 0; i < array.length; i++) {     // loops through the array passed, in this case "numbers"
   array[i] = callback(array[i]);              // takes value at index in the array, and sets it equal to the callback of the value at that index
 }
 return array;
};



var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var uniq = function(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if(i !== array.indexOf(array[i])) {
      array.splice(i, 1);
      i--;
    }
  }
  callback(array);
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


var each = function(array, callback) {        // create function each which has parameters of an array and callback 
  for (var i = 0; i < array.length; i++) {    // loop through the array argument 
      callback(array[i], i);                  // passes the value itself "array[i]" and the index of that item. i.e. i = 0, i = 1, i = 2 etc.
  }
};



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});






/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var getUserById = function(id ,array, callback) {   // defines getUserById function with parameters of (id, array, callback)
  for (var i = 0; i < array.length; i++) {          // loops through the array passed in as argument
    if (array[i].id === id) {                       // if the id of the of value at array[i] is equal to the id passed in as the id argument
      callback(array[i]);                           // then pass the callback function the argument of that particular array[i]
      break;                                        //in this case getUserById is passed ('16t', users, and function(user). 
    }
  }
}

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

// var find = function(array, callback) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       callback(array[i]);
//     }
//   }
// }

var find = function(array, callback) {           //defines find fucntion with parameters of an array and callback function
  for (var i = 0; i < array.length; i++) {       // loops through the array passed in as array argument
    if (callback(array[i]) === true) {           // if the callback of array[i] (i.e. array[i] % 2 == 0) is true
      return array[i];                            // return array[i]
    }
  }
}



//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
})











