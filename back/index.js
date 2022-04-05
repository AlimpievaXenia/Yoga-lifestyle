require('dotenv').config();
const express = require('express');

const app = express();
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const registrationRouter = require('./routes/registration');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const practecesRouter = require('./routes/practices');
const bookingsRouter = require('./routes/bookings');
const photosRouter = require('./routes/photos');
const checkDb = require('./helpers/checkDb');
const getSessionUser = require('./middlewares/getSessionUser');
const themesRouter = require('./routes/themes');
const feedBackRouter = require('./routes/feedbacks');
const addUserPhotoRouter = require('./routes/addUserPhoto');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'));

app.use(express.static('assets'));

app.locals.sessionCookie = 'user_id';

const sessionConfig = {
  store: new FileStore(),
  name: app.locals.sessionCookie,
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};
app.use(session(sessionConfig));
app.use(getSessionUser);

app.use('/', registrationRouter);
app.use('/', loginRouter);
app.use('/', logoutRouter);
app.use('/', practecesRouter);
app.use('/', bookingsRouter);
app.use('/', photosRouter);
app.use('/', themesRouter);
app.use('/', feedBackRouter);
app.use('/', addUserPhotoRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  checkDb();
});

module.exports = app;
