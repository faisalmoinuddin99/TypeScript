let maybeBool: any = true;
let notBool: number = (<string>maybeBool).length;
console.log(notBool); //should be undefined

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
console.log(strLength); // 16

/*
Type assertion can be performed in the following two
ways:
1. Using angular brackets <>
2. Using the ‘as’ keyword
*/