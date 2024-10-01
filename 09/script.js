// high order and callback function
// A function that takes a function as an argument


function add(a, b, cb) {
    
    let result = a + b; 

    cb(result);
}

add(2, 3, (val) => console.log(val));



function add(a, b, cb) {
    
    let result = a + b; 

    return () => console.log(result);
}

let resultFunction = add(2, 4, () => { });

resultFunction();

// callback hell, promises