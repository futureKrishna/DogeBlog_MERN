const express=require('express');
const router=express.Router()
const db=require('../database/db')
const User=require('../models/forsignup')

router.get('/', (req, res) => {
    res.send('Hello home router!')
})

//async await signup route
router.post('/signup',async (req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const password = req.body.password
    const cpassword=req.body.cpassword

    try{
        const userExist=await User.findOne({email:email})
        if(userExist){
            res.status(422).send("User already exist")
        }
        else if(password!=cpassword){
            res.status(423).send("Password not matching")
        }
        else{
            const user=new User({name,email,phone,password,cpassword})
            //bcrypts middleware is working here
            const registered=await user.save();
            if(registered){
                res.status(201).send("User registered successfully")
            }
        }

    }catch(err){
        console.log(err)
    }

})

//login route
router.post('/login',async (req,res)=>{

    const{email,password}=req.body

    try{
        if(!email || !password){
            res.status(400).send("Please enter valid details")
        }

        const emailMatch=await User.findOne({email:email})
        const passMatch=await User.findOne({password:password})
        if(emailMatch && passMatch){
            res.status(200).send("Logged in Successfully")
            res.redirect('/')
        }

    }catch(err){
        console.log(err)
    }
})

module.exports=router

/*
saving data in db using promises
User.findOne({email:email}).then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"User already registered"})
        }

        const user=new User({name:name,email:email,phone:phone,password:password,cpassword:cpassword})
        //if both key and value are same,we can just write it once
        const user=new User({name,email,phone,password,cpassword})

        user.save().then(()=>{
            res.status(201).json({message:"User Successfully resistered"})
        }).catch((err)=> res.status(500).json({error:"failed to register"}))

        console.log(name,email,phone,password,cpassword)
    
        }).catch(err=>{console.log(err)})
*/