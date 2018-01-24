module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    console.log(req.user.credits);
    // return error if no creds #403 forbidden
    return res.status(403).send({ error: 'Not enough credits' });
  }
  next();
};
