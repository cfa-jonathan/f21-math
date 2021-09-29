
// Go through each numbered instruction and add their answer on the line below



// Addition
// With the + operator we can add together two values and that these values happen to be numbers.
let sum;
// 1) Add 7 to 36 and store the sum in "sum"

console.log('sum:', sum);

// Subtraction
// With the - operator we can subtract two numbers.
let difference;
// 2) Subtract 17 from 50 and store the difference in "difference"

console.log('difference:', difference);

// Multiplication
// With the * operator we can multiply one number by another number.
let product;
// 3) Multiply 12 by 5 and store the product in "product"

console.log('product:', product);

// Division
// With the / operator we can divide one number by another number.
let quotient;
// 4) Divide 10 by 2 and store the quotient in "quotient"

console.log('quotient:', quotient);

// Exponent
// With the ** operator we can raise one number to the power of another number.
let power;
// 5) Raise 2 to the 5th power and store the result in "power"

console.log('power:', power);

// Modulo
// With the % operator we can get the remainder after dividing one number by another number.
// (Note: This is often used to tell if a number is even or odd)
let remainder;
// 6) Use the modulus operator to divide 11 by 2 and store the remainder in "remainder"

console.log('remainder:', remainder);

// Plus equals and minus equals
// With the += operator / -= operator we can increment/decrement a variable's value.
let counter = 0;
// 7) Use the += operator to increment the "counter" variable by 10

console.log('increment:', counter);

// 8) Use the -= operator to decrement the "counter" variable by 5

console.log('decrement:', counter);

// Absolute Value
// With the Math.abs() method we can get the absolute value of a number.
let negative = -295;
let positive;
// 9) Use the Math.abs() method to get the absolute value of "negative"
//    and store the result in the "positive" variable

console.log('absolute value applied:', positive);

// Rounding up and down
// With the Math.ceil() (up) method we round a number up.
// With the Math.floor() (down) method we round a number down.
let original = 33.7;
let roundedUp;
let roundedDown;
// 10) Use the Math.ceil() method to round "original" up to 34 and store
//     the result in "roundedUp"

console.log('rounded up:', roundedUp);

// 11) Use the Math.floor() method to round "original" down to 33 and store
//     the result in "roundedDown"

console.log('rounded down:', roundedDown);

// Generate a Random Number
// With the Math.random() method we can generate a random number.
// Math.random() returns a number between 0 (inclusive) and 1 (exclusive).
// 
// We can use the following formula to get a random whole number:
// Math.floor( Math.random() * (max - min) ) +  min
let randomNumber;
// 12) Use the formula to generate a random number between 7 and 20 and
//     store the result in "randomNumber"

console.log('randomNumber:', randomNumber);

// Greater than and greater than or equal to
// With the > operator we can tell if one number is greater than the other number
// With the >= operator we can tell if one number is greater or equal to the other number
let greaterThan;
let greaterThanOrEqual;
// 13) Use the > operator to compare if 10 is greater than 20 and store the
//     result in "greaterThan"

console.log('10 is greater than 20:', greaterThan);

// 14) Use the >= operator to compare if 10 is greater than or equal to 10 and store the
//     result in "greaterThanOrEqual"

console.log('10 is greater than or equal to 10:', greaterThanOrEqual);

// Less than and less than or equal to
// With the < operator we can tell if one number is less than the other number
// With the <= operator we can tell if one number is less or equal to the other number
let lessThan;
let lessThanOrEqual;
// 15) Use the < operator to compare if 10 is less than 20 and store the
//     result in "lessThan"

console.log('10 is less than 20:', lessThan);

// 16) Use the <= operator to compare if 10 is less than or equal to 10 and store the
//     result in "lessThanOrEqual"

console.log('10 is less than or equal to 10:', lessThanOrEqual);

// Min and Max
// Math.min() returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
// With the Math.min() and max methods we can get find the smallest and largest number.
let min;
let max;
// 17) Use the Math.min() function to get the minimum number from the following
//     parameter values and store the result in "min"
//     Parameter Values: -4, -3, 1, 2

console.log('minimum value', min);

// 18) Use the Math.max() function to get the maximum number from the following
//     parameter values and store the result in "max"
//     Parameter Values: -4, -3, 1, 2

console.log('maximum value', max);

// Square root
// The Math.sqrt() function returns the square root of a number
let sqrt;
// 19) Use the Math.sqrt() function to get the square root of 36 and store the result in "sqrt"

console.log('square root', sqrt);