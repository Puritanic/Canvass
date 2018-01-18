const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String
});

/*
 * Use mongoose to create a new collection in Mongo called users.
 * The first argument is the name of the collection, and the 2nd arg is the userSchema
 * We are telling mongoose that we want to create a new collection named users.
 */
mongoose.model('users', userSchema);
