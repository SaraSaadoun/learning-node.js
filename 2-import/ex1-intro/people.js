console.log("people module is running:");
const people = ["sara", "mario", "ahmed", "mohamed"];
const ages = [12, 12, 13, 14];
console.log(people);
// module.exports = "hello";

//export people and ages arrays to module.js file (if we use require)
module.exports = {
  people, // shortcut for people : people if key & val of the same name
  ages,
};
console.log("people module is done.\n");
