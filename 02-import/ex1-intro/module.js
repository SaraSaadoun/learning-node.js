const xyz = require("./people");
//require :default : returns empty obj
//         can not access var from this file
//         find and run thiss

//id I need to access sth from people.js file:
//      export it from people.js
//      u can get it from xyz
//
// console.log(xyz);
console.log("exported from people module:");
console.log(xyz.people, xyz.ages);
