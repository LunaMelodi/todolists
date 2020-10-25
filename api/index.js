import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import config from 'dotenv';
import morgan from 'morgan';
import todoRoutes from './routes/TodoRoutes.js';
import authRoutes from './routes/AuthRoutes.js';
import { http } from 'winston';

config.config();

var port = process.env.PORT || 8000;
var app = express();

if (process.env.NODE_ENV == 'production') {
  app.use(morgan('common', { skip: function(req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log' }));
} else {
  app.use(morgan('dev'));
}
app.use(cors({
  credentials: true,
  origin: 'http://127.0.0.1:5500'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/api/todos', todoRoutes);
app.use('/auth', authRoutes);

app.get('*', (req, res) => res.status(200).send({
  message: 'This is the todolist API, but this was not a valid route.',
}));

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});