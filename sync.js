function register() {
  waitDealy(10000);
  console.log("Register here");
}
function login() {
  waitDealy(5000);
  console.log("Login here");
}
function getData() {
  waitDealy(4000);
  console.log("Data here");
}
function displayData() {
  waitDealy(6000);
  console.log("Display here");
}
function waitDealy(delay) {
  const e = Date.now() + delay;
  while (Date.now() < e) {}
}

register();
login();
getData();
displayData();
console.log("Call another Application");
