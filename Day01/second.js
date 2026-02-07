console.log("Hello ji I am second")

function sum(a,b){
    console.log(a+b);
}

// sum(4,3);

function sub(a,b){
    console.log(a-b);
}

// tum chahte ho vhi first.js se call kru therefore:
// by default sb private hote hai toh bahar se koi bhi use nahi krskta 

// module.exports = sum; // ab bahar se bhi use krskte hai access bahar bhi hai

// console.log(module.exports); // empty object

// jab ek se jyada function export kraane ho jese sum and sub, therefore object bnao
// module.exports = {sum:sum, sub:sub}; // key value dono same hai toh fir 
// 1. ese bhi kr  skta hu
module.exports = {sum,sub};

// 2. ese bhi kr  skta hu jab pta hai ki empty object hai
// module.exports.sum=sum;
// module.exports.sub=sub;

// {sum:sum
//  sub:sub}


