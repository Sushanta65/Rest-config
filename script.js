// for(let i = 0; i < 10; i++){
//     console.log("Loop working")
// }

// let count = 0;

// while(count < 10) {
//     console.log('Count =', count)
//     count++
// }

// let number = 5

// for(i = 1; i <= 10; i++){
//     console.log(number, "X", i ,"=",  i * number)
// }

// let num = 10;

// while(num < 20){
//     console.log(num)
//     num++
// }

// const evenOrOdd = (number) => {
//     if (number % 2 === 0) {
//         console.log(number, "is an even number")
//     } else {
//         console.log(number, "is an odd number")
//     }
// }

// evenOrOdd(8)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (num of arr) {
//     sum += num;
// }

// console.log("The sum of the array is:", sum);

// const str = "Bangladesh";

// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--){
//     reversed = reversed + str[i]
// }

// console.log(reversed)

// const isPalindrome = (str) => {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   const result = {
//     isPalindrome: str === reversed,
//     value: reversed,
//   };
//   return result;
// };

// console.log(isPalindrome("Bangladesh"));


const isPalindrome = (str) => {
    const makePalindrome = str.toLowerCase().split("").reverse("").join("");

    return {
        isPalindrome: makePalindrome === str.toLowerCase(),
        value: makePalindrome
    }
}

console.log(isPalindrome("Madam"))