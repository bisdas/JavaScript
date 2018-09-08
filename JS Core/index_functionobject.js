function sayHello(){
    console.log('Hello')
  }
  sayHello() // FunctionObject.call() //sayHello.call()->
  sayHello.call()//->stack frame
  console.log(sayHello);
  const hi=new sayHello();
  console.log(hi);