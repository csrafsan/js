const students = ['rafsan', 'rony', 'mehadi'];

students[1] = 'shakib';

//console.log(students);

students.push(1, 1.4, true, 'hasan', 'rana', 'raju', {name : "Rafsan"},'🚀');

console.log(students);

// arrayes in js are hetroginous means different type of data would be added in an array.

console.log(students.indexOf("hasan"));

students.pop();

console.log(students);

students.reverse();

console.log(students);

// .map, .reduce, .suplies, all high order functions that arrayes may avilable hay.

