import env from './env';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { NotFound, InternalServerError } from './exceptions';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(require('./routes'));

app.use((req, res, next) => {
  next(new NotFound());
});

app.use((err, req, res, next) => {
  if (err.statusCode == undefined) {
    return res.status(500).json(new InternalServerError());
  }
  if (err.statusCode != 500) {
    const { name, statusCode, message } = err;
    return res.status(statusCode).json({
      name,
      statusCode,
      message,
    });
  }
});

app.listen(process.env.PORT || env.port, () => {
  console.log(`🚀 Servidor rodando na porta ${env.port}`);
});

module.exports = app;
