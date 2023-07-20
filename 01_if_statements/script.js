if (true) {
  console.log("true");
}
if (false) {
  console.log("False");
}

const x = 10;
const y = 5;

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is NOT equal to ${y}`);
}

if (x !== y) {
  //   const z = 20; // error for console log out of the statement
  //   let z = 20; // error for console log out of the statement
  var z = 20; // var is not block level scope its function scope
  console.log(`${z} is 20`);
}

console.log(z);

// Shorthand If

// if (x >= y) console.log("true");
if (x >= y)
  console.log("true"),
    console.log("this is true"); // also can do multiple lines
else console.log("false");
