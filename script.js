


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


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (num of arr) {
    sum += num;
}

console.log("The sum of the array is:", sum);