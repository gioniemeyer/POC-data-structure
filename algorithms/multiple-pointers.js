/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
Time Complexity - O(n)

Space Complexity - O(n)

Bonus

You must do this with constant or O(1) space and O(n) time.
*/

function countUniqueValues(arr) {
    if (!arr.length) return console.log(0);
    
    let pointer = 0;
    for(let i = 1; i < arr.length + 1; i++) {

        if(arr[i] !== arr[pointer]) pointer ++

        arr[pointer] = arr[i]
    }
    return console.log(pointer);    
};

countUniqueValues([ 1 , 1 , 1 , 1 , 1 , 2]) // 2
countUniqueValues([1 , 2 , 3 , 4 , 4 , 4 , 7 , 7 , 12 , 12 , 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4