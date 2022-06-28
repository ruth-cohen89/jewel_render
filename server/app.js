const express = require('express');
const cookieParser = require('cookie-parser');
const modelRouter = require('./routes/modelRoutes');
const viewRouter = require('./routes/viewRoutes');
const errorController = require('./controllers/errorController');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.enable('trust proxy');

// Access-Control-Allow-Origin *
app.use(cors());
app.options('*', cors());
app.use(morgan('dev'));

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
// app.use(mongoSanitize());
// app.get('/', (req, res) => {
//     res.send({ message: "We did it!" });
//   });

app.get('/', viewRouter);
app.use('/api/v1/models', modelRouter);


// Attach the first Error handling Middleware
// function defined above (which logs the error)
app.use(errorController.errorLogger)

// Attach the second Error handling Middleware
// function defined above (which sends back the response)
app.use(errorController.errorResponder)

// Attach the fallback Middleware
// function which sends back the response for invalid paths)
app.use(errorController.invalidPathHandler)

module.exports = app;
