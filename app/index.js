const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', PORT);
app.use(
  session({
    secret: 'vocabulary-trainer',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 * 12 }
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./api/config/passport')(passport);
require('./api/routes')(app, passport);

app.listen(app.get('port'), () =>
  console.log(`Server is running on port ${app.get('port')}`)
);
