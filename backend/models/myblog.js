const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    blogtype:{
        type:String,
        required:true,
    },
    heading:{
        type:String,
        required:true,
    },
    enterblog:{
        type:String,
        required:true,
    }
})


const Myblog=mongoose.model('myBlog',userSchema)

module.exports=Myblog