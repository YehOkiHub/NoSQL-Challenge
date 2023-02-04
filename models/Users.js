const { Schema, model } = require('mongoose');

// Schema to create a course model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,     
      required: true,
      trimmed: true //trim:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      default: true,
      match: [/.+@.+\..+/,"Please enter valid email"]
    },
    
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thoughts',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function(){
  return this.friends.length
})
const Users = model('users', userSchema);

module.exports = Users;
