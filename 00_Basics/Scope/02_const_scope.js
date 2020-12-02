//
//
// var declaration;
// console.log(declaration) // undefined
// // In JavaScript, variables are initialized with the value of undefined when
// // they are created
//
//
// // Scope defines where variables and functions are accessible inside of your
// // program. In JavaScript, there are two kinds of scope - global scope, and
// // function scope. According to the official spec,
//
//
// function getDate () {
//     var date = new Date();
//     function formatDate () {
//         return date.toDateString().slice(4);
//     }
//     return formatDate();
// }
// getDate();
// try {
//     console.log(date);
// } catch (e) {
//     // Reference Error
// }
