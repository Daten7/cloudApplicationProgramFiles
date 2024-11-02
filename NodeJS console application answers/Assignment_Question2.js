// Import the readline module to take input from the user
const readline = require('readline');

// Create an interface for user input and output
const st = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initialize an empty array to store student data
let students = [];

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
            return 'Invalid';
    }
}

// Function to prompt the user to input student details
function askForStudentData() {
    st.question("Enter the student's name (or type 'done' to finish): ", function(name) {
        if (name.toLowerCase() === 'done') {
            calculateStatistics();  // Call the function to calculate statistics when input is done
        } else {
            st.question("Enter the student's score: ", function(score) {
                score = parseInt(score);
                if (!isNaN(score) && score >= 0 && score <= 100) {
                    students.push({ name: name, score: score, grade: getGrade(score) });
                    askForStudentData(); // Prompt again for the next student
                } else {
                    console.log("Invalid score, please enter a score between 0 and 100.");
                    askForStudentData(); // Re-prompt for a valid score
                }
            });
        }
    });
}

// Function to calculate and display statistics
function calculateStatistics() {
    if (students.length === 0) {
        console.log("No students entered.");
        st.close();
        return;
    }

    let highestStudent = students[0];
    let lowestStudent = students[0];
    let totalScore = 0;
    let gradeCount = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };

    // Loop through the students array to calculate statistics
    students.forEach(student => {
        totalScore += student.score;

        // Determine highest score
        if (student.score > highestStudent.score) {
            highestStudent = student;
        }

        // Determine lowest score
        if (student.score < lowestStudent.score) {
            lowestStudent = student;
        }

        // Count grades
        gradeCount[student.grade]++;
    });

    // Calculate the average score
    const averageScore = totalScore / students.length;

    // Output the statistics
    console.log("\n--- Class Statistics ---");
    console.log(`Highest score: ${highestStudent.name} with ${highestStudent.score}`);
    console.log(`Lowest score: ${lowestStudent.name} with ${lowestStudent.score}`);
    console.log(`Average score: ${averageScore.toFixed(2)}`);
    console.log("Grade distribution:");
    console.log(`A: ${gradeCount.A}`);
    console.log(`B: ${gradeCount.B}`);
    console.log(`C: ${gradeCount.C}`);
    console.log(`D: ${gradeCount.D}`);
    console.log(`E: ${gradeCount.E}`);
    console.log(`F: ${gradeCount.F}`);

    st.close(); // Close the readline interface
}

// Start the input process
askForStudentData();
