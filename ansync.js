function register() {
  setTimeout(() => {
    console.log("register here");
  }, 4000);
}
function login() {
  setTimeout(() => {
    console.log("login here");
  }, 6000);
}
function getData() {
  setTimeout(() => {
    console.log("fetch data");
  }, 8000);
}
function displayData() {
  setTimeout(() => {
    console.log("display data");
  }, 7000);
}

register();
login();
getData();
displayData();
console.log("call another application");
