var express = require('express');
var cors = require('cors');

var app = express();
var port = 8080;

var todos = require('./routes/todos');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/todos', todos);

app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})