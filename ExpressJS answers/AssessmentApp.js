const express = require('express');
const bodyParser = require('body-parser');

///  initialized
const app = express();
const port = 3000;
 
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// In-memory storage for submitted data
let submissions = [];

// GET route to display the form
app.get('/', (req, res) => {
  res.render('index', {error: null});
});

// POST route to handle form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const grade = req.body.grade;
  let error = null;

  // Applying input validation
  if (!name) {
    error = "Name can't be null. Try again.";    
  } else if (isNaN(grade) || grade < 0 || grade > 100) {
    error = "Error! Number must be between 0 and 100.";
  }

  if (error) {
    res.render('index', { error });
  } else {
    // Storing valid submission in array
    submissions.push({ name, grade: parseInt(grade) });
    res.redirect('/results');
  }
})  

  // Render the display page with the submitted data
//   res.render('display', { name: name, grade: grade });
// });

// GET route to render all submissions
app.get('/results', (req, res) => {
    // Transforming number grades to letter grades
    const graded_submissions = submissions.map(submission => {
        const { name, grade } = submission;
        let letter_grade = '';

        if (grade >= 80) {
            letter_grade = 'A';
        } else if (grade >= 70) {
            letter_grade = 'B';
        } else if (grade >= 60) {
            letter_grade = 'C';
        } else if (grade >= 50) {
            letter_grade = 'D';
        } else if (grade >= 40) {
            letter_grade = 'E';            
        } else {
            letter_grade = 'F';
        }

        return { name, grade, letter_grade }
    })

    res.render('results', { submissions: graded_submissions });
});

// Start the server
app.listen(port, () => {
  console.log('Server running at http://localhost:${port})');
});
