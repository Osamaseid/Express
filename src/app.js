// Import the Express library
import express from 'express';

// Create an Express application instance
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define a port
const PORT = process.env.PORT || 3000;

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to my Express.js app!');
});

// Route to get a list of users
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];
  res.json(users);
});

// Route to create a new user
app.post('/api/users', (req, res) => {
  const newUser = req.body; // Get user data from the request body
  // Here, you would typically save the user to a database
  res.status(201).json({ message: 'User created', user: newUser });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});