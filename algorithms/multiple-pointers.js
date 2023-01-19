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

function countUniqueValues_On(arr) {
    let counter = 0;
    if (!arr.length) return console.log(0);

    let pointer = arr[0];
    for(let i = 1; i < arr.length + 1; i++) {
        if(arr[i] === pointer) {
            pointer = arr[i]
        } else {
            counter ++
            pointer = arr[i]
        }
    }
    return console.log(counter);    
};

// O(1)
function countUniqueValues(arr) {
    let counter = 0;
    if (!arr.length) return console.log(0);
    if (arr.length === 1) return console.log(1);

    let pointer1 = arr[0];

    for(let i = 0; i < arr.length; i++) {
        let pointer2 = arr[i + 1];
        if(pointer1 === pointer2) {
            pointer1 = pointer2;
        } else {
            counter ++
            pointer1 = pointer2
        }
    }
    return console.log(counter);
}

countUniqueValues([ 1 , 1 , 1 , 1 , 1 , 2]) // 2
countUniqueValues([1 , 2 , 3 , 4 , 4 , 4 , 7 , 7 , 12 , 12 , 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4