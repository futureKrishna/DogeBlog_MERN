const express=require('express');
const router=express.Router()
const db=require('../database/db')
const User=require('../models/signup')
const body_parser=require('body-parser')
const bcrypt=require('bcryptjs')
// const { body, validationResult } = require('express-validator');

router.use(body_parser.json())
router.use(body_parser.urlencoded({extended:true}))


router.get('/', (req, res) => {
    res.render('/')
    // res.send('Hello home router!')
})

//async await signup route
router.post('/signup',async (req,res)=>{
    const name = req.body.username
    const email = req.body.email
    const phone = req.body.phone
    const password = req.body.password
    const cpassword= req.body.cpassword

    console.log(name , email , phone , password , cpassword)

    try{
        const userExist=await User.findOne({email:email})
        if(userExist){
            res.status(422).json({success:false})
        }
        else if(password!=cpassword){
            res.status(423).json({success:false})
        }
        else{
            const user=new User({name,email,phone,password,cpassword})
            //bcrypts middleware is working here
            const registered=await user.save();
            if(registered){
                res.status(201).json({success:true})
            }
        }

    }catch(err){
        console.log(err)
    }

})

// async await login route
router.post('/login',async (req,res)=>{

    const email = req.body.email
    const password=req.body.password

    try{
        const userLoginDetails=await User.findOne({email:email})

        //changing the password hashcode to a string for checking it's validation
        //1st argument is the user's entered data,2nd argument is db's data
        //const decrypt= await bcrypt.compare(password,userLoginDetails.passMatch)
        if(!email || !password){
            res.status(400).send("Please enter details")
        }
        else if(userLoginDetails){
            const decrypt= await bcrypt.compare(password,userLoginDetails.password)
            if(!decrypt){
                res.status(404).send("Invalid Credentials")
            }
            else{
                // localStorage.setItem("userEmail",email)
                // localStorage.setItem("loggedIn",true)
                console.log(userLoginDetails)
                res.status(200).send({success:true , username: userLoginDetails.name})
            }
        }
        else{
            res.status(404).send("Invalid Credentials")
        }
    }
    catch(err){
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