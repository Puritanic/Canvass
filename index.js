const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('dotenv').config();
require('./models/User');
require('./services/passport');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECT, {
  useMongoClient: true
});

app.use(cookieSession({
  // determines how long cookie can stay in the browser before it's automatically expired
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  /*
   *  Keys used to encrypt cookie. We can define multiple keys,
   *  and cookieSession will randomly choose what key will be used for encryption
   */
  keys: [process.env.COOKIE_KEY]
}));

app.use(passport.initialize());
app.use(passport.session());

/** *******  Routes  ********* */

require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  res.send('Hello!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server running on port 5000');
});
