const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // Url for the user to be redirected after auth permission is granted
    // https://stackoverflow.com/a/33013835/7453363 -.-
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    console.log({
      accessToken,
      refreshToken,
      profile,
      done
    });
  }
));
