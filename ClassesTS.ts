class Greeting {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    greet():string{
        return "Hello, " + this.name;
    }
}
class Hi extends Greeting{
    sayHi(){
        console.log("Hi there!");
    }
}
let greeter = new Hi("Phillip");
console.log(greeter.greet());
greeter.sayHi();
