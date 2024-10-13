// Import the readline module to take input from the user
const readline = require('readline');

// Create an interface for user input and output
const sg = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate the grade based on the score
function getGrade(score) {
    switch (true) {
        case (score >= 80 && score <= 100):
            return 'A';
        case (score >= 70 && score <= 79):
            return 'B';
        case (score >= 60 && score <= 69):
            return 'C';
        case (score >= 50 && score <= 59):
            return 'D';
        case (score >= 40 && score <= 49):
            return 'E';
        case (score < 40):
            return 'F';
        default:
            return 'Invalid score';
    }
}

// Ask for the student's name
sg.question("Enter the student's name: ", function(name) {

    // Ask for the student's score
    sg.question("Enter the student's score: ", function(score) {

        // Convert the score to a number
        score = parseInt(score);

        // Get the corresponding grade
        const grade = getGrade(score);

        // Output the result
        console.log(`${name}'s grade is: ${grade}`);

        // Close the readline interface
        sg.close();
    });
});

