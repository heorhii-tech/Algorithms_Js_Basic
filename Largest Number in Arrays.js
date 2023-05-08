// Largest Number in Arrays
// Task :
//Return an array consisting of the largest number from each provided sub-array. For simplicity,
// the provided array will contain exactly 4 sub-arrays.
//
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
//
// function largestOfFour(arr) {
//   // You can do this!
//   return arr;
// }
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// //Returns [5,27,39,1001]

// psedocode :
// 1.create a function , accept array,return result
// 2. creat result array
// 3. create  first loop through main array
// 4.split main array to sub arrays
// 5. take first index in sub arrays as let MAX = [0]
// 6. creat second loop in first loop through sub arrays
// 7. search max numbers by comparison
// 8. if index of second loop largest than MAX - reassign max to the greatest number
// 9. push MAX to result

let globalArray = [[4, 5, 1, 3], [13, 27, 18, 26], [32,1135, 37, 39], [1000, 1001,  1]]

function largestNumber (mainArr) {
    let result = [];
    for (let i = 0; i < mainArr.length; i++) {
        newArray = mainArr[i]
        let max = newArray[0]

        for (let j = 0; j < newArray.length; j++) {

            if (newArray[j] > max) {
                max = newArray[j]
                result.push(max)
            }
        }
    }
return result

}
largestNumber(globalArray)
console.log(largestNumber(globalArray))
