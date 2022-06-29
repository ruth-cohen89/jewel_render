const express = require('express');
const cookieParser = require('cookie-parser');
const modelRouter = require('./routes/modelRoutes');
const errorController = require('./controllers/errorController');
const cors = require('cors');
const app = express();

app.enable('trust proxy');
app.use(cors());
app.options('*', cors());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

app.use('/api/v1/models', modelRouter);
app.use(errorController.errorLogger)
app.use(errorController.errorResponder)
app.use(errorController.invalidPathHandler)

module.exports = app;
