const { Timestamp } = require('bson');
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require("../utils/index.js")
// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      required: true,
      default:Date.now,
      get: timeStamp => dateFormat(timeStamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length
})

const Thoughts = model('thought', thoughtSchema);

module.exports = Thoughts;
