const {sum,sub} = require("./second")

// const sum = require("./second")

// require("./second") // phele ese krte tha


// ============ye second.js ka code idhr IIFE KI TEHRA AYEGA =========
// console.log("Hello ji I am second")

// function sum(a,b){
//     console.log(a+b);
// }
// private ki tehra aaya hoga idhr
// Behind the scene ============================
// (function (){
//     console.log("Hello ji I am second")

//     function sum(a,b){
//         console.log(a+b);
//     }

//     sum(4,3);
// })()

// ===========================================
sum(3,4)
sub(7,8)
console.log("Hello I am first");

// isko hum bolte hai : CJS - Common JS module
// I need second.js code in my first.js file
// first.js and second.js is also called Modules.