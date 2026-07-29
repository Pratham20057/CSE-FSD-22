function register() {
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
         console.log("register here");
         resolve();
       }, 4000);
       
    })
 
}
function login() {
    return new Promise((resolve,reject)=>{
 setTimeout(() => {
   console.log("login here");
   resolve();
 }, 6000);
    })
  
}
function getData() {
    return new Promise((resolve,reject)=>{
setTimeout(() => {
  console.log("fetch data");
  resolve();
}, 8000);
    })
  
}
function displayData() {
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
         console.log("display data");
         resolve();
       }, 7000);

    })
  
}

register()
.then(login)
.then(getData)
.then(displayData)
.catch(console.error());
console.log("call another application");
