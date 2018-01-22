module.exports = (req, res, next) => {
  if (!req.user) {
    // return unauthorized access status
    return res.status(401).send({ error: 'You must log in to do that!' });
  }

  next();
};
