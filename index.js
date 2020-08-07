'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: This method returns the first argument it receives.
 *
 * @param: {*}
 * @returns: {*} Data type, unchanged
 *
 * Edge Cases: n/a
 *
 * Examples:
 * var object = { 'a': 1 };
 * console.log(_.identity(object) === object); // => true
 */

function identity(value) { //create identity function
    //return the ouptut value
    return value;
}

module.exports.identity = identity; //export line

/**
 * typeOf: Takes a value and defines the data type
 *
 * @param: {*} Accepts Array, Number, Boolean, String, Undefined, Null,
 * anything: any value.
 *
 * @returns: {String} Return the typeOf <value> as a string
 *  Types are one of:
 *      -'string'
 *      - 'array'
 *      - 'object'
 *      - 'undefined'
 *      - 'number'
 *      - 'null'
 *      - 'function'
 *
 * Edge Cases: n/a
 *
 * Examples:
 * _.typeOf(1023) -> 'number'
 * _.typeOf('Ada Lovelace') -> 'string'
 * _.typeOf(['cat', 'dog', 'fish']) -> 'object'
 */

function typeOf(value) {  //create a typeOf function with a value parameter
    let type = typeof(value); //create type variable, assign to typeOf(value)

    if (type == 'object') {     //create if statement, searching for objects
        if (Array.isArray(value)) { //create nested if statement to vet arrays.
            type = 'array';         //assign new type if value is array, w array
            return type;            //return new type, array
        } else if (value === null) { //else if to vet for null values
            type = 'null';          //assign new type, null
            return type;            //return new type, null
        }
    }; return type;             //all other values return their value.
                        //This captures string, numbers, booleans, objects, etc.
}

module.exports.typeOf = typeOf; //export line



/**
 * each: Designed to loop over a collection, Array or Object, and applies the
 * action Function to each value in the collection.
 *
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the
 * collection
 *
 * @returns: {no data} Each iterates over collections. Each will not return data.
 *
 * Edge Cases: n/a
 *
 * Examples:
 *   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
 *      -> should log "a" "b" "c" to the console
 */

//create each function, with collection (array or object) and action(function)
//parameters
function each(collection, action) {
    if(Array.isArray(collection)) { //vet if collection item is an array
        for(var i = 0; i < collection.length; i++) { //for loop to vet array
          //use action to vet array indexes for items.
            action(collection[i], i, collection);
        }
    } else {                            //iterates over objects
        for (var key in collection) {   //for in loop discovers key/value pairs
          //use action to vet object key/value pairs
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;  //export line

/**
 * filter: Designed to filter values in a collection based on a test.
 * Takes a collection, an Array, and passes each value
 * in the collection through a test Function. The test Function returns
 * true if the value passes the test, false otherwise. Values that pass
 * the test are collected and returned in an output Array.
 *
 * @param {Array} collection: The collection to filter.
 * @param {Function} action:  The Function to be applied to each value in
 * the collection. The test Function must return a Boolean based on some
 * logic which tests the value given to it. The test function is called on
 * each element, the index, and the entire collection
 *
 * @returns {Array}: An Array containing the filtered collection values.
 * The Array will contain only the values that passed the test.
 * Usage:
 *
 * Edge Cases: If function returns something other than true or false, return
 *  newArray.
 *
 * Examples:
 *      const letters = ['a', 'b', 'b', 'c'];
 *      const onlyBs = filter(letters, function(letter) {
 *          return letter === 'b';
 *      });
 *      console.log(onlyBs); // -> ['b', 'b']
 */

function filter(array, action) { //create filter function
    //create a new array
    let newArray = [];  //create new array to hold returning elements
    //call _.each on each element, index, and array
    //synax for forEach
    //array.forEach(function(currentValue, index, arr), thisValue)
    //array._.each(function(element, index, array))
    //run anonymous funciton
    each (array, function(element, index, array) { //use same syntax as forEach
        //loop through to locate the element, index, and array must be true
        if (action(element, index, array)) { //use action(function) to vet elements`
            //push to element to the newArray
            newArray.push(element);
        }

    });
return newArray; //return array
}

module.exports.filter = filter; //export line


/**
 * first: Return the Nth first elements based on the argument given to the
 *  number. The first two actions vet the array and number parameters if they
 *  are arrays are numbers.  If the parameters are an array and a number, then
 *  the number will pull the array index and return the value at the index. If
 *  not an array, create an empty array.  If not a number, return the first
 *  element of the array. If new array does not exist, return the first index
 *  of array parameter.
 *
 * @param: {Array} An array.
 * @param: {Number} A number.
 *
 *  Edge Cases:
 *      1. return an empty array if the number is negative.
 *      2. If the number is greater than the array length, return array
 *
 *
 * @returns: {Nth of the elements in an array}
 *
 * Examples:
 *   _.first("ponies", 1) -> []
 *   _.first(["a", "b", "c"], "ponies") -> "a"
 *   _.first(["a", "b", "c"], 1) -> "a"
 *   _.first(["a", "b", "c"], 2) -> ["a", "b"]
 */

//create a first function with array and number parameters
function first(array, number) {
  //vet array parameter with Array.isArray to determine if it is an array
    if (!Array.isArray(array) || number <= 0) {
        return []; //return empty array, per instructions
    } //create newArray to capture values if array parameter isn't an array
    let newArray = [];
    //create loop to return index zero if not a number
     for (let i = 0; i < array.length && i < number; i++) {
            newArray.push(array[i]); //grab first element of array if not number
        }
    //if new array does not exist, return the first index of original array
    if (newArray.length === 0) {
        newArray = array[0];
   }
    return newArray;  //return array, last resort
}
module.exports.first = first; //export line


/**
 * last: Returns last Nth elements of an array based on the number's argument.
 *  The first two actions vet the array and number parameters if they are arrays
 *  are numbers.  If the parameters are an array and a number, then the number
 *  will pull the array index and return the value at the index. If not an
 *  array, create an empty array.  If not a number, return the last element of
 *  the array. If new array does not exist, return the last index of array
 *  parameter.
 *
 * @param: {Array} An array.
 * @param: {Number} A number.
 *
 * @returns: {N number of elements in an array.}
 *
 * Edge Cases:
 *      1. Return an empty array if the number is negative.
 *      2. If the number is greater than the array length, return array
 *
 *
 * Examples:
 *   _.last("ponies", 2) -> []
 *   _.last(["a", "b", "c"], "ponies") -> "c"
 *   _.last(["a", "b", "c"], 1) -> "c"
 *   _.last(["a", "b", "c"], 2) -> ["b", "c"]
 */


 function last (array, number) { //create last function
    let i;                          //create i variable
//vet array parameter with Array.isArray to determine if it is an array
    if (!Array.isArray(array) || number <= 0) {
        return [];                    //return empty array, per instructions
        //vet if number is a number
    } else if (number === undefined || typeof number !== 'number') {
      //number isn't a number, return the last element of an array
        return array[array.length - 1];
        //edge case if number is bigger than array.length value
    } else if (number > array.length) {
        return array; //return array
    } else {
        let newArray = []; //return empty, new array
//create loop start point at first number index.  stop at array length.
//increment up by 1 index at a time.
    for (let i = array.length - number; i < array.length; i++) {
        newArray.push(array[i]); //return the last element of the array

    }   return newArray; //return new array, last resort

    }
}

 module.exports.last = last; //export line


/**
 *indexOf: Returns index number where the value's argument first appears in
 *  the array.
 *
 * @param: {Array} An array
 * @param: {String} A value, which is a string data type.
 *
 * @returns: {Number} Returns a number either the index position or -1 if
 *  not present.
 *
 * Edge Cases:
 *      1. If array has multiple occurances of value, return numeric index
 *          position.
 *      2. If value isn't in array, return -1.
 *
 *
 * Examples:
 *   _.indexOf(["a","b","c"], "c") -> 2
 *   _.indexOf(["a","b","c"], "d") -> -1
 */

//create indexOf function, with array and value as parameters
 function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) { //create a loop
            if(array[i] === value) {         //detect the value inside the array
                return i;                    //return the index
            }
    }
    return -1                               //return -1 if value not located
}

module.exports.indexOf = indexOf; //export line


/**
 * contains: Cycles through an array to see if it contains a value.
 * Return true of <array> contains <value>.  Return false if not.
 *
 * @param: {Array} An array of various data types
 *
 * @param: {*} A value of any data type
 *
 * @returns: {true, false}Boolean true/false if the value argument is in the
 *  array object with the updated information.
 *
 * Edge Cases:
 *      1. Use === strict equality to vet the array indexes to the values
 *      2. If no value is given, return false.
 *
 * Examples:
 *   _.contains([1,"two", 3.14], "two") -> true
 *
 */

function contains (array, value) { //create _.contains function
    for (let i = 0; i < array.length; i++) {  //create loop for array parameter
        if (array[i] === value) {             //detect valus inside of array
            return true;                      //return true if value is detected
        }
    }

    return false;                       //return false if value is not detected

}


module.exports.contains = contains; //export line



/**
 * unique: Loop through the array and remove any duplicate values.
 *
 * @param: {Array} An array with duplicate values
 * @returns: {Array} An array without duplicate values
 *
 * Edge Cases: n/a
 *
 * Examples:
 *   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
 */

 function unique(array) {

  const newArray = [];  //create new array to hold non-duplicate entries
   for (let i = 0; i < array.length; i++) {  //create loop to pass through array
//if the newArray does not inlcude the old array item and the indexof items do
//not equal -1 (duplicate)
      if (!newArray.includes(array[i]) && (indexOf(array, array[i]) !== -1)){
          newArray.push(array[i]); //push the value to the new array
      }
  }
  return newArray;  //return the new array
}

 module.exports.unique = unique; //export line


/**
 * reject: It iterates through an array and logical function test is acted on
 * arguments. If the test returns false, the elements are pushed into an array.
 *
 * @param: {Array}
 *
 * @param: {Function} action: The test (action) function is called on each
 * element, the index, and the entire collection
 *
 * @returns: {Array} An array of false arguments
 *
 * Edge Cases: n/a
 *
 * Examples:
 *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
 */

function reject(array, action) { //create reject function

    let newArray = [];              //create new array to hold rejected elements
    //leverage filter function to remove elements
        filter (array, function(element, index, array) {
    //use logical inverse of filter, false value
         if (action(element, index, array) === false) {
    //push rejected elements to new array
             newArray.push(element);
         }
     });
    return newArray; //return new array with rejected elements
}

module.exports.reject = reject; //export line

/**
 * partition: Iterates through an array with a function acting on each element
 * in the array.
 *
 * @param: {Array}
 * @param: {Function} action:
 *
 * @returns: {truthy, falsy} Returns the truthy and falsy values into two
 * subarrays in a larger array. The test (action) function is called on
 * each element, the index, and the entire collection
 *
 * Edge Cases: Return an array of arrays.
 *
 *Examples:
 *   _.partition([1,2,3,4,5], function(element,index,arr){
 *     return element % 2 === 0;
 *   }); -> [[2,4],[1,3,5]]
 *  }
 */

function partition(array, action) { //create partition container

    let newArray = [];  //create new array container

    //use _.filter function to create a truthy set of values
    let truthyArr = filter(array, function(element, index, array) {
        return action(element, index, array);  //return new array, truthy items
    });
    //use _.reject function to create a falsy set of values
    let falsyArr = reject(array, function(element, index, array) {
      //return new array, falsy items
       return action(element, index, array);
    });
    newArray[0] = truthyArr;  //truthy sub-array, index zero location
    newArray[1] = falsyArr;   //falsy sub-array, index one location
    return newArray;        //return new array with new values
};


module.exports.partition = partition; //export line

/**
 * map: A function is called upon each element in a collection and return
 * value of each function call will be in a new array
 *
 * @param: {Array or Object} A collection
 * @param: {Function} action: A function
 *
 * @returns: {Array} An array with the function elements
 *
 * Edge Cases: n/a
 *
 * * Examples:
 *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
 */

//create map function with collection and function as parameters
function map (collection, action) {
    let newArray = [];  //create new array for output
//calling each function for collection, return index and elements if array.
//return key/value pairs if object
    each(collection, function(element, index, collection) {
//pushing func/action parameter function results to the newArray
        newArray.push(action(element, index, collection));
    });

    return newArray; //step 3, return newArray.
}


module.exports.map = map; //export line


/**
 * pluck: Cycles through an object to see if a given property is in the objects,
 * in the array. If the key exists, values are pushed into an array.
 *
 * @param: {An array of objects}
 *
 * @param: {String} String with a property key.
 *
 * @returns: {Array} An array containing values of the identical keys.
 *
 * Edge Cases: n/a
 *
 * Examples:
 *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
 */


//create pluck function with array and string (element (property)) as parameters
function pluck (array, string) {
    let newArray = [];  //create newArray to hold retrieved items
    //use map function to pluck desired properties
    newArray = (array, function(element, index, array) {
    //return all properties in array of object with bracket notation
        return array[index][string];
    });
    return newArray;  //return newArray
}

module.exports.pluck = pluck; //export line




/**
 * every: A function will call upon each element in the collection and if all of
 *  the returning values are true, true will be returned.  If one of the
 *  elements are false, false will be returned. Empty arrays will return true
 *  after a function call. If no function callback exists, return false.
 *
 * @param: {Collection} A collection.
 *
 * @param: {Function} action: A function.
 *
 * @returns: {true, false} Boolean true or false.
 *
 * Edge Cases:
 *      1. If the function doesn't return a boolean, return false flag.
 *      2. If the function is not given, return false flag.
 *
 * Examples:
 *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
 *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
 */

//create every function with parameters collection and function
function every (collection, action) {
    let flag = true; //set variable flag true, if every element is true

//use each function to vet arrays and objects
    each(collection, function(element, index, collection) {
      //vet func/action parameter for function
        if(typeof action === 'function' || action !== undefined) {
          //if function returns one element false, flag false
            if (action(element, index, collection) === false) {
                flag = false;  //flag false
        }
    } else {                //else statement
        if (element === false) { //if one element false, flag false
            flag = false;  //flag false
        }
    }

    });
    return flag;  //return false
};


module.exports.every = every; //export line


/**
 * some: A function will call upon each element in the collection.  If all of
 *  the returing values are true, true will be returned.  If one of the elements
 *  returns true, true will be returned. Empty arrays will return false after a
 *  function call. If no function callback exists, return true.
 *
 * @param: {Array or Object} A collection.
 *
 * @param: {Function} action: A function.
 *
 * @returns: {true, false} Boolean value, true or false
 *
 * Edge Cases:
 *      1. If the function doesn't return a boolean, return false flag.
 *      2. If the function is not given, return false flag.
 *
 *
 * Examples:
 *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
 *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
 */

//create some function with collection and function parameters
function some (collection, action) {
    let flag = false;  //set a flag variable
//use each function to loop over array or object elements/indexes
    each(collection, function(element, index, collection) {
      //if statement vetting if function, or func/action parameter is function
        if (typeof action === 'function' || action !== undefined){
        //if func/action parameter includes at least one item, flag true
            if (action(element, index, collection) === true) {
                flag = true; //flag true if collection has at least one item
            }
        } else {
            if (element === true) { //flag true if collection has one element.
                flag = true; //flag true
            }
        }

    });
    return flag;  //return flag
}

module.exports.some = some; //export line

/**
 * reduce: Calls a function for every element passing the arguments:
 *  previousResults, element; index.  And uses the return value of the function
 *  as the 'previous result'for the next iteration and seed as the first
 *  'previous value' will be the first index value of the array.  After the
 *  last iteration, the return value of the final function call will be
 *  returned.  If seed is undefined, assign the seed the value of the result.
 *
 * @param: {Array} An array.
 *
 * @param: {Function} action: A function.
 *
 * @param: {*} A seed.  The seed could be an empty space, empty array literal,
 * empty object literal, string, number, etc.
 *
 * @returns: {Number, Array} A number or an array representing the final
 *  function call of the array.
 *
 *
 * Edge Cases:
 *   1) If seed is undefined, then assign seed the value of result
 *
 * Examples:
 *   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex)
 *  { return previousSum + currentValue }, 0) -> 6
 *
 */

//create reduce function with array, func, and seed as parameters
function reduce (array, action, seed) {
let result; //create variable to represent result
//if seed is undefined, then assign seed the value of result
if(seed !== undefined) {
	result = seed;
  //use each function to vet arrays and objects
	each(array, function(element, index, array) {
    //assign result to function parameter
		result = action(result, element, index);
	});
} else { //no seed given
	result = array[0];  //set as first value of array
//start looping through array starting at the 1 index
// step 5, return value of the final function call, assign to result
	for (let index = 1; index <= array.length -1; index++)  {
    //assign result to function result and array index
	result = action(result, array[index], index);
    }

    }
    return result;  //return result

};


module.exports.reduce = reduce; //export line


/**
 * extend: Updates the first object's key/value pairs with key/value pairs not
 * discovered.
 *
 * @param: {object1}
 *
 * @param: {object2, possibly more objects}
 *
 * @returns: {object1 with unique values from object2, or multiple objects.}
 *
 *
 * Edge Cases:
 *      1. Unique key/values from comparison objects are imported without
 *          changes.
 *      2. Object1's values could be overwritten by object2's keyvalue pairs
 *          if the keys in both objects match.
 *
 * Examples:
 *   var data = {a:"one"};
 *   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
 *   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
 */

//create extend function, objects = object2 (or more) parameters. spread syntax
//(...) permits multiple objects and splits objects into arrays.
function extend (object1, ...objects) {
    //let to create variable keys. for loop to vet the objects array
    for (let i = 0; i < objects.length; i++) {
          console.log(i);  //printing 0
        for (let keys in objects[i]) {  //for in loop to vet object1
          //assign object1[keys] to object1[i][keys]
            object1[keys] = objects[i][keys];
        }
    }
    return object1;  //return object1 with unique values from ...objects
}

console.log(extend({a: 'one'}, {b: 'two'}));



module.exports.extend = extend; //export line
