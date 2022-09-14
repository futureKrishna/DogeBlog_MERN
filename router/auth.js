const express=require('express');
const router=express.Router()

router.get('/', (req, res) => {
    res.send('Hello router!')
})

router.post('/forsignup',async (req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const password = req.body.password
    const cpassword=req.body.cpassword

    var user = await User.create({
        name:name,email:email,phone:phone,password:password,cpassword:cpassword
    })

    user.save();
    console.log(name,email,phone,password,cpassword)
    res.status(200).send("data saved");
})

module.exports=router