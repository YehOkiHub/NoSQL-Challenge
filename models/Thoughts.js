// const { Timestamp } = require('bson');
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const { dateFormat, timeStamp } = require("../utils/index.js")


// Schema to create Student model


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: String,
      required: true,
      default:Date.now,
      set: (dayM) => {
        let date = new Date(dayM)

        let year = date.getFullYear()
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = months[date.getMonth()]
        let day = date.getDate()

        let newDate = `${year} ${month} ${day}`


        return newDate

      }
      // get: timeStamp => dateFormat(timeStamp)
      
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

const Thoughts = model('thoughts', thoughtSchema);

module.exports = Thoughts;
