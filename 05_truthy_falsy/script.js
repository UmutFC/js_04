const email = "test@test.com";

// even if you pass variable different from boolean character, into the if statement, JavaScript will coerce the type of value as boolean type to say "true"
if (email) {
  console.log("You passed in an email");
}

console.log(Boolean(email)); // return true

// Falsy Values:
// - false
// - 0
// - "" or '' (empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function() {} (empty function)

//----------------------------

// Truthy and falsy caveats
const children = 0;

// if (children) { // will return false if there is 0 children. so we change the statement as !== undefined, !isNaN -> it is not non number, etc.
// if (children !== undefined) {
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log("Please enter number of children");
}

// Checking for empty arrays
// const posts = ["Post One", "Post Two"];
const posts = []; // it will not return the alert of empty post because empty array is true in if statement

// if (posts) {
if (posts.length > 0) {
  // you can check array length instead of array
  console.log("List Posts");
} else {
  console.log("No Posts");
}

// Checking for empty objects

// const user = {
//   name: "Furkan",
// };
const user = {};

// if (user) {
if (Object.keys(user).length > 0) {
  // you can use Object.keys which returns array of object key values then check the length of it for if statement
  console.log("List User");
} else {
  console.log("No User");
}

// Loose Equality (==)
// this will return true
console.log(false == 0);
console.log("" == 0);
console.log(null == undefined);

// so you should use === instead of == because === checks the type as well
console.log(false === 0);
console.log("" === 0);
console.log(null === undefined);
