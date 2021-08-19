const { Schema, model } = require("mongoose");

// var validateEmail = function(email) {
//   var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return re.test(email)
// };

const userSchema = new Schema(
  {
    username: { type: String, require: true, unique: true },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      // validate: [validateEmail, 'Please fill a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    
    passwordHash: { 
      type: String, 
      require: true, 
      unique: true },

    usertype: String,
    birthday: { type: date },
    choiceOfAction: String,
    grouping: String,

  },
  {
    timestamps: true
  }
);

module.exports = model('User', userSchema);
