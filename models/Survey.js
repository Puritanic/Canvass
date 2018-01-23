const mongoose = require('mongoose');

const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  // * sub-document collection, to prevent duplicate votes
  recipients: [RecipientSchema],
  yes: {
    type: Number,
    default: 0
  },
  no: {
    type: Number,
    default: 0
  },
  // ? with this property with add the idea to surveySchema that every survey is going to belong
  // ? to a very particular user.
  _user: {
    // * id of the user who owns this record
    type: Schema.Types.ObjectId,
    // * this tells mongoose that the reference to id belong to the Users collection
    ref: 'User'
  },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);
