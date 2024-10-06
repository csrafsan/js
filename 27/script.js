// IIFE - Immediately Invoked Function Expression
// private variable save global variable space
//--------------------------
// Avoid polluting the global namespace

// (() => {
//     // some initiation code
//     let firstVariable;
//     let secondVariable;
//   })();

  
  // firstVariable and secondVariable will be discarded after the function is executed.
  
//--------------------------
// (function add(a, b) {
//     console.log(a + b);
// })(2, 3);

// (() => console.log('I am ES6 with  IIFE'))();

// const value = (() => 100)();

// console.log(value);

// (async () => {
//     //..
// })();

// const data = (async () => await fetch())(); //promise
//------------------------------------
//example of closure and iife 
// const rafsan = (function (initialBalance) {
//     let balance = initialBalance;
//     function withdraw(amt){
//         if (amt > balance) {
//             return "Are you kidding me";
//         } else
//         {
//             balance -= amt;
//             return balance;
//          }
// }
// return { withdraw };
    
// }) (100);


// console.log(rafsan.withdraw(20));
// console.log(rafsan.withdraw(20));
// console.log(rafsan.withdraw(20));
// console.log(rafsan.withdraw(20));
// console.log(rafsan.withdraw(20));
// console.log(rafsan.withdraw(20));
//-----------------------------------------------

// const makeWithdraw = (balance) =>
//     ((copyBalance) => {
//       let balance = copyBalance; // This variable is private
//       const doBadThings = () => {
//         console.log("I will do bad things with your money");
//       };
//       doBadThings();
//       return {
//         withdraw(amount) {
//           if (balance >= amount) {
//             balance -= amount;
//             return balance;
//           }
//           return "Insufficient money";
//         },
//       };
//     })(balance);
  
//   const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
//   console.log(firstAccount.balance); // undefined
//   console.log(firstAccount.withdraw(20)); // 80
//   console.log(firstAccount.withdraw(30)); // 50
//   console.log(firstAccount.doBadThings); // undefined; this method is private
//   const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
//   console.log(secondAccount.withdraw(30)); // "Insufficient money"
//   console.log(secondAccount.withdraw(20)); // 0
  //---------------------------------------------