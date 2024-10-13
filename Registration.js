const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: true }));

app.set('view engine', 'ejs');

// In-memory storage for users
let users = [];

//GET route for registration
app.get('/register', async (req, res) => {
    res.render('register', { error: null});
});

// POST route for registration
app.post('/register', async (req, res) => {
    const { username, password, confirmPassword } = req.body;
    let error = null;

    //Input validation
    if (!username || !password || !confirmPassword) {
        error = "Every field is required. Try again.";
    } else if (password !== confirmPassword) {
        error = "The passwords do not match. Again.";
    } else if (users.find(user => user.username === username)) {
        error = "Username already exists. Try again.";
    }

    if (error) {
        res.render('register', { error });
    } else {
        // Hash password and store user
        const hashed_password = await bcrypt.hash(password, 10);
        users.push({ username, password: hashed_password });
        res.redirect('/login');
    }
});

// GET route for login
app.get('/login', (req, res) => {
    res.render('login', { error: null });
});

// POST route for login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username)

    if (!user) {
        res.render('login', { error: 'Invalid username or password' });
        } else {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          // Store user session
          req.session.username = username;
          res.redirect('/welcome');
        } else {
          res.render('login', { error: 'Invalid username or password' });
        }
    }
}); 

// GET route for welcome
app.get('/welcome', (req, res) => {
    if (!req.session.username) {
      res.redirect('/login');
    } else {
      res.render('welcome', { username: req.session.username });
    }
  });
  
  // GET route for logout
  app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

