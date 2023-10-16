// Generate a random number between 1 and 100
let a = Math.floor(Math.random() * 100) + 1;

let input;
let score = 100;

// Running a while loop until the correct number is guessed
while (input !== a) {
    score = score - 1;
    // Use 'prompt' to get input from the user
    input =console.log("Enter The Number:");

    if (input === a) {
        console.log("Congratulations! You guessed the correct number.");
        console.log(`You guessed the actual number in ${100 - score} chances.`);
    } else if (input > a && input < 100) {
        console.log("Your number is greater than the actual number.");
    } else if (input < a && input > 0) {
        console.log("Your number is smaller than the actual number.");
    } else {
        console.log("Enter a number between 1 and 100.");
    }
}
