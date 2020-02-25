import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import indexRouter from './src/routes/index';
import usersRouter from './src/routes/users';

// const swaggerDocument = import('./swagger.json'); // OPTION-01 : Can use multiple json through swaggerOptions as mentioned below 
// const swaggerDocument = YAML.load('./swagger.yaml'); // OPTION-02 : Better as we can import one yaml inside another
const app = express();

const options = {
  explorer: true,
  swaggerOptions: {
    urls: [
      {
        url: 'http://petstore.swagger.io/v2/swagger.json',
        name: 'Spec1'
      }
    ]
  }
}

app.use('/explorer', swaggerUi.serve, swaggerUi.setup(undefined, options));
// app.use('/explorer', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
