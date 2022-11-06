

  a()
  b()
  setInterval(c,500)       //call back function  - asynchronous in a synchronous language like js: this call back function helps in achieving asynchronous 
  function a (){
    console.log("a")
}
function b (){
    console.log("b")
}

function c (){
    console.log("c")
}