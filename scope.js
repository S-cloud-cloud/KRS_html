/*function a(){
    var b=10;
    c()                              // local scope of c : this window
                                      // lexical scope of c : closure(a): gives value of b = 10;
                                      //
    function c(){
        console.log(b);
    }
 
}

a();*/



/*function a(){
    console.log(b);    //prints 10 
}
var b =10;   //globaly defined
a();*/

/*function a(){
    var b = 10;
    c()
    function c(){
    console.log(b);  }  //prints 10 
}
var b =10;   //globaly defined
a();*/

function a(){    //a is the parent of c //  c lexicaly(in order hiarchy ) points to it's parent a : a's lexical enviroment is gec and gec's lexical environment is null 
    var b = 10;
    c()
    function c(){
    console.log(b);  }  //prints 10 
}
console.log(b)   //globaly defined
a();

