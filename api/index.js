import express from 'express';
import cors from 'cors';
import config from 'dotenv';
import todoRoutes from './routes/TodoRoutes.js';
import authRoutes from './server/AuthRoutes.js';

config.config();

var port = process.env.PORT || 8000;
var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/todos', todoRoutes);
app.use('/api/auth', authRoutes);

app.get('*', (req, res) => res.status(200).send({
  message: 'This is the todolist API, but this was not a valid route.',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});