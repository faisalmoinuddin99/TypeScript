// Array

let list: number[] = [1, 2, 3, 4, 5]

let arrayList: Array<number> = [1, 2, 4, 5, 6] // Genric type

// Tuples 

let nameAge: [string, number] // Declare a tuple type

nameAge = ["faisal", 21] // Initialize it

/* Initialize it incorrectly
nameAge = [10, "hello"]; // Error
Type 'number' is not assignable to type 'string'.
Type 'string' is not assignable to type 'number'
*/

console.log(nameAge[0].substring(2)); // isal
console.log(nameAge[1]); // 21



// enum

enum Color {
    red,
    green,
    blue
}

let color: Color = Color.green
console.log(color); // 1
console.log(Color.red); // 0

console.log(Color[Color.blue]); // blue

// Or, even manually set all the values in the enum:

enum Cars {
    BMW = 1,
    Audi = 2,
    Lambo = 3
}

let car: Cars = Cars.Lambo
console.log(car); // 3
console.log(Cars[Cars.Lambo]); // Lambo




