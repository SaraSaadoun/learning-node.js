//The global object
//The global obj of the browser is window
//we can use func of window obj directly inside the browser like setTimeout
//   call setTimout directly without needing to explicitly include window obj (window.setTimout)

//in node, the global obj is "global"

// console.log(global);

//global also contians setTimeout, ...
//so in node you needn't have to explicitly type global.sth

//global.setTimeout
setTimeout(() => {
  console.log("sara");
  clearInterval(int); //end int
}, 3000);

const int = setInterval(() => {
  console.log("intervallll");
}, 1000); //keeps running the func every 1 sec

console.log(__dirname); // full absolute path of curr dir
console.log(__filename); // same as above in addition to the curr file name as well

// console.log(document.querySelector); // ReferenceError: document is not defined
//some func in window obj we can not access like (DOM methods)
