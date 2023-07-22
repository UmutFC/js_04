// And operator
// it will be always false because first one is false
console.log(10 > 20 && 30 > 15 && 40 > 30);

// Or operator
// even if first one is false, it is true because second one is true.
console.log(10 > 20 || 30 > 15);

//----------------------

// && - will return first falsy value or the last value
let a;

a = 10 && 20; // non of them is falsy so will return last: 20
a = 10 && 20 && 30; // return: 30
a = 10 && 0 && 30; // first falsy is: 0
a = 10 && "" && 0 && 30; // first falsy is empty string

console.log(a);

// const posts = ["Post One", "Post Two"];
const posts = [];

console.log(posts[0]); // if post is empty it will return : undefined but we dont want to display "undefined" so

// if statement without if
posts.length > 0 && console.log(posts[0]);

// || - will return first truthy value or the last value

let b;

b = 10 || 20; // non of them is falsy so will return first : 10
b = 0 || 20; // first truthy is : 20
b = "" || 0 || undefined; // last falsy is undefined

console.log(b);

// ?? - Returns the right side operand when the left is null or undefined

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30; // will return 0 because 0 is not null or undefined, ?? is not looking for falsy but null or undefined
c = "" ?? 30;

console.log(c);
