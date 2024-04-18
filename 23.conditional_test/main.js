var car = 'subaru';
//test 1: Equality comparision (true)
console.log("is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // (true)
//Test:2 Strict equality comparision (true)
console.log("is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // (true)
//Test:3 Inequality comparision (false)
console.log("is car != 'subaru'? I predict false.");
console.log(car != 'subaru'); // (false)
//Test:4 Strict inequality comparision (false)
console.log("is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru'); // (false)
//Test:5 Less than comparision (false)
console.log("is car < 'subaru'? I predict false.");
console.log(car < 'subaru'); // false (lexicographic comparison)
//Tesr:6 Greater than comparision (false)
console.log("is car > 'subaru'? I predict false.");
console.log(car > 'subaru'); // false (lexicographic comparison)
//Test:7 Less than or equal comparision (true)
console.log("is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru'); // (true)
//Test:8 Greater than or equal comparision (true)
console.log("is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru'); // (true)
//Test:9 Checking truthiness (true)
console.log("is car? I predict True.");
console.log(car); // (true) non-empty string is truthy
//Test:10 Checking falsiness (false)
console.log("is !car? I predict false.");
console.log(!car); // (false) negation of a truthy value
