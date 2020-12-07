// Array
var list = [1, 2, 3, 4, 5];
var arrayList = [1, 2, 4, 5, 6]; // Genric type
// Tuples 
var nameAge; // Declare a tuple type
nameAge = ["faisal", 21]; // Initialize it
/* Initialize it incorrectly
nameAge = [10, "hello"]; // Error
Type 'number' is not assignable to type 'string'.
Type 'string' is not assignable to type 'number'
*/
console.log(nameAge[0].substring(2)); // isal
console.log(nameAge[1]); // 21
// enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var color = Color.green;
console.log(color); // 1
console.log(Color.red); // 0
console.log(Color[Color.blue]); // blue
// Or, even manually set all the values in the enum:
var Cars;
(function (Cars) {
    Cars[Cars["BMW"] = 1] = "BMW";
    Cars[Cars["Audi"] = 2] = "Audi";
    Cars[Cars["Lambo"] = 3] = "Lambo";
})(Cars || (Cars = {}));
var car = Cars.Lambo;
console.log(car); // 3
console.log(Cars[Cars.Lambo]);
