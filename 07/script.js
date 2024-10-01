//function

// function sayHello() {

//     return '11' * 2 ;

// }

// let c = sayHello();

// console.log(c);


// sayHello();
// sayHello();
// sayHello();

// function mul(a, b) {
    
//     return a * b;

// }

// let a = mul(5, 6);

// console.log(a);



// function addNumber(){
    
//     let ans = 0;

//     for (let i = 0; i < arguments.length; i++){

//         ans =+ arguments[i]; // or spread operator
//     }

//     return ans;

// }

// let sum = addNumber(10, 22, 31, 42, 55);

// console.log(sum);


function  addNumberV2(...num){
        let ans = 0;

        for (let i = 0; i < num.length; i++){
    
            ans = ans + num[i]; // or spread operator
        }
    
        return ans;


}

let result = addNumberV2(2, 3, 4, 5);

console.log(result);

