import express from 'express';

const app = express(); // Create an Express application instance
const PORT = process.env.PORT || 3000;

const mockUser =[{
  
  id: '12',
  name: 'jhon',
  email: 'jhon@gmail.com'},
  {id: '12',
  name: 'jhon',
  email: 'jhon@gmail.com'},
  {id: '12',
  name: 'jhon',
  email: 'jhon@gmail.com'}
];

app.get('/', (req, res) => {
  res.send(mockUser);
});
app.get('/api/send', (req, res) => {
    res.status(200).json({ "message" : " Hello World"});
})

app.get('/api/register', (req, res) => {
    res.send( [{id: '12', name:'osama', email:'osamaseid@gmail.com'
}]);
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});