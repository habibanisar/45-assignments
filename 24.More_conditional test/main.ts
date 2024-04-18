let car : string = 'subaru';
let age : number = 19;
let numbers : number[] = [1, 2, 3, 4,];

//  **String Test**

//Test 1: Equality (true)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); 

//test 2: Strict equality (false)
console.log("Is car === 'subaru'? I predict false.");
console.log(car === 'subru'); 

//Test 3: Inequality (true)
console.log("is car != 'toyota'? I predict true.");
console.log(car != 'Toyota'); 

//test 4: Inquality (false)
console.log("Is car !== 'subaru'? I predict false");
console.log(car !== 'subaru'); 

//  **Lower function Test**

//Test 5: LowerCase conversion (true)
console.log("Is car.toLowerCase() == 'subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru');

//Test 6: LowerCase conversion (false)
console.log("Is car === car.toLowerCase()? I predict false.");
console.log(car === car.toLowerCase());

//  **Numerical Test**

//Test 7: Equality (true)
console.log("Is age == 25? I predict true.");
console.log(age == 19);

//Test 8: Inequality
console.log("Is age != 30? I predict true.")
console.log(age != 30);

//Test 9: Greater than 
console.log("Is age > 30? I predict false.");
console.log(age > 30);

//Test 10: Less than
console.log("Is age <= 19? I predict true.");
console.log(age <= 19); 

//  **Logical operators**

//Test 11: AND (true)
console.log("Is age > 18 && age < 30? I predict true.");
console.log(age > 18 && age < 30);

//Test 12: OR (false)
console.log("Is age > 30 || age < 19? I predict false.");
console.log(age > 30 || age < 19);

//  **Array**

// Test 13: In array (true)
console.log("Is 4 in numbers? I predict true");
console.log(4 in numbers);

//Test 14: Not in array (false)
console.log("Is 5 not in numbers? I predict true.");
console.log(5 in numbers);


