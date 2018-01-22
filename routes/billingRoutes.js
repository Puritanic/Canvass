const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  app.post('/api/payment', requireLogin, async (req, res) => {
    // Charges the user
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'Payment for 5 survey credits',
      source: req.body.id
    });
    // Updates the user credits value
    req.user.credits += 5;
    const updatedUser = await req.user.save();
    // Sends user model back to whoever made the request
    res.send(updatedUser);
  });
};
