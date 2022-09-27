const express=require('express');
const router=express.Router()
const db=require('../database/db')
const User=require('../models/myblog')
const body_parser=require('body-parser')

router.use(body_parser.json())
router.use(body_parser.urlencoded({extended:true}))

router.post('/createblog',async (req,res)=>{
    const blogtype = req.body.blogtype
    const heading = req.body.heading
    const enterblog = req.body.enterblog

    try{
        const user=new User({blogtype,heading,enterblog})
        const blogsaved=await user.save();
        if(blogsaved){
            res.status(201).send("blog saved successfully")
        }
    }catch(err){
        console.log(err)
    }
})


router.post('/readblog',async (req,res)=>{
    const heading = req.body.heading

    try{
        const blogExist=await db.myblog.find({heading:heading})
        if(blogExist){
            res.status(422).send("blog fetched successfully")
        }
        else{
            res.status(402).send("no such blog exist")
        }
    }catch(err){
        console.log(err)
    }
})


router.post('/updateblog',async (req,res)=>{
    const heading = req.body.heading
    try{
        const blogExist=await db.Myblog.find({heading:heading})
        if(blogExist){
            res.status(422).send("blog fetched successfully")
            dogeblog.myblog.updateOne({blogtype:blogtype,heading:heading,enterblog:enterblog} , {$set:{enterblog:enterblog}})
        }
        else{
            res.status(402).send("no such blog exist")
        }
    }catch(err){
        console.log(err)
    }
})


router.post('/deleteblog',async (req,res)=>{
    const heading = req.body.heading
    try{
        const blogExist=await db.Myblog.find({heading:heading})
        if(blogExist){
            res.status(422).send("blog fetched successfully")
            dogeblog.Myblog.deleteOne({heading:heading})
        }
        else{
            res.status(402).send("no such blog exist")
        }
    }catch(err){
        console.log(err)
    }
})

module.exports=router