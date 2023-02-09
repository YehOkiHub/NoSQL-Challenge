const { Schema, Types } = require('mongoose');
// const dateFormat = require("../utils/index.js")

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
