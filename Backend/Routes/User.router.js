const express = require('express')
const User = require('../Models/User.models')


const router = express.Router();
// Register Users
router.post('/register',async(req,res)=>{
    try {
        const {username,email,password,role} = req.body;
        const user = new User({
            username,
            email,
            password,
            role
        })
        await user.save()
        console.log('user',user);
        
        res.status(201).send({message:'User Register Successfully!! ',user})
    } catch (error) {
        console.log('Error in Register User!! ',error);
        res.status(500).send({message:'Error in Register User!! '})
        
    }
   
})

// Login User
router.post('/login',async(req,res)=>{
    try {
        const {email,password} = req.body

    //User check by Email
    const user = await User.findOne({email})
    if(!user) {
        res.status(404).send({message:'User not Found'})
    }

    // Check Password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        res.status(404).send({message:'Invalid Credential'})
    }
    res.status(201).send({message:'User Login Successfully',user: {
        _id: user._id,
        email: user.email,
        username: user.username,
        role: user.role
    }})
    } catch (error) {
        console.error('Error Login user:', error);
        res.status(500).send({ message: 'Login failed' });
    }

})




// getUsers
router.get('/',async(req,res)=>{
    try {
        const users = await User.find();
        res.status(201).send({message:'Gets User Successfully',users})
    } catch (error) {
        console.log('Cannot get Users Error!!');
        res.status(500).send({message:'Cannot get Users Error!!'})
    }
})


module.exports = router