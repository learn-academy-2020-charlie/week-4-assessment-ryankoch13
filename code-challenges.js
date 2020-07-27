// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

// This one had me stumped for a while and I had to refactor my code several times to deal with issues and contraints with the methods I was using. I can't promise you that the result is a truly random product, from what I've seen on Google there's only a few commonly accepted ways to truly randomize arrays in JavaScript and this is not one of them, but I had a lot of fun putting this logic together and I hope you like it. 

// first I'll need to set up my function and arguments, in this case it will be an array

const randomMinusOne = (arr) => {

    // Since the expected outcome of this function is to actually modify the original array so this function can run multiple times. I was able to refactor this same solution to not modify the original array as well, but since I want to I will go ahead and initialize a new array that is going to take all of the elements directly out of the original one. 

    let newArr = arr.splice(0)

    // // Now I'll set up a shift method to get rid of that first element

    newArr.shift()

    // // I can use while loop to iterate through our local version of the original array, splicing a random element into the original array until the local array is empty
    while (newArr.length > 0) {

        // In the following line I will want to push a random element from newArr, while also cutting it out. I had to add a join method because I guess splice only outputs arrays. 

        arr.push((newArr.splice(Math.floor(Math.random() * newArr.length), 1)).join(""))
    }

    // finally I can return our original array as the output of the function

    return arr
}


console.log(randomMinusOne(collections))
console.log(randomMinusOne(collections))

// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

const sumOfCubes = (array) => {

    // Here I'll want to just initialize a variable called sum that I can add the values to later

    let sum = 0

    // I'm going to use a map method to simply add the cubed amount of each element to our sum variable

    array.map(value => sum += Math.pow(value, 3))

    // Now I can return our sum variable and hopefully it should output our expected result

    return sum
}

// For practice, I decided to try this one using the reduce method as well.

const sumOfCubes2 = (array) => {
    return array.reduce((accumulator, currentValue) => accumulator + Math.pow(currentValue, 3),
    0
    )
}

console.log(sumOfCubes(cubeAndSum1))
console.log(sumOfCubes(cubeAndSum2))
console.log(sumOfCubes2(cubeAndSum1))
console.log(sumOfCubes2(cubeAndSum2))


// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

// Same declarations and everything as the previous few...

const minMax = (arr) => {

    // Here I'm opting to use a reduce method again for finding the min and max of this array. I did some research and it looks like there are several ways to do it, but this way gives me more practice with reduce and supposedly has better run times compared to a spread operator or .apply when dealing with large arrays. 

    let min = arr.reduce((accumulator, currentValue) => Math.min(accumulator, currentValue))

    // Do the same thing as above just with Math.max. Essentially the reduce method is going through each value in the array, looking to see if that value is larger/smaller than the number it is holding onto in the accumulator, and if it is it will overwrite the accumulator. By the end of the array we should have the min/max value.

    let max = arr.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue))

    // Now I'll return the min and max values as a handy little array.

    return [min, max]
}

console.log(minMax(nums1))
console.log(minMax(nums2))



// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

// I'll need to declare my function with an argument of a STRING this time. You think I'd give a senior dev a seizure with that function name? 

const oKaYsPoNgEbOb = (string) => {

    // Now I'll need to split our string into an array so I can work with it easier

    let strArr = string.split("")

    // Here I'll set up a map to comb through each value and index

    spongeArray = strArr.map((value, index) => {

        // Conditional to determine if the index is even or odd, converting the letter to caps or lower depending

        if (index % 2 == 0) {
            return value.toUpperCase()
        } else {
            return value.toLowerCase()
        }
    })

    // Return the joined array as a string

    return spongeArray.join("")
}


console.log(oKaYsPoNgEbOb(testString1))
console.log(oKaYsPoNgEbOb(testString2))

// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
var arr3 = [10, 11, 8, 3, 9, 3]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

// Here I'll need to set up my function with a spread operator in the arguments so that it can accept multiple arrays

const noDupes = (...arr) => {
    
    // Now I'll want to combine any potential arrays that were passed into the function using a concat method. I look up this method after originally trying a map and struggling with it for a while. Essentially it is creating an empty array and concatenating the first level of arrays in our array variable.

    combinedArr= [].concat(...arr)

    // Now I can just run a simple filter function that only passes unique values. I found a clever way to do this online where it essentially looks at each value in the array and determines if that value is at the index of the first time that value shows up in the array. If it is, then it will include the value in our filtered array. 
    
    return combinedArr.filter((value, index) => combinedArr.indexOf(value) == index)
}

console.log(noDupes(arr1, arr2))
console.log(noDupes(arr1, arr2, arr3))