function f(shouldInitialize) {
 if (shouldInitialize) {
     var x = 10; 
  }
 return x; 
}
console.log("f(true) :" + f(true)); // returns '10' 
console.log("f(false) :" + f(false)); // returns 'undefined'