/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/
console.log('Exercise 1, Fahrenheit to Celsius');

function toCelsius(temp){
    return (temp -32) * 5/9
}

// Note: "Celsius" was misspelled
console.log("\nSample Answers:")
console.log(toCelsius(32)) // 0
console.log(toCelsius(212)) // 100
console.log(toCelsius(50)) // 10

/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

// let user1 = new User('brians', 'abc123');
// user1.changePassword('abc123', '123abc'); // Sets the user's password to 123abc

console.log('\nExercise 2, User class with password\n');

class User{
    constructor(username, password){
        this.username = username;
        this.password = password; 
    }

    changepwd(old_password, new_password){
        if (this.password === old_password){
        this.password = new_password;
        } else {
            console.log('Invalid password.');        }
    }
}

// Create new user "ababu"
let ababu = new User('ababu', 'ababu123');
// Print ababu's password, "ababu123"
console.log(ababu.password);
// Change the password to "ababu777"
ababu.changepwd('ababu123', 'ababu777');
// Print the new password to prove it changed
console.log(ababu.password);
// Try to change the password again using the incorrect (old) password
ababu.changepwd('ababu123', 'ababu666');

/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/

console.log('\nExercise 3, return an array with the negative integers squared\n');


function squareNegatives(arr){
    let squares = [];
    for (let num of arr){
        if (num < 0){
            squares.push(num**2);
        }
    }
    return squares;
}

console.log("Sample Answers:")
console.log(squareNegatives([-10, -3, 4, -2, 8, 9, -3])) // [100, 9, 4, 9]
console.log(squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5])) // [25, 16, 9, 4, 1]
console.log(squareNegatives([2, 4, 6, 8, 10])) // []



