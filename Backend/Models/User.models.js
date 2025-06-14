const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
// const 

const userSchema = new mongoose.Schema(
    {
      username:{
        type:String,
        unique:true,
        required:true
      },
      email:{
        type:String,
        unique:true,
        required:true
      },
      password:{
        type:String,
        unique:true,
        required:true
      },
      role:{
        type:String,
        default:'user'
      }
    },{timestamps:true}
);

// Bcrypt Password

// Bcrypt Password
userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) return next();
  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
  next();
});

// Compare Password while Login
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};


const User = mongoose.model('User', userSchema);
module.exports = User