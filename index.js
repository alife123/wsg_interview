

// Given an array of integers, return the value in the array that appears the greatest number of times
let arr = [8,100,5,-100,7,2,8,9,6,9,8];

// object declared to later check the key and value of the numbers occuring frequently
const charObj = {};

// maximum times the number appears in the array
let frequency = 0;

// the largest number in the array
let maxInt = 0;

// function will return the largest occurring number
function getGreatestOccurence(array) {
    
    // forEach will iterate through array
    array.forEach(function(num) {
        // since there is nothing in the object at first, it will add one to the zero
        if(charObj[num]) {
            charObj[num]++;
        } else {
            // assign a 1 if it only appears once 
            charObj[num] = 1;
        }
    });
    
    // iterate through the object with the keys and values
    for(let num in charObj) {
        // if number appears more than frequency, set frequency to that number
        if(charObj[num] > frequency) {
            //once frequency gets the object value, the number inside object is the greatest occuring
            frequency = charObj[num];
            maxInt = num;
        } 
    }
    return maxInt;
}

// run using node with the file name and the output should show highest recurring in array
console.log(getGreatestOccurence(arr));