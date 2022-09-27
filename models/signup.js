const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true
    }
})

/*
using a middleware(bcryptjs) to hash our password,it acts as a middleware because it is working
after the new user is created and before the new user is saved.
'save' is passed because we pass the task before which our work should be performed and we 
know we want the password to hash before saving it in the db.
pre is a defined keyword,we have to use it as it is.
*/
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
    next()
})

const User=mongoose.model('signup',userSchema)

module.exports=User