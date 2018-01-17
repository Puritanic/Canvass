const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

require('dotenv').config();

const app = express();

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // Url for the user to be redirected after auth permission is granted
    callbackUrl: '/auth/google/callback'
  },
  (accessToken) => {
    console.log(accessToken);
  }
));

/**
 * 'google' is internal identifier to GoogleStrategy I've already set up above.
 * Whenever user comes to this route we want to kick them into our auth flow
 * which is managed by passport. It will attempt to authenticate user who comes to this route
 * using google strategy
 *
 */
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server running on port 5000');
});
