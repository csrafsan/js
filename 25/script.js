// composition in js

// type 1
// function add(a, b) {

//     return a + b;

    
// }

// function square(val) {
//     return val * val;
// }

// const addResult = add(2, 3);

// console.log(square(addResult));



// Type 2

// function add(a, b) {

//         return a + b;

//     }
    
//     function square(val) {
//         return val * val;
// }
    
// function addTwoandSquare(a, b) {
//     return square(add(a, b));
// }

    
// console.log(addTwoandSquare(2, 3));


// // Type 3

// function add(a, b) {

//     return a + b;

// }

// function add(a, b) {

//     return a * b;

// }

// function square(val) {
//     return val * val;
// }

// function composeTwoFunction(fn1, fn2) {
//     return function (a, b) {
//         return fn2(fn1(a, b));
//     };
    
// }

// const task = composeTwoFunction(multiply, square);


// console.log(task(2, 3));


    
    
// Type 3

function add(a, b) {

    return a + b;

}

function add(args) {

    return args[0] * args[1];

}

function square(val) {
    return val * val;
}

function composeTwoFunction(fn1, fn2) {
    return function (a, b) {
        return fn2(fn1(a, b));
    };
    
}

const c2f = (fn1, f2) => (a, b) => f2(fn1(a, b)); 
function compose(...fns) {
    return function (...values) {
        return fns.reduceRight((a, b) => b(a), values)
    };
}

// converting in ES6

const composeAll =
    (...fns) =>
        (...val) =>
            fns.reduce((a, b) => b(a), val);


const task = c2f(multiply, square, (val) => val+2);


console.log(task(2,3));
    
    
    
