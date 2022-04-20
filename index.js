const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

// to parse body

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello from my smarty pant  auto restart!!!');
});
const users = [
  {
    id: 1,
    name: 'Sabana',

    email: 'sabana@gmail.com',
    phone: '0178888888888',
  },
  {
    id: 2,
    name: 'sabnoor',
    email: 'sabnoor@gmail.com',
    phone: '0178888888888',
  },
  {
    id: 3,
    name: 'shucorita',
    email: 'shucorita@gmail.com',
    phone: '0178888888888',
  },
  {
    id: 4,
    name: 'sraboni',  
    email: 'sraboni@gmail.com',
    phone: '0178888888888',
  },
  {
    id: 5,
    name: 'shuchonda',
    email:'shuchonda@gmail.com',
    phone: '0178888888888',
  },
  {
    id: 6,
    name: 'srabonti',
    email:'srabonti@gmail.com',
    phone: '0178888888888',
  },
  {
    id: 7,
    name: 'sabila',
    email:'sabila@gmail.com',
    phone: '0178888888888',
  },
];
// get method
app.get('/users', (req, res) => {
  // search with query
  // console.log( 'query',req.query);

  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user => user.name.toLowerCase().includes(search))
    res.send(matched)
  } 
  else {
    
    res.send(users);
  }
});
app.get('/fruits', (req, res) => {
  res.send(['mango','apple','banana','oranges'])
})

// dynamic get using parameter
app.get('/user/:id', (req, res) => {
   
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user);
    console.log(req.params);
})
// post method 
app.post('/user', (req, res) => {
  console.log('request', req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
})
app.listen(port, () => {
  console.log('listening port', port);
});
