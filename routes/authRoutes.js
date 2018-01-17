const passport = require('passport');

module.exports = (app) => {
  /**
   * 'google' is internal identifier to GoogleStrategy I've already set up above.
   * Whenever user comes to this route we want to kick them into our auth flow
   * which is managed by passport. It will attempt to authenticate user who comes to this route
   * using google strategy.
   * scope specifies to google servers what access we want to have inside of this user's profile. So
   * we're here asking Google to give us user profile information and email address.
   */
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
};
