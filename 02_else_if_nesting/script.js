const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();

console.log(hour);

if (hour < 12) {
  console.log("good morning");
} else if (hour < 18) {
  console.log("good afternoon");
} else {
  console.log("good night");
}

// Nested If

if (hour < 12) {
  console.log("good morning");
  if (hour === 6) {
    console.log("wake up!");
  }
} else if (hour < 18) {
  console.log("good afternoon");
} else {
  console.log("good night");
  if (hour >= 20) {
    console.log("zzzzz...");
  }
}

if (hour >= 7 && hour < 15) {
  console.log("it is work time!");
}

if (hour == 6 || hour == 20) {
  console.log("brush your teeth!");
}
