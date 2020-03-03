import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';

import indexRouter from './src/routes/index';
import usersRouter from './src/routes/users';

import { swaggerDoc } from './src/modules/auth/swagger';

const app = express();

app.use('/explorer', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
