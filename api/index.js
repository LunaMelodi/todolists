var express = require('express');
var cors = require('cors');
import config from 'dotenv';
import todoRoutes from './server/routes/TodoRoutes.js';

config.config();

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var port = process.env.PORT || 8000;

app.use('/api/v1/todos', todoRoutes);

app.get('*', (req, res) => res.status(200).send({
  message: 'This is the todolist API, but this was not a valid route.',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});