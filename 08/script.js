

//1. Syntext

// const sayHello = () => {

//     console.log("hey");
// }

// sayHello();



// const addV2 = (a, b) => a + b;


// console.log(addV2(2, 3));

// //2. arguments function is only use in normal function not in array function.

// function addNumbersV2() {

//     ans = ans + arguments[1];
//     return ans;
// }

// const addNumbers = (...nums) =>{

//     console.log(nums);
// }

// addNumbers(2, 3, 5, 7, 3, 5, 3);


// 3. Hoisting

// sayHey();

// function sayHey() {

//     console.log("say heyy");
// }

// const sayHey = () => {

//     console.log("say heyy");
// }


// 4. this keyword

// const obj = {
//     value: 20,
//     myFunction: function() {
//         console.log(this);
//     },
// };

// const obj = {
//     value: 20,
//     myFunction: () => {
//         console.log(this);
//     },
// };

obj.myFunction();

