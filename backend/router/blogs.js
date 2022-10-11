const express=require('express');
const router=express.Router()
const db=require('../database/db')
const Blog=require('../models/myblog')
const body_parser=require('body-parser')

router.use(body_parser.json())
router.use(body_parser.urlencoded({extended:true}))

router.post('/createblog',async (req,res)=>{
    const blogtype = req.body.blogtype
    const heading = req.body.heading
    const enterblog = req.body.enterblog

    try{
        const blog=new Blog({blogtype,heading,enterblog})
        const blogsaved=await blog.save();
        if(blogsaved){
            res.status(200).send("blog saved successfully")
        }
    }catch(err){
        console.log(err)
    }
})


router.get('/readblog',async (req,res)=>{
    // const heading = req.body.heading

    try{
        const blogExist=await Blog.find()
        if(blogExist){
            res.status(200).send(blogExist)
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
        const blogExist=await Blog.find({heading:heading})
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
        const blogExist=await Blog.find({heading:heading})
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