const { Schema, Types } = require('mongoose');
const dateFormat = require("../utils/index.js")

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionName: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 4,
      default: 'Unnamed assignment',
    },
    username: {
      type: String,
      required: true,
      
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timeStamp => dateFormat(timeStamp)
    }
    
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
