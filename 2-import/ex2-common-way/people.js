console.log("people module is running:");

const people = ["sara", "mario", "ahmed", "mohamed"];
const ages = [12, 12, 13, 14];
console.log(people);
// module.exports = "hello";
module.exports = {
  people, // shortcut for people : people
  ages,
};

console.log("people module is done.\n");
