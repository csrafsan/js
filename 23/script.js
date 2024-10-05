//closure calling function in function and private variable
const myName = document.getElementById("my-name");
const btn = document.getElementById("my-btn");

function makeCounter(){
    let count = 1;
    function increment() {
        // console.log(count++);
         myName.innerText = `${count++}`;
    }
    return increment;
}

const counter1 = makeCounter();

// counter1()
// counter1()
// counter1()
// counter1()

btn = document.addEventListener("click", counter1);




















// const myName = document.getElementById("my-name");
// const btn = document.getElementById("my-btn");

// function makeTextSizer(size) {

//     function changeSize()  {
//             myName.style.fontSize = `${size}px`;
//         }

//         return changeSize;
//     }


// const size12 = makeTextSizer(12);
// const size22 = makeTextSizer(22);
// const size62 = makeTextSizer(62);



// btn.addEventListener("click", size62);






// function adder(num) {

//     function add(b) {
//         console.log(num + b);
//     }

//     return add;
// }

// const addTo5 = adder(5);

// addTo5(2);
// addTo5(5);